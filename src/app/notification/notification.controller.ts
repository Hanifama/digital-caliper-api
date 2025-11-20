import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import type { Response } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Notification')
@ApiBearerAuth()
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * Endpoint untuk mengirim gambar QC via WhatsApp
   * @param body Object berisi qc_id dan image (base64 atau URL)
   * @returns Objek berisi status pengiriman
   */
  @Post('report/send-wa')
  @ApiOperation({ summary: 'Kirim gambar QC via WhatsApp' })
  @ApiResponse({ status: 200, description: 'Berhasil mengirim gambar QC' })
  @ApiResponse({ status: 500, description: 'Gagal mengirim gambar QC' })
  async sendWaImage(@Body() body: { qc_id: string; image: string }) {
    return this.notificationService.sendQcImage(body.qc_id, body.image);
  }

  /**
   * Endpoint untuk generate QR WhatsApp
   * Jika WhatsApp sudah terkoneksi, akan menampilkan error
   * @param res Response Express untuk mengirimkan buffer QR
   */
  @Get('wa-qr')
  @ApiOperation({ summary: 'Generate QR WhatsApp' })
  @ApiResponse({ status: 200, description: 'Berhasil generate QR WhatsApp' })
  @ApiResponse({ status: 400, description: 'WhatsApp sudah terkoneksi' })
  @ApiResponse({ status: 500, description: 'Gagal generate QR WhatsApp' })
  async getWaQr(@Res() res: Response) {
    try {
      if (this.notificationService.isClientReady()) {
        return res.status(400).json({ message: 'WhatsApp sudah terkoneksi.' });
      }

      const buffer = await this.notificationService.getQrImage();
      res.setHeader('Content-Type', 'image/png');
      res.send(buffer);
    } catch (err) {
      res.status(500).json({ message: 'Gagal generate QR: ' + err.message });
    }
  }
}
