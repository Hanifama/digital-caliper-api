import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Req,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { UploadService } from './upload.service';
import type { Request } from 'express';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { CurrentUser } from 'src/decorator/user.decorator';

@Controller('upload')
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // Upload file biasa
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.uploadService.saveFile(file, req);
  }

  // Upload image user
  @Post('user')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
  )
  async uploadUserImage(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') userId: string,
    @Req() req: Request,
  ) {
    if (!file) throw new BadRequestException('File tidak boleh kosong');
    // Simpan file dengan associating ke userId
    return this.uploadService.saveUserFile(file, userId, req);
  }
}
