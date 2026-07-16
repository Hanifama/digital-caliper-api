import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  HttpException,
} from '@nestjs/common';
// FIX: Import type untuk Response
import type { Response } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { SendWaQcDto } from './dto/notification-send-wa.dto';
import { CurrentUser } from 'src/decorator/user.decorator';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { WhatsappBaileysService } from './whatsapp-baileys.service';

@ApiTags('Notification')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notification')
export class NotificationController {
  constructor(private readonly whatsappService: WhatsappBaileysService) {}

  /**
   * Endpoint untuk mengirim gambar QC via WhatsApp
   */
  @Post('report/send-wa')
  @ApiOperation({ summary: 'Kirim gambar QC via WhatsApp' })
  @ApiResponse({ status: 200, description: 'Berhasil mengirim gambar QC' })
  @ApiResponse({ status: 500, description: 'Gagal mengirim gambar QC' })
  @ApiBody({ type: SendWaQcDto })
  async sendWaImage(
    @Body() dto: SendWaQcDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.whatsappService.sendQcImage(dto, userId);
  }

  /**
   * Endpoint untuk generate QR WhatsApp
   * NOTE: Baileys tidak support generate QR image seperti wwebjs
   * QR akan muncul di terminal
   */
  @Get('wa-qr')
  @ApiOperation({ summary: 'Generate QR WhatsApp' })
  @ApiResponse({ status: 200, description: 'Berhasil generate QR WhatsApp' })
  @ApiResponse({ status: 400, description: 'WhatsApp sudah terkoneksi' })
  @ApiResponse({ status: 500, description: 'Gagal generate QR WhatsApp' })
  async getWaQr(@Res() res: Response) {
    try {
      if (this.whatsappService.isReady()) {
        return res.status(400).json({
          message: 'WhatsApp sudah terkoneksi.',
          note: 'QR Code hanya muncul di terminal untuk Baileys',
        });
      }

      // Baileys QR muncul di terminal, tidak bisa di-generate sebagai image
      return res.status(200).json({
        message: 'QR Code akan muncul di terminal. Silakan scan dari terminal.',
        note: 'Baileys tidak support generate QR image seperti wwebjs',
      });
    } catch (err) {
      // FIX: Handle unknown error type
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      res.status(500).json({ message: 'Gagal generate QR: ' + errorMessage });
    }
  }

  @Get('wa-status')
  @ApiOperation({ summary: 'Cek status WhatsApp client' })
  @ApiResponse({ status: 200, description: 'Client ready' })
  @ApiResponse({ status: 503, description: 'Client belum siap' })
  async getWaStatus() {
    if (this.whatsappService.isReady()) {
      return {
        ready: true,
        message: 'WhatsApp client siap digunakan (Baileys).',
        service: 'Baileys',
        groupsCached: (this.whatsappService as any)['groupCache']?.size || 0,
      };
    } else {
      throw new HttpException(
        {
          ready: false,
          message: 'WhatsApp client belum siap digunakan. Scan QR di terminal.',
          service: 'Baileys',
        },
        503,
      );
    }
  }

  // ============================================
  // TEST ENDPOINTS
  // ============================================

  @Post('whatsapp/test-pdf')
  @ApiOperation({ summary: 'Test kirim PDF' })
  async testSendPdf(@Body() body: { groupName?: string; fileName?: string }) {
    // Dummy PDF for testing
    const dummyPdf = Buffer.from(
      '%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 44 >>\nstream\nBT /F1 24 Tf 100 700 Td (Test PDF) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000015 00000 n\n0000000059 00000 n\n0000000108 00000 n\n0000000200 00000 n\ntrailer << /Size 5 /Root 1 0 R >>\nstartxref\n300\n%%EOF',
    );

    const groupName = body.groupName || 'bot tester';

    const result = await this.whatsappService.sendPdfToGroups(
      dummyPdf,
      body.fileName || 'test.pdf',
      'Test PDF from Baileys',
      [groupName],
    );

    return {
      status: result.sent.length > 0,
      ...result,
    };
  }

  @Post('whatsapp/test-image')
  @ApiOperation({ summary: 'Test kirim Image' })
  async testSendImage(@Body() body: { groupName?: string; imageUrl?: string }) {
    const groupName = body.groupName || 'bot tester';
    const imageUrl =
      body.imageUrl ||
      'https://via.placeholder.com/300x200.png?text=Test+Image';

    const result = await this.whatsappService.sendImageToGroups(
      imageUrl,
      'Test image from Baileys',
      [groupName],
    );

    return {
      status: result.sent.length > 0,
      ...result,
    };
  }

  @Post('whatsapp/test-text')
  @ApiOperation({ summary: 'Test kirim Text' })
  async testSendText(@Body() body: { groupName?: string; message?: string }) {
    const groupName = body.groupName || 'bot tester';
    const message = body.message || 'Test message from Baileys! 🚀';

    const result = await this.whatsappService.sendTextToGroups(message, [
      groupName,
    ]);

    return {
      status: result.sent.length > 0,
      ...result,
    };
  }
}
