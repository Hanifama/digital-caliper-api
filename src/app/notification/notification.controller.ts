import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import type { Response } from 'express';
import QRCode from 'qrcode';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('report/send-wa')
  async sendWaImage(@Body() body: { qc_id: string; image: string }) {
    return this.notificationService.sendQcImage(body.qc_id, body.image);
  }

  @Get('wa-qr')
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
