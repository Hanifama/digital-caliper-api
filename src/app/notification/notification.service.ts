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

  // Kirim Image ke grup tujuan
  async sendImageToGroup(imageUrl: string, caption?: string) {
    if (!this.client || !this.isReady)
      throw new Error('WhatsApp client belum siap');

    const fixedGroupName = 'Test WA GYS'; // Nama grup

    // Cari grup
    const chats = await this.client.getChats();
    const group = chats.find(
      (chat) =>
        chat.isGroup &&
        chat.name.toLowerCase() === fixedGroupName.toLowerCase(),
    );

    if (!group) throw new Error(`Grup "${fixedGroupName}" tidak ditemukan`);

    // Konversi URL → File Path
    const fileName = imageUrl.split('/uploads/')[1];
    if (!fileName) throw new Error('URL upload tidak valid');

    const filePath = join(process.cwd(), 'uploads', fileName);

    // Load dari file lokal
    const media = MessageMedia.fromFilePath(filePath);

    // Kirim ke grup
    return this.client.sendMessage(group.id._serialized, media, { caption });
  }

  // Kirim QC histori & Image ke grup tujuan
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

    const totalPassed = raw.filter((r) => r.status === 'Passed').length;
    const errors = raw.filter((r) => r.status === 'Not Passed');

    const mappedErrors = errors.map((e) => ({
      code: e.code,
      value: e.value,
      position: e.position,
    }));

    const errorsWithPosition = mappedErrors.filter((e) => !!e.position);
    const errorsWithoutPosition = mappedErrors.filter((e) => !e.position);

    const groupedErrors = this.groupByPosition(errorsWithPosition);

    const message = this.generateQcMessage({
      qcId: record.qc_id,
      template: record.profile,
      location: record.location_id,
      locationName: record.location?.name ?? '-',
      statusQC: record.status,
      statusAllQC: record.status_overall,
      createdAt: record.created_dt.toLocaleDateString('id-ID'),
      startDate: record.start_dt?.toLocaleTimeString('id-ID'),
      endDate: record.created_dt?.toLocaleTimeString('id-ID'),
      totalPassed,
      totalErrors: errors.length,
      groupedErrors,
      errorsWithoutPosition,
    });

    this.messageService.setMessage(
      `Berhasil mengirim notifikasi untuk QC Batch Id ${qcId}`,
    );

    // Kirim ke grup tetap
    return this.sendImageToGroup(imageUrl, message);
  }

  // Generate plan text message format
  generateQcMessage(data: {
    qcId: string;
    template: string;
    location: string;
    locationName: string;
    statusQC: string;
    statusAllQC: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    totalPassed: number;
    totalErrors: number;
    groupedErrors: Record<string, any[]>;
    errorsWithoutPosition?: { code: string; value: number }[];
  }) {
    const {
      qcId,
      template,
      location,
      locationName,
      statusQC,
      statusAllQC,
      startDate,
      endDate,
      createdAt,
      totalPassed,
      totalErrors,
      groupedErrors,
      errorsWithoutPosition = [],
    } = data;

    let message = `📋 *QUALITY CONTROL REPORT*\n`;
    message += `──────────────────────\n`;
    message += `*Batch ID:* ${qcId}\n`;
    message += `*Template:* ${template}\n`;
    message += `*Lokasi:* ${locationName} (${location})\n`;
    message += `*Status QC:* ${statusQC} (${statusAllQC})\n`;
    message += `*Tanggal QC:* ${createdAt}\n`;
    message += `*Dimulai QC:* ${startDate}\n`;
    message += `*Berakhir QC:* ${endDate}\n`;
    message += `──────────────────────\n`;
    message += `✅ *Passed:* ${totalPassed}\n`;
    message += `❌ *Not Passed:* ${totalErrors}\n`;
    message += `──────────────────────\n\n`;

    message += `❌ *Detail Not Passed:*\n\n`;
    let counter = 1;
    // Cetak data yang punya posisi
    for (const pos of Object.keys(groupedErrors)) {
      if (pos !== 'FormRight') {
        message += `📌 Posisi ${pos}\n`;
      }
      groupedErrors[pos].forEach((item) => {
        message += `${counter}. [${item.code}] Value: ${item.value}\n`;
        counter++;
      });
      message += `\n`;
    }

    // Cetak data tanpa posisi
    errorsWithoutPosition.forEach((item) => {
      message += `${counter}. [${item.code}] Value: ${item.value}\n`;
      counter++;
    });
    if (errorsWithoutPosition.length) message += `\n`;

    message += `⚠️ Please check and verify.`;

    return message;
  }
}
