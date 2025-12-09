import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { join } from 'path';
import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import QRCode from 'qrcode';
import { MessageService } from '../message/message.service';
import { InjectRepository } from '@nestjs/typeorm';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { Repository } from 'typeorm';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { ConfigService } from '@nestjs/config';
import { User } from '../auth/entitities/user.entity';
import { SendWaQcDto } from './dto/notification-send-wa.dto';

@Injectable()
export class NotificationService implements OnModuleInit {
  private client: Client;
  private isReady = false;
  private readonly logger = new Logger(NotificationService.name);
  constructor(
    private readonly messageService: MessageService,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,

    private readonly configService: ConfigService,
  ) {}

  onModuleInit() {
    this.client = new Client({
      authStrategy: new LocalAuth({ clientId: 'system' }),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    });

    // === EVENT HANDLERS ===
    this.client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
      this.logger.warn('📱 Scan QR code di HP kamu untuk login WhatsApp.');
    });

    this.client.on('authenticated', () => {
      this.logger.log('🔐 WhatsApp authenticated!');
    });

    this.client.on('auth_failure', (msg) => {
      this.logger.error('❌ Authentication failed:', msg);
      this.isReady = false;
    });

    this.client.on('ready', () => {
      this.isReady = true;
      this.logger.log('✅ WhatsApp client is ready!');
    });

    this.client.on('disconnected', (reason) => {
      this.logger.warn(`⚠️ WhatsApp disconnected: ${reason}`);
      this.isReady = false;
      // auto re-init supaya bot reconnect
      this.reconnect();
    });

    this.client.initialize();
  }

  isClientReady() {
    return this.isReady;
  }

  async onQr(callback: (qr: string) => void) {
    if (!this.client) this.onModuleInit();
    this.client.on('qr', callback);
  }

  async getQrImage(): Promise<Buffer> {
    if (!this.client) this.onModuleInit();

    return new Promise((resolve, reject) => {
      const qrListener = async (qr: string) => {
        try {
          const buffer = await QRCode.toBuffer(qr, { type: 'png' });
          resolve(buffer);
        } catch (err) {
          reject(err);
        } finally {
          this.client.removeListener('qr', qrListener);
        }
      };

      this.client.on('qr', qrListener);
    });
  }

  // Reconnect logic
  private async reconnect() {
    try {
      this.logger.log('🔁 Trying to reconnect WhatsApp...');
      await this.client.destroy();
      await this.client.initialize();
    } catch (error) {
      this.logger.error('Reconnect failed:', error);
    }
  }

  // Grouped format message
  private groupByPosition(
    data: { code: string; value: number; position: string }[],
  ) {
    const groups: Record<string, any[]> = {};

    data.forEach((item) => {
      // Gabungkan FormRight dan yang tanpa position ke "Basic"
      let pos = item.position;
      if (!pos || pos === 'FormRight') {
        pos = 'Basic';
      }

      if (!groups[pos]) groups[pos] = [];
      groups[pos].push(item);
    });

    return groups;
  }

  // Kirim Image ke beberapa grup sekaligus
  async sendImageToGroups(
    imageUrl: string,
    caption?: string,
    groupNames: string[] = ['bot tester'],
  ) {
    if (!this.client || !this.isReady)
      throw new Error('WhatsApp client belum siap');

    // Ambil semua chat
    const chats = await this.client.getChats();

    // Konversi URL → File Path
    const fileName = imageUrl.split('/uploads/')[1];
    if (!fileName) throw new Error('URL upload tidak valid');

    const filePath = join(process.cwd(), 'uploads', fileName);
    const media = MessageMedia.fromFilePath(filePath);

    const results: string[] = [];
    const failed: string[] = [];

    // Loop kirim ke tiap grup
    for (const groupName of groupNames) {
      const group = chats.find((chat) => {
        if (!chat || !chat.isGroup || !chat.name) return false;
        return chat.name.toLowerCase() === groupName.toLowerCase();
      });

      if (!group) {
        console.warn(`⚠️ Grup "${groupName}" tidak ditemukan`);
        failed.push(groupName);
        continue;
      }

      try {
        await this.client.sendMessage(group.id._serialized, media, {
          caption,
          sendMediaAsDocument: true,
        });
        console.log(`✅ Gambar terkirim ke grup "${groupName}"`);
        results.push(groupName);
      } catch (err) {
        console.error(`❌ Gagal mengirim ke grup "${groupName}"`, err);
        failed.push(groupName);
      }
    }

    return { success: results.length > 0, sentTo: results, failed };
  }

  // Kirim QC histori & Image ke beberapa grup
  async sendQcImage(dto: SendWaQcDto, userId: string) {
    const { qc_id, no_seq, piece_no, image } = dto;

    if (!this.client || !this.isReady)
      throw new Error('WhatsApp client belum siap');

    /** 1. Ambil lokasi user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    if (!user?.locationId) throw new Error('User tidak punya location_id');

    const senderName = user.full_name ?? user.username ?? 'System';

    const locationId = user.locationId;

    /** 2. Ambil QC Record lengkap */
    const record = await this.qcRecordRepo.findOne({
      where: {
        qc_id: qc_id,
        sequence_no: no_seq,
        piece_no: piece_no,
        location_id: locationId,
      },
      relations: ['location'],
    });

    if (!record)
      throw new Error(
        `QC Record tidak ditemukan untuk qc_id=${qc_id}, seq=${no_seq}, piece=${piece_no}, location=${locationId}`,
      );

    /** 3. Ambil qc_data */
    const raw = await this.qcDataRepo
      .createQueryBuilder('d')
      .leftJoin(
        'qc_template_data',
        't',
        't.input_code = d.input_code AND t.qc_template_id = :tplId',
        { tplId: record.qc_template_id },
      )
      .leftJoin('product_type_data', 'p', 'p.code = d.input_code')
      .select([
        'd.input_code AS code',
        'd.input_value AS value',
        'd.status AS status',
        't.position AS position',
        't.order_numb AS order_numb',
        'p.alias AS alias',
      ])
      .where('d.qc_id = :qcId', { qcId: qc_id })
      .andWhere('d.sequence_no = :seq', { seq: no_seq })
      .andWhere('d.piece_no = :piece', { piece: piece_no })
      .andWhere('d.location_id = :loc', { loc: locationId })
      .orderBy('t.order_numb', 'ASC')
      .addOrderBy('d.input_code', 'ASC')
      .getRawMany();

    /** 4. Unique by code */
    const uniqueRaw = Array.from(new Map(raw.map((r) => [r.code, r])).values());

    const passed = uniqueRaw.filter((r) => r.status === 'Passed');
    const errors = uniqueRaw.filter((r) => r.status === 'Not Passed');

    const mappedPassed = passed.map((p) => ({
      code: p.code,
      value: p.value,
      position: p.position,
      alias: p.alias || '',
      major: p.code?.includes('.') ? p.code.split('.')[0] : null,
    }));

    const mappedErrors = errors.map((e) => ({
      code: e.code,
      value: e.value,
      position: e.position,
      alias: e.alias || '',
      major: e.code?.includes('.') ? e.code.split('.')[0] : null,
    }));

    /** Grouping */
    const groupedPassed = this.groupByPosition(mappedPassed);
    const groupedErrors = this.groupByPosition(mappedErrors);

    const majorPos = mappedPassed[0]?.major || mappedErrors[0]?.major || '-';

    /** 5. Generate WA message */
    const message = this.generateQcMessage({
      qcId: record.qc_id,
      noSequence: record.sequence_no,
      pieceNo: record.piece_no,
      kgmActual: record.kg_m,
      totalLength: record.total_length,
      size: record.size,
      location: record.location_id,
      locationName: record.location?.name ?? '-',
      statusQC: record.status,
      statusAllQC: record.status_overall,
      createdAt: record.created_dt.toLocaleDateString('id-ID'),
      startDate: record.start_dt?.toLocaleTimeString('id-ID'),
      endDate: record.created_dt?.toLocaleTimeString('id-ID'),
      totalPassed: passed.length,
      totalErrors: errors.length,
      groupedPassed,
      groupedErrors,
      majorPos,
      senderName,
    });

    this.messageService.setMessage(
      `Berhasil mengirim notifikasi untuk Batch Id ${qc_id} No seq ${no_seq} potongan ${piece_no}`,
    );

    /** Kirim ke grup */
    const groupsEnv = this.configService.get<string>('WHATSAPP_GROUP_NAME');
    const targetGroups = groupsEnv
      ? groupsEnv
          .split(',')
          .map((g) => g.trim())
          .filter((g) => g.length > 0)
      : [];

    return this.sendImageToGroups(image, message, targetGroups);
  }

  // Generate plain text message format
  generateQcMessage(data: {
    qcId: string;
    noSequence: number;
    pieceNo: string;
    kgmActual: number;
    totalLength: number;
    size: string;
    location: string;
    locationName: string;
    statusQC: string;
    statusAllQC: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    totalPassed: number;
    totalErrors: number;
    groupedPassed: Record<string, any[]>;
    groupedErrors: Record<string, any[]>;
    majorPos: string;
    senderName: string;
  }) {
    const {
      qcId,
      noSequence,
      pieceNo,
      kgmActual,
      totalLength,
      size,
      location,
      locationName,
      statusQC,
      statusAllQC,
      startDate,
      endDate,
      createdAt,
      totalPassed,
      totalErrors,
      groupedPassed,
      groupedErrors,
      majorPos,
    } = data;
    const safe = (val: any) => (val === null || val === undefined ? '-' : val);

    let message = `📋 *QUALITY CONTROL REPORT*\n`;
    message += `──────────────────────\n`;
    message += `*Dikirim oleh:* ${data.senderName}\n\n`;
    message += `*No Sequence* ${noSequence}\n`;
    message += `*Batch ID:* ${qcId}\n`;
    message += `*Size:* ${size}\n`;
    message += `*Kg/m Actual:* ${safe(kgmActual)}\n`;
    message += `*Total Panjang (m):* ${safe(totalLength)}\n`;
    message += `*Potongan QC:* ${majorPos} / ${safe(pieceNo)} \n`;
    message += `*Lokasi:* ${locationName} (${location})\n`;
    message += `*Status QC:* ${statusQC} (${statusAllQC})\n`;
    message += `*Tanggal QC:* ${createdAt}\n`;
    message += `*Dimulai QC:* ${startDate}\n`;
    message += `*Berakhir QC:* ${endDate}\n`;
    message += `──────────────────────\n`;
    message += `✅ *Passed:* ${totalPassed}\n`;
    message += `❌ *Not Passed:* ${totalErrors}\n`;
    message += `──────────────────────\n\n`;

    // -------------------------------
    // ✅ Detail Passed
    // -------------------------------
    if (totalPassed > 0) {
      message += `✅ *Detail Passed:*\n\n`;
      let counter = 1;

      const sortedPassedKeys = Object.keys(groupedPassed).sort((a, b) => {
        if (a === 'Basic') return 1;
        if (b === 'Basic') return -1;
        return a.localeCompare(b);
      });

      for (const pos of sortedPassedKeys) {
        const items = groupedPassed[pos];
        if (items.length > 0) {
          // Alias cuma di header posisi
          const alias = items[0].alias ? ` (${items[0].alias})` : '';
          message +=
            pos === 'Basic' ? `📌 *Basic*\n` : `📌 *Position ${pos}${alias}*\n`;

          items.forEach((item) => {
            message += `${counter}. [${item.code}] Value: ${item.value}\n`;
            counter++;
          });
          message += `\n`;
        }
      }
      message += `──────────────────────\n\n`;
    }

    // -------------------------------
    // ❌ Detail Not Passed
    // -------------------------------
    if (totalErrors > 0) {
      message += `❌ *Detail Not Passed:*\n\n`;
      let counter = 1;

      const sortedErrorKeys = Object.keys(groupedErrors).sort((a, b) => {
        if (a === 'Basic') return 1;
        if (b === 'Basic') return -1;
        return a.localeCompare(b);
      });

      for (const pos of sortedErrorKeys) {
        const items = groupedErrors[pos];
        if (items.length > 0) {
          const alias = items[0].alias ? ` (${items[0].alias})` : '';
          message +=
            pos === 'Basic' ? `📌 *Basic*\n` : `📌 *Position ${pos}${alias}*\n`;

          items.forEach((item) => {
            message += `${counter}. [${item.code}] Value: ${item.value}\n`;
            counter++;
          });
          message += `\n`;
        }
      }
    }

    message += `⚠️ Please check and verify.`;
    return message;
  }
}
