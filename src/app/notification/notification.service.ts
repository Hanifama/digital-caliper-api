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

@Injectable()
export class NotificationService implements OnModuleInit {
  private client: Client;
  private isReady = false;
  private readonly logger = new Logger(NotificationService.name);
  constructor(
    private readonly messageService: MessageService,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,
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
    if (!this.client) this.onModuleInit(); // initialize kalau belum
    this.client.on('qr', callback);
  }

  async getQrImage(): Promise<Buffer> {
    if (!this.client) this.onModuleInit(); // initialize kalau belum

    return new Promise((resolve, reject) => {
      const qrListener = async (qr: string) => {
        try {
          const buffer = await QRCode.toBuffer(qr, { type: 'png' });
          resolve(buffer);
        } catch (err) {
          reject(err);
        } finally {
          // hapus listener supaya cuma terpanggil sekali
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
      const pos = item.position!;
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
      const group = chats.find(
        (chat) =>
          chat.isGroup && chat.name.toLowerCase() === groupName.toLowerCase(),
      );

      if (!group) {
        console.warn(`⚠️ Grup "${groupName}" tidak ditemukan`);
        failed.push(groupName);
        continue;
      }

      try {
        await this.client.sendMessage(group.id._serialized, media, { caption });
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
  async sendQcImage(qcId: string, imageUrl: string) {
    if (!this.client || !this.isReady)
      throw new Error('WhatsApp client belum siap');

    const record = await this.qcRecordRepo.findOne({
      where: { qc_id: qcId },
      relations: ['location'],
    });
    if (!record) throw new Error(`QC ID ${qcId} tidak ditemukan`);

    const raw = await this.qcDataRepo
      .createQueryBuilder('d')
      .leftJoin(
        'qc_template_data',
        't',
        't.input_code = d.input_code AND t.qc_template_id = :tplId',
        { tplId: record.qc_template_id },
      )
      .select([
        'd.input_code AS code',
        'd.input_value AS value',
        'd.status AS status',
        't.position AS position',
      ])
      .where('d.qc_id = :qcId', { qcId })
      .orderBy('t.order_numb', 'ASC')
      .addOrderBy('d.input_code', 'ASC')
      .getRawMany();

    const passed = raw.filter((r) => r.status === 'Passed');
    const errors = raw.filter((r) => r.status === 'Not Passed');

    const mappedPassed = passed.map((p) => ({
      code: p.code,
      value: p.value,
      position: p.position,
    }));

    const mappedErrors = errors.map((e) => ({
      code: e.code,
      value: e.value,
      position: e.position,
    }));

    // Grouping by posisi
    const passedWithPosition = mappedPassed.filter((e) => !!e.position);
    const passedWithoutPosition = mappedPassed.filter((e) => !e.position);
    const errorsWithPosition = mappedErrors.filter((e) => !!e.position);
    const errorsWithoutPosition = mappedErrors.filter((e) => !e.position);

    const groupedPassed = this.groupByPosition(passedWithPosition);
    const groupedErrors = this.groupByPosition(errorsWithPosition);

    const message = this.generateQcMessage({
      qcId: record.qc_id,
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
      passedWithoutPosition,
      errorsWithoutPosition,
    });

    this.messageService.setMessage(
      `Berhasil mengirim notifikasi untuk QC Batch Id ${qcId}`,
    );

    // Kirim ke beberapa grup sekaligus
    const targetGroups = ['test wa gys', 'erp development'];
    return this.sendImageToGroups(imageUrl, message, targetGroups);
  }

  // Generate plain text message format
  generateQcMessage(data: {
    qcId: string;
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
    passedWithoutPosition?: { code: string; value: number }[];
    errorsWithoutPosition?: { code: string; value: number }[];
  }) {
    const {
      qcId,
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
      passedWithoutPosition = [],
      errorsWithoutPosition = [],
    } = data;

    let message = `📋 *QUALITY CONTROL REPORT*\n`;
    message += `──────────────────────\n`;
    message += `*Batch ID:* ${qcId}\n`;
    message += `*Size:* ${size}\n`;
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
    message += `✅ *Detail Passed:*\n\n`;
    let counter = 1;

    // urutkan posisi supaya FormRight di akhir
    const sortedPassedKeys = Object.keys(groupedPassed).sort((a, b) => {
      if (a === 'FormRight') return 1;
      if (b === 'FormRight') return -1;
      return 0;
    });

    for (const pos of sortedPassedKeys) {
      if (pos !== 'FormRight') {
        message += `📌 Posisi ${pos}\n`;
      }
      groupedPassed[pos].forEach((item) => {
        message += `${counter}. [${item.code}] Value: ${item.value}\n`;
        counter++;
      });
      message += `\n`;
    }

    // tanpa posisi → terakhir tanpa label posisi
    passedWithoutPosition.forEach((item) => {
      message += `${counter}. [${item.code}] Value: ${item.value}\n`;
      counter++;
    });
    message += `──────────────────────\n\n`;

    // -------------------------------
    // ❌ Detail Not Passed
    // -------------------------------
    message += `❌ *Detail Not Passed:*\n\n`;
    counter = 1;

    // urutkan posisi supaya FormRight di akhir
    const sortedErrorKeys = Object.keys(groupedErrors).sort((a, b) => {
      if (a === 'FormRight') return 1;
      if (b === 'FormRight') return -1;
      return 0;
    });

    for (const pos of sortedErrorKeys) {
      if (pos !== 'FormRight') {
        message += `📌 Posisi ${pos}\n`;
      }
      groupedErrors[pos].forEach((item) => {
        message += `${counter}. [${item.code}] Value: ${item.value}\n`;
        counter++;
      });
      message += `\n`;
    }

    // tanpa posisi → terakhir tanpa label posisi
    errorsWithoutPosition.forEach((item) => {
      message += `${counter}. [${item.code}] Value: ${item.value}\n`;
      counter++;
    });

    if (errorsWithoutPosition.length) message += `\n`;

    message += `⚠️ Please check and verify.`;
    return message;
  }
}
