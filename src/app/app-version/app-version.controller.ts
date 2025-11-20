import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppVersionService } from './app-version.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { CheckVersionDto } from './dto/check-version.dto';

@ApiTags('App Version') // Menandai grup endpoint di Swagger
@ApiBearerAuth()
@Controller('app-version')
export class AppVersionController {
  constructor(private readonly appVersionService: AppVersionService) {}

  /**
   * Endpoint untuk mengambil semua data versi aplikasi
   * @returns Array berisi informasi versi aplikasi
   */
  @Get()
  @ApiOperation({ summary: 'Ambil semua data versi aplikasi' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data versi aplikasi',
  })
  async findAll() {
    return this.appVersionService.findAll();
  }

  /**
   * Endpoint untuk mengecek versi aplikasi berdasarkan platform dan version_code
   * @param body Object berisi platform dan version_code
   * @returns Informasi apakah versi terbaru atau perlu update
   */
  @Post('check-version')
  @ApiOperation({
    summary: 'Cek versi aplikasi berdasarkan platform dan version_code',
  })
  @ApiBody({ type: CheckVersionDto })
  @ApiResponse({ status: 200, description: 'Berhasil mengecek versi aplikasi' })
  async checkVersion(@Body() dto: CheckVersionDto) {
    return this.appVersionService.checkVersion(dto.platform, dto.version_code);
  }
}
