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
import { User } from '../auth/entity/user.entity';
import { SendWaQcDto } from './dto/notification-send-wa.dto';
import { GeneratorService } from '../generator/generator.service';
import { QcPdfDataService } from '../generator/generator-data.service';
import { LogService } from '../log-app/log.service';

@Injectable()
export class NotificationService implements OnModuleInit {
  private client: Client;
  private isReady = false;
  private readonly logger = new Logger(NotificationService.name);
  constructor(
    private readonly messageService: MessageService,

    private readonly generatorService: GeneratorService,
    private readonly qcPdfDataService: QcPdfDataService,
    private readonly logService: LogService,

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

    this.registerEvents();
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

  private registerEvents() {
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

    this.client.on('ready', async () => {
      this.isReady = true;

      try {
        await this.client.pupPage?.evaluate(() => {
          // @ts-ignore
          window.WWebJS.sendSeen = async () => {};
        });

        this.logger.log('✅ WhatsApp client is ready (sendSeen disabled)');
      } catch (err) {
        this.logger.error('❌ Failed to disable sendSeen', err);
      }
    });

    this.client.on('disconnected', (reason) => {
      this.logger.warn(`⚠️ WhatsApp disconnected: ${reason}`);
      this.isReady = false;

      // delay biar puppeteer bener-bener idle
      setTimeout(() => this.reconnect(), 5000);
    });
  }

  // Reconnect logic
  private reconnecting = false;

  private async reconnect() {
    if (this.reconnecting) return;

    this.reconnecting = true;

    try {
      this.logger.warn('🔁 Re-initializing WhatsApp client...');
      this.client.removeAllListeners();

      this.client = new Client({
        authStrategy: new LocalAuth({ clientId: 'system' }),
        puppeteer: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      });

      this.registerEvents();
      await this.client.initialize();
    } catch (err) {
      this.logger.error('Reconnect failed', err);
    } finally {
      this.reconnecting = false;
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

  async sendPdfToGroups(
    pdfBuffer: Buffer,
    fileName: string,
    caption: string,
    groupNames: string[],
  ) {
    if (!this.client || !this.isReady)
      throw new Error('WhatsApp client belum siap');

    const chats = await this.client.getChats();

    const media = new MessageMedia(
      'application/pdf',
      pdfBuffer.toString('base64'),
      fileName,
    );

    const sent: string[] = [];
    const failed: string[] = [];

    for (const groupName of groupNames) {
      const group = chats.find(
        (chat) =>
          chat.isGroup && chat.name?.toLowerCase() === groupName.toLowerCase(),
      );

      if (!group) {
        failed.push(groupName);
        continue;
      }

      try {
        await this.client.sendMessage(group.id._serialized, media, {
          caption,
          sendMediaAsDocument: true,
        });
        sent.push(groupName);
      } catch (err) {
        failed.push(groupName);
      }
    }

    return { sent, failed };
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

    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    if (!user?.locationId) throw new Error('User tidak punya location_id');

    const senderName = user.full_name ?? user.username ?? 'System';
    const locationId = user.locationId;

    /** 2. Ambil QC Record */
    const record = await this.qcRecordRepo.findOne({
      where: {
        qc_id,
        sequence_no: no_seq,
        piece_no,
        location_id: locationId,
      },
      relations: ['location'],
    });

    if (!record)
      throw new Error(
        `QC Record tidak ditemukan qc_id=${qc_id}, seq=${no_seq}, piece=${piece_no}`,
      );

    /** VALIDASI NAMA WA GROUP */
    const waGroupRaw = record.location?.wa_group;

    if (!waGroupRaw) {
      throw new Error(
        `WA group belum diset untuk location ${record.location?.name || locationId}`,
      );
    }

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

    /** Mapping & grouping */
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

    /** 6. Generate PDF */
    const pdfData = await this.qcPdfDataService.getPdfData(
      qc_id,
      no_seq,
      piece_no,
      userId,
    );

    const pdfBuffer = await this.generatorService.generatePdf(pdfData);

    /** 7. Kirim ke grup */
    const targetGroups = waGroupRaw
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);

    if (!targetGroups.length) {
      throw new Error(
        `WA group kosong / tidak valid untuk location ${record.location?.name}`,
      );
    }

    await this.sendPdfToGroups(
      pdfBuffer,
      `${qc_id}-${no_seq}-${majorPos}/${piece_no}.pdf`,
      `QC Report ${qc_id}-${no_seq}-${majorPos}/${piece_no}.pdf`,
      targetGroups,
    );

    const sendResult = await this.sendImageToGroups(
      image,
      message,
      targetGroups,
    );

    /** 8. LOG SERVICE (SETELAH SUKSES) */
    await this.logService.createLog(user, {
      data_1: 'QC-SEND-WA',
      data_2: `qc_id:${qc_id} seq:${no_seq} piece:${piece_no}`,
      data_3: `status:${record.status_overall}`,
      data_4: `passed:${passed.length} notPassed:${errors.length}`,
      data_5: `targetGroup:${targetGroups.join(',') || '-'}`,
    });

    this.messageService.setMessage(
      `Berhasil mengirim QC WA untuk Batch ${qc_id} Seq ${no_seq} Piece ${piece_no}`,
    );

    return sendResult;
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
