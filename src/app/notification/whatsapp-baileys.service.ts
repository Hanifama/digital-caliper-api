import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import pino from 'pino';
import { join } from 'path';
import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  WASocket,
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import * as fs from 'fs';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IWhatsAppService } from './interfaces/whatsapp.interface';

import { MessageService } from '../message/message.service';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { User } from '../auth/entity/user.entity';
import { SendWaQcDto } from './dto/notification-send-wa.dto';
import { GeneratorService } from '../generator/generator.service';
import { QcPdfDataService } from '../generator/generator-data.service';
import { LogService } from '../log-app/log.service';

@Injectable()
export class WhatsappBaileysService
  implements OnModuleInit, OnModuleDestroy, IWhatsAppService
{
  private sock: WASocket | null = null;
  private ready = false;
  private readonly logger = new Logger(WhatsappBaileysService.name);
  private readonly AUTH_DIR = './baileys_auth_info';
  private groupCache: Map<string, string> = new Map();

  private qrRefreshInterval: NodeJS.Timeout | null = null;
  private lastQr: string | null = null;
  private isConnecting = false;

  private reconnectAttempts = 0;
  private readonly MAX_RECONNECT_ATTEMPTS = 10;

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
  ) {}

  async onModuleInit() {
    await this.initialize();
  }

  async onModuleDestroy() {
    // Cleanup interval
    if (this.qrRefreshInterval) {
      clearInterval(this.qrRefreshInterval);
      this.qrRefreshInterval = null;
    }

    if (this.sock) {
      try {
        await this.sock.end(undefined);
        this.logger.log('🔌 WhatsApp connection closed');
      } catch (error) {
        this.logger.warn('⚠️ Error saat menutup koneksi:', error);
      }
    }
  }

  private async initialize() {
    // Cegah multiple initialize
    if (this.isConnecting) {
      this.logger.warn('⚠️ Already initializing, skipping...');
      return;
    }

    // Cek max reconnect attempts
    if (this.reconnectAttempts >= this.MAX_RECONNECT_ATTEMPTS) {
      this.logger.error(
        `❌ Max reconnect attempts (${this.MAX_RECONNECT_ATTEMPTS}) reached. Please restart the application.`,
      );
      this.logger.error(
        '💡 Coba: 1. Restart aplikasi 2. Hapus folder ./baileys_auth_info',
      );
      return;
    }

    this.isConnecting = true;
    this.reconnectAttempts++;

    try {
      const { state, saveCreds } = await useMultiFileAuthState(this.AUTH_DIR);

      const pinoLogger = pino({
        level: 'info',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      });

      this.sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        browser: ['QCMS Caliper', 'Chrome', '120.0.0.0'],
        syncFullHistory: false,
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        shouldSyncHistoryMessage: () => false,
        logger: pinoLogger,
        qrTimeout: 60000, // 60 detik
      });

      this.registerEvents(saveCreds);

      // Start QR refresh loop
      this.startQrRefreshLoop();

      // Tunggu koneksi dengan timeout tidak terbatas
      await this.waitForConnection(0);

      // Reset reconnect attempts on success
      this.reconnectAttempts = 0;

      // Stop QR refresh loop setelah connected
      this.stopQrRefreshLoop();

      await this.loadGroupCache();

      this.logger.log('✅ WhatsApp Baileys client initialized successfully!');
    } catch (error) {
      this.logger.error('❌ Failed to initialize Baileys client:', error);

      // Reset isConnecting agar bisa reconnect
      this.isConnecting = false;

      // Jika error karena QR, coba reconnect
      if (error instanceof Error && error.message.includes('QR')) {
        this.logger.warn(
          `🔄 QR expired, reconnecting... (Attempt ${this.reconnectAttempts}/${this.MAX_RECONNECT_ATTEMPTS})`,
        );
        setTimeout(() => {
          this.initialize();
        }, 5000);
      }

      throw error;
    } finally {
      this.isConnecting = false;
    }
  }

  // Start QR refresh loop
  private startQrRefreshLoop() {
    // Bersihkan interval yang lama
    if (this.qrRefreshInterval) {
      clearInterval(this.qrRefreshInterval);
      this.qrRefreshInterval = null;
    }

    // Cek apakah sudah ready
    if (this.ready) {
      this.logger.log('✅ Already connected, no need QR refresh');
      return;
    }

    this.logger.log(
      `🔄 QR Refresh loop started (every 60 seconds) - Attempt ${this.reconnectAttempts}/${this.MAX_RECONNECT_ATTEMPTS}`,
    );

    this.qrRefreshInterval = setInterval(() => {
      // Cek apakah sudah connected
      if (this.ready) {
        this.logger.log('✅ Already connected, stopping QR refresh...');
        this.stopQrRefreshLoop();
        return;
      }

      // Cek apakah socket masih ada
      if (!this.sock) {
        this.logger.warn('⚠️ Socket is null, stopping QR refresh...');
        this.stopQrRefreshLoop();
        return;
      }

      // Jika ada QR yang tersimpan, refresh
      if (this.lastQr) {
        this.logger.warn('⏰ QR Code expired! Generating new QR...');
        this.logger.warn(
          '📱 Scan QR code baru di HP kamu untuk login WhatsApp.',
        );
        this.logger.log(
          `⏰ QR akan refresh lagi dalam 60 detik jika tidak di-scan`,
        );

        try {
          const qrcode = require('qrcode-terminal');
          qrcode.generate(this.lastQr, { small: true });
          this.logger.log('✅ New QR Code generated!');
        } catch (error) {
          this.logger.warn('⚠️ Failed to generate QR, showing as text...');
          console.log('\n🔴 NEW QR CODE:\n');
          console.log(this.lastQr);
          console.log(
            '\n📱 Buka WhatsApp > 3 titik > WhatsApp Web > Scan QR\n',
          );
        }
      } else {
        this.logger.warn('⚠️ No QR available to refresh, waiting...');
      }
    }, 60000); // 60 detik
  }

  // Stop QR refresh loop
  private stopQrRefreshLoop() {
    if (this.qrRefreshInterval) {
      clearInterval(this.qrRefreshInterval);
      this.qrRefreshInterval = null;
      this.logger.log('🛑 QR Refresh loop stopped');
    }
  }

  private registerEvents(saveCreds: any) {
    if (!this.sock) return;

    this.sock.ev.on('creds.update', saveCreds);

    this.sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      // Generate QR
      if (qr) {
        // Simpan QR terakhir untuk refresh
        this.lastQr = qr;

        this.logger.warn('📱 Scan QR code di HP kamu untuk login WhatsApp.');
        this.logger.log(
          `⏰ QR Code akan refresh dalam 60 detik jika tidak di-scan`,
        );

        try {
          const qrcode = require('qrcode-terminal');
          qrcode.generate(qr, { small: true });
          this.logger.log(
            '✅ QR Code generated! Scan di HP kamu untuk login WhatsApp.',
          );
        } catch (error) {
          this.logger.warn(
            '⚠️ Gagal generate QR dengan qrcode-terminal, menampilkan sebagai text...',
          );
          console.log(
            '\n🔴 SCAN QR CODE DI BAWAH INI (copy text ke QR reader):\n',
          );
          console.log(qr);
          console.log(
            '\n📱 Buka WhatsApp > 3 titik > WhatsApp Web > Scan QR\n',
          );
        }
      }

      if (connection === 'close') {
        const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

        this.logger.warn(
          `⚠️ WhatsApp disconnected: ${lastDisconnect?.error?.message || 'Unknown'}`,
        );
        this.ready = false;
        this.lastQr = null;

        // Stop QR refresh loop
        this.stopQrRefreshLoop();

        if (shouldReconnect) {
          // Reset isConnecting agar bisa reconnect
          this.isConnecting = false;

          this.logger.log(
            `🔄 Re-initializing in 5 seconds... (Attempt ${this.reconnectAttempts + 1}/${this.MAX_RECONNECT_ATTEMPTS})`,
          );
          setTimeout(() => {
            this.initialize();
          }, 5000);
        } else {
          this.logger.error(
            '❌ Logged out, please delete session folder and restart',
          );
          this.isConnecting = false;
        }
      }

      if (connection === 'open') {
        this.ready = true;
        this.reconnectAttempts = 0; // Reset attempts

        // Stop QR refresh loop
        this.stopQrRefreshLoop();

        // TAMBAHKAN INI - Notifikasi sukses satu baris
        this.logger.log('🎉 WhatsApp connected! Silakan lanjutkan QC.');
      }
    });

    // Update group cache from messages
    this.sock.ev.on('messages.upsert', async (m) => {
      for (const msg of m.messages) {
        if (msg.key.remoteJid?.endsWith('@g.us')) {
          const groupId = msg.key.remoteJid;
          try {
            const metadata = await this.sock?.groupMetadata(groupId);
            if (metadata?.subject) {
              this.groupCache.set(metadata.subject.toLowerCase(), groupId);
              this.logger.debug(
                `📝 Cached group: ${metadata.subject} -> ${groupId}`,
              );
            }
          } catch (error) {
            // Ignore
          }
        }
      }
    });
  }

  private async waitForConnection(timeout = 30000): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.sock) {
        reject(new Error('Socket not initialized'));
        return;
      }

      // Jika timeout 0, tunggu selamanya
      if (timeout === 0) {
        const checkInterval = setInterval(() => {
          if (this.ready) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 1000);
        return;
      }

      const startTime = Date.now();
      const checkInterval = setInterval(() => {
        if (this.ready) {
          clearInterval(checkInterval);
          resolve();
        } else if (Date.now() - startTime > timeout) {
          clearInterval(checkInterval);
          reject(new Error('Connection timeout'));
        }
      }, 1000);
    });
  }

  private async loadGroupCache() {
    if (!this.sock) return;

    try {
      const groups = await this.sock.groupFetchAllParticipating();
      for (const [jid, group] of Object.entries(groups)) {
        const groupName = group.subject?.toLowerCase();
        if (groupName) {
          this.groupCache.set(groupName, jid);
        }
      }
      this.logger.log(`📚 Loaded ${this.groupCache.size} groups into cache`);
    } catch (error) {
      this.logger.warn('⚠️ Failed to load group cache:', error);
    }
  }

  // ============================================
  // PUBLIC METHODS - Implement IWhatsAppService
  // ============================================

  isReady(): boolean {
    return this.ready && this.sock !== null;
  }

  async getGroupJidByName(groupName: string): Promise<string | null> {
    const key = groupName.toLowerCase();
    if (this.groupCache.has(key)) {
      return this.groupCache.get(key) || null;
    }

    try {
      await this.loadGroupCache();
      return this.groupCache.get(key) || null;
    } catch (error) {
      this.logger.error(`Failed to get group JID for ${groupName}:`, error);
      return null;
    }
  }

  async getGroupJidsByNames(groupNames: string[]): Promise<string[]> {
    const results: string[] = [];
    const notFound: string[] = [];

    for (const groupName of groupNames) {
      const jid = await this.getGroupJidByName(groupName);
      if (jid) {
        results.push(jid);
      } else {
        notFound.push(groupName);
        this.logger.warn(`⚠️ Group not found: ${groupName}`);
      }
    }

    if (notFound.length > 0) {
      this.logger.warn(`⚠️ Groups not found: ${notFound.join(', ')}`);
    }

    return results;
  }

  // ============================================
  // SEND METHODS
  // ============================================

  async sendPdfToGroups(
    pdfBuffer: Buffer,
    fileName: string,
    caption: string,
    groupNames: string[],
  ): Promise<{ sent: string[]; failed: string[] }> {
    console.log('\n======================================');
    console.log('SEND PDF TO GROUPS (Baileys)');
    console.log('======================================');

    if (!this.isReady() || !this.sock) {
      throw new Error('WhatsApp client belum siap');
    }

    console.log('\n========== CLIENT STATUS ==========');
    console.log('Client Ready :', this.ready);
    console.log('Socket Exists :', !!this.sock);
    console.log('Groups in Cache :', this.groupCache.size);

    // Convert group names to JIDs
    const groupJids: string[] = [];
    const notFound: string[] = [];

    for (const groupName of groupNames) {
      const jid = await this.getGroupJidByName(groupName);
      if (jid) {
        groupJids.push(jid);
        console.log(`✅ Found group: ${groupName} -> ${jid}`);
      } else {
        notFound.push(groupName);
        console.log(`❌ Group not found: ${groupName}`);
      }
    }

    if (groupJids.length === 0) {
      throw new Error('Tidak ada grup yang valid ditemukan');
    }

    console.log('\n========== SENDING PDF ==========');
    console.log(`Target groups: ${groupJids.length}`);
    console.log(`File: ${fileName}`);

    const sent: string[] = [];
    const failed: string[] = [];

    for (const jid of groupJids) {
      try {
        await this.sock.sendMessage(jid, {
          document: pdfBuffer,
          mimetype: 'application/pdf',
          fileName: fileName,
          caption: caption,
        } as any);

        sent.push(jid);
        console.log(`✅ PDF sent to ${jid}`);
        this.logger.log(`✅ PDF sent to ${jid}`);
      } catch (error) {
        console.error(`❌ Failed to send PDF to ${jid}:`, error);
        this.logger.error(`❌ Failed to send PDF to ${jid}:`, error);
        failed.push(jid);
      }
    }

    console.log('\n======================================');
    console.log('FINISHED');
    console.log('SENT :', sent.length);
    console.log('FAILED :', failed.length);
    console.log('======================================');

    return {
      sent: sent.map((jid) => {
        for (const [name, j] of this.groupCache) {
          if (j === jid) return name;
        }
        return jid;
      }),
      failed: failed.map((jid) => {
        for (const [name, j] of this.groupCache) {
          if (j === jid) return name;
        }
        return jid;
      }),
    };
  }

  async sendImageToGroups(
    imageUrl: string,
    caption: string,
    groupNames: string[],
  ): Promise<{ sent: string[]; failed: string[] }> {
    if (!this.isReady() || !this.sock) {
      throw new Error('WhatsApp client belum siap');
    }

    // Convert group names to JIDs
    const groupJids: string[] = [];
    const notFound: string[] = [];

    for (const groupName of groupNames) {
      const jid = await this.getGroupJidByName(groupName);
      if (jid) {
        groupJids.push(jid);
      } else {
        notFound.push(groupName);
        this.logger.warn(`⚠️ Group not found: ${groupName}`);
      }
    }

    if (groupJids.length === 0) {
      throw new Error('Tidak ada grup yang valid ditemukan');
    }

    // Load image
    const imageBuffer = await this.loadImageFromUrl(imageUrl);

    const sent: string[] = [];
    const failed: string[] = [];

    for (const jid of groupJids) {
      try {
        await this.sock.sendMessage(jid, {
          image: imageBuffer,
          caption: caption,
        } as any);

        // Find group name
        let groupName = jid;
        for (const [name, j] of this.groupCache) {
          if (j === jid) {
            groupName = name;
            break;
          }
        }

        sent.push(groupName);
        this.logger.log(`✅ Image sent to ${groupName}`);
        console.log(`✅ Gambar terkirim ke grup "${groupName}"`);
      } catch (error) {
        this.logger.error(`❌ Failed to send image to ${jid}:`, error);
        failed.push(jid);
      }
    }

    // FIX: Return type harus sesuai dengan interface
    return {
      sent: sent,
      failed: failed.map((jid) => {
        for (const [name, j] of this.groupCache) {
          if (j === jid) return name;
        }
        return jid;
      }),
    };
  }

  async sendTextToGroups(
    message: string,
    groupNames: string[],
  ): Promise<{ sent: string[]; failed: string[] }> {
    if (!this.isReady() || !this.sock) {
      throw new Error('WhatsApp client belum siap');
    }

    // Convert group names to JIDs
    const groupJids: string[] = [];
    const notFound: string[] = [];

    for (const groupName of groupNames) {
      const jid = await this.getGroupJidByName(groupName);
      if (jid) {
        groupJids.push(jid);
      } else {
        notFound.push(groupName);
        this.logger.warn(`⚠️ Group not found: ${groupName}`);
      }
    }

    if (groupJids.length === 0) {
      throw new Error('Tidak ada grup yang valid ditemukan');
    }

    const sent: string[] = [];
    const failed: string[] = [];

    for (const jid of groupJids) {
      try {
        await this.sock.sendMessage(jid, {
          text: message,
        });

        let groupName = jid;
        for (const [name, j] of this.groupCache) {
          if (j === jid) {
            groupName = name;
            break;
          }
        }

        sent.push(groupName);
        this.logger.log(`✅ Text sent to ${groupName}`);
      } catch (error) {
        this.logger.error(`❌ Failed to send text to ${jid}:`, error);
        failed.push(jid);
      }
    }

    return {
      sent: sent,
      failed: failed.map((jid) => {
        for (const [name, j] of this.groupCache) {
          if (j === jid) return name;
        }
        return jid;
      }),
    };
  }

  // ============================================
  // QC IMAGE - MAIN FUNCTION
  // ============================================

  private groupByPosition(
    data: { code: string; value: number; position: string }[],
  ) {
    const groups: Record<string, any[]> = {};

    data.forEach((item) => {
      let pos = item.position;
      if (!pos || pos === 'FormRight') {
        pos = 'Basic';
      }

      if (!groups[pos]) groups[pos] = [];
      groups[pos].push(item);
    });

    return groups;
  }

  async sendQcImage(dto: SendWaQcDto, userId: string) {
    const { qc_id, no_seq, piece_no, image = '' } = dto;

    if (!this.isReady() || !this.sock) {
      throw new Error('WhatsApp client belum siap');
    }

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

    if (!record) {
      throw new Error(
        `QC Record tidak ditemukan qc_id=${qc_id}, seq=${no_seq}, piece=${piece_no}`,
      );
    }

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

    // Kirim PDF
    await this.sendPdfToGroups(
      pdfBuffer,
      `${qc_id}-${no_seq}-${majorPos}/${piece_no}.pdf`,
      `QC Report ${qc_id}-${no_seq}-${majorPos}/${piece_no}.pdf`,
      targetGroups,
    );

    let sendResult;

    if (image && image.trim() !== '') {
      // Kirim image
      sendResult = await this.sendImageToGroups(image, message, targetGroups);
    } else {
      // Kirim text saja
      sendResult = await this.sendTextToGroups(message, targetGroups);
    }

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

  // ============================================
  // GENERATE QC MESSAGE
  // ============================================

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

    // ✅ Detail Passed
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

    // ❌ Detail Not Passed
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

  // ============================================
  // HELPER METHODS
  // ============================================

  private async loadImageFromUrl(imageUrl: string): Promise<Buffer> {
    // Cek apakah URL upload
    const fileName = imageUrl.split('/uploads/')[1];
    if (fileName) {
      const filePath = join(process.cwd(), 'uploads', fileName);
      return fs.readFileSync(filePath);
    }

    // Cek apakah URL HTTP
    if (imageUrl.startsWith('http')) {
      const response = await fetch(imageUrl);
      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }

    // Assume it's a file path
    const filePath = path.join(process.cwd(), imageUrl);
    return fs.readFileSync(filePath);
  }
}
