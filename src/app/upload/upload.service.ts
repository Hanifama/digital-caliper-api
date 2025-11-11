import { Injectable, BadRequestException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { Request } from 'express';

import { MessageService } from '../message/message.service';
import { User } from '../auth/entitities/user.entity';

@Injectable()
export class UploadService {
  private readonly uploadDir = join(process.cwd(), 'uploads');

  constructor(
    private readonly messageService: MessageService,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    // pastikan folder upload ada
    if (!existsSync(this.uploadDir)) {
      mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  /**
   * Simpan file dan generate full URL
   * @param file Express.Multer.File
   * @param req Request
   * @returns full URL file
   */
  async saveFile(file: Express.Multer.File, req: Request): Promise<string> {
    if (!file) throw new BadRequestException('File tidak boleh kosong');

    // Validasi ukuran file (10 MB)
    const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
    if (file.size > MAX_SIZE) {
      throw new BadRequestException('File terlalu besar, maksimal 10 MB');
    }

    if (!existsSync(this.uploadDir))
      mkdirSync(this.uploadDir, { recursive: true });

    const fileExt = file.originalname.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = join(this.uploadDir, fileName);

    writeFileSync(filePath, file.buffer);

    this.messageService.setMessage('Berhasil upload file');

    const fullUrl = `${req.protocol}://${req.get('host')}/uploads/${fileName}`;

    return fullUrl;
  }

  /**
   * Simpan file image user dan langsung update di DB
   * @param file Express.Multer.File
   * @param userId string - ID user dari JWT
   * @param req Request
   * @returns full URL file yang diupload
   */
  async saveUserFile(
    file: Express.Multer.File,
    userId: string,
    req: Request,
  ): Promise<string> {
    if (!file) throw new BadRequestException('File tidak boleh kosong');

    // Validasi ukuran file
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      throw new BadRequestException('File terlalu besar, maksimal 10 MB');
    }

    // Pastikan folder ada
    const userDir = join(this.uploadDir, 'users');
    if (!existsSync(userDir)) mkdirSync(userDir, { recursive: true });

    const fileExt = file.originalname.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = join(userDir, fileName);

    writeFileSync(filePath, file.buffer);

    const fullUrl = `${req.protocol}://${req.get('host')}/uploads/users/${fileName}`;

    // update ke DB user
    await this.userRepo.update({ user_id: userId }, { image: fullUrl });

    this.messageService.setMessage('Berhasil update image user profile');

    return fullUrl;
  }
}
