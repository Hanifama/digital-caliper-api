import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppVersion } from '../app-version/entity/app-version.entity';
import { MessageService } from '../message/message.service';

@Injectable()
export class AppVersionService {
  constructor(
    @InjectRepository(AppVersion)
    private readonly appVersionRepo: Repository<AppVersion>,

    private readonly messageService: MessageService,
  ) {}

  // Cek request versi
  async checkVersion(platform: string, versionCode: string) {
    if (!platform || !versionCode) {
      throw new BadRequestException('Platform dan versi aplikasi harus diisi.');
    }

    const version = await this.appVersionRepo.findOne({
      where: { platform, versionCode },
    });

    if (!version) {
      throw new NotFoundException(`Versi aplikasi tidak sesuai.`);
    }

    this.messageService.setMessage(`Versi aplikasi sesuai.`);
  }

  // Ambil semua versi
  async findAll() {
    const versions = await this.appVersionRepo.find({
      order: { releasedDate: 'DESC' },
    });

    if (!versions.length) {
      throw new NotFoundException('Belum ada versi aplikasi yang terdaftar.');
    }

    this.messageService.setMessage('Berhasil memuat data versi aplikasi.');
    return versions;
  }
}
