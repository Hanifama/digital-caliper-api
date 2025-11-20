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

import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';

import { UploadFileDto } from './dto/upload-file.dto';
import { UploadUserImageDto } from './dto/upload-user-image.dto';

@ApiTags('Uploads')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  /**
   * Endpoint untuk meng-upload file umum
   * @param file File yang akan di-upload
   * @param req Request object
   * @returns Informasi file yang berhasil di-upload
   */
  @Post()
  @ApiOperation({ summary: 'Upload file umum' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadFileDto })
  @ApiResponse({ status: 201, description: 'Berhasil meng-upload file' })
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

  /**
   * Endpoint untuk meng-upload image user
   * @param file File image yang akan di-upload
   * @param userId ID user yang sedang login
   * @param req Request object
   * @returns Informasi file user yang berhasil di-upload
   */
  @Post('user')
  @ApiOperation({ summary: 'Upload image untuk user' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadUserImageDto })
  @ApiResponse({ status: 201, description: 'Berhasil meng-upload image user' })
  @ApiResponse({ status: 400, description: 'File tidak boleh kosong' })
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
    return this.uploadService.saveUserFile(file, userId, req);
  }
}
