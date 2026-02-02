import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import type { Response } from 'express';

import { CurrentUser } from 'src/decorator/user.decorator';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { QcListService } from './qc-list.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('QC Plans')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qc-list')
export class QcListController {
  constructor(private readonly qcListService: QcListService) {}

  /**
   * Ambil daftar QC Plan dengan pagination dan filter
   *
   * Akses:
   * - User dengan akses menu izin filter lokasi dapat memfilter berdasarkan location_id
   * - User tanpa akses menu izin filter lokasi otomatis menggunakan lokasi miliknya
   *
   * Filter yang tersedia:
   * - search        : Pencarian berdasarkan qc_id, nama template, status, atau sequence_no
   * - location_id   : Filter lokasi
   * - file_name     : Filter berdasarkan nama file
   * - size          : Filter ukuran produk
   * - status        : Status QC Plan (hanya menerima `processing` atau `new_data`)
   * - kgm_nominal   : Filter berdasarkan nominal KGM (number)
   * - brand_merek   : Filter berdasarkan brand / merek
   * - from_date     : Tanggal mulai (format: YYYY-MM-DD)
   * - end_date      : Tanggal akhir (format: YYYY-MM-DD)
   *
   * Default behaviour:
   * - Jika status tidak dikirim, data dengan status `Done` akan dikecualikan
   * - Jika tanggal tidak dikirim, otomatis menggunakan rentang bulan berjalan
   *
   * @param userId ID user yang sedang login
   * @param page Nomor halaman (default: 1)
   * @param limit Jumlah data per halaman (default: 10)
   * @param search Kata kunci pencarian (opsional)
   * @param location_id ID lokasi (opsional, hanya yang punya akses menu)
   * @param fileName Nama file QC Plan (opsional)
   * @param size Ukuran produk (opsional)
   * @param status Status QC Plan: `processing` | `new_data` (opsional)
   * @param kgm_nominal Nominal KGM (number, opsional)
   * @param brand_merek Brand / merek produk (opsional)
   * @param from_date Tanggal mulai filter (opsional)
   * @param end_date Tanggal akhir filter (opsional)
   *
   * @returns Daftar QC Plan sesuai filter dan pagination
   */
  @Get('plans')
  @ApiOperation({ summary: 'Ambil daftar QC Plan List' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'location_id', required: false })
  @ApiQuery({ name: 'file_name', required: false })
  @ApiQuery({ name: 'size', required: false })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['processing', 'new_data'],
    description: 'Filter status QC Plan (processing | new_data)',
  })
  @ApiQuery({ name: 'kgm_nominal', required: false })
  @ApiQuery({ name: 'brand_merek', required: false })
  @ApiQuery({ name: 'from_date', required: false })
  @ApiQuery({ name: 'end_date', required: false })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil daftar QC Plan',
  })
  async getPlans(
    @CurrentUser('id') userId: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('location_id') location_id?: string,
    @Query('file_name') fileName?: string,
    @Query('size') size?: string,
    @Query('status') status?: string,
    @Query('kgm_nominal') kgm_nominal?: number,
    @Query('brand_merek') brand_merek?: string,
    @Query('from_date') from_date?: string,
    @Query('end_date') end_date?: string,
  ) {
    return this.qcListService.getAllQcPlans(
      userId,
      page,
      limit,
      search,
      location_id,
      fileName,
      size,
      status,
      kgm_nominal,
      brand_merek,
      from_date,
      end_date,
    );
  }

  /** Hapus semua QC Plan milik user */
  @Delete('plans')
  @ApiOperation({ summary: 'Hapus semua QC Plan milik user (Soft Delete)' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil menghapus semua QC Plan user',
  })
  async deleteAllPlans(@CurrentUser('id') userId: string) {
    return this.qcListService.softDeleteAllPlans(userId);
  }

  /** Restore semua QC Plan yang dihapus milik user */
  @Patch('plans/restore')
  @ApiOperation({ summary: 'Restore semua QC Plan milik user' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil merestore semua QC Plan user',
  })
  async restoreAllPlans(@CurrentUser('id') userId: string) {
    return this.qcListService.restoreAllPlans(userId);
  }

  /**
   * Ambil semua QC Plan untuk admin dengan pagination
   * @param page Nomor halaman, default 1
   * @param limit Jumlah data per halaman, default 10
   * @param search Kata kunci pencarian (opsional)
   * @param locationId Filter lokasi (opsional)
   * @returns Array berisi semua QC Plan
   */
  @Get('plans/all')
  @ApiOperation({ summary: 'Ambil semua QC Plan untuk admin' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'file_name', required: false })
  @ApiQuery({ name: 'location_id', required: false })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil semua QC Plan admin',
  })
  async getAllPlansAdmin(
    @CurrentUser('id') userId: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('file_name') fileName?: string,
    @Query('location_id') locationId?: string,
  ) {
    return this.qcListService.getAllQcPlansAdmin(
      userId,
      page,
      limit,
      search,
      fileName,
      locationId,
    );
  }

  /**
   * Import QC Plan dari file Excel
   * @param file File Excel yang diunggah
   * @param userId ID user saat ini
   */
  @Post('plans/import')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Import QC Plan dari file Excel' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', // file picker
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Berhasil import QC Plan' })
  async importQcPlans(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcListService.importQcPlans(file, userId);
  }

  /** Export QC Plan ke file XLSX */
  @Get('plans/export/xlsx')
  @ApiOperation({ summary: 'Export Hasil QC ke XLSX' })
  @ApiQuery({ name: 'location_id', required: false })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengekspor Hasil QC ke XLSX',
  })
  async exportQcPlansHandler(
    @Res() res: Response,
    @CurrentUser('id') userId: string,
    @Query('from_date') fromDate?: string,
    @Query('end_date') endDate?: string,
    @Query('location_id') locationId?: string,
  ): Promise<void> {
    const { buffer, filename } = await this.qcListService.exportQcRecords({
      userId,
      from_date: fromDate,
      end_date: endDate,
      location_id: locationId,
    });

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  /** Export template header QC Plan ke XLSX */
  @Get('plans/template/xlsx')
  @ApiOperation({ summary: 'Export template header QC Plan ke XLSX' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengekspor template header QC Plan',
  })
  async exportQcPlansHeaderHandler(
    @CurrentUser('id') userId: string,
    @Res() res: Response,
  ): Promise<void> {
    const { buffer, filename } =
      await this.qcListService.exportQcPlansHeaderOnly(userId);

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  /** Ambil detail QC Plan berdasarkan ID */
  @Get('plans/:qcId')
  @ApiOperation({ summary: 'Ambil detail QC Plan berdasarkan ID' })
  @ApiParam({ name: 'qcId', description: 'ID QC Plan' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil detail QC Plan',
  })
  async getQcPlanDetail(@Param('qcId') qcId: string) {
    return this.qcListService.getQcPlanDetail(qcId);
  }

  /** Update notes pada QC Plan */
  @Post('plans/notes/:qcId')
  @ApiOperation({ summary: 'Update notes QC Plan' })
  @ApiParam({ name: 'qcId', description: 'ID QC Plan' })
  @ApiBody({ schema: { properties: { notes: { type: 'string' } } } })
  @ApiResponse({
    status: 200,
    description: 'Berhasil memperbarui notes QC Plan',
  })
  async updateNotes(
    @CurrentUser('id') userId: string,
    @Param('qcId') qcId: string,
    @Body('notes') notes: string,
  ) {
    return this.qcListService.updatePlanNotes(userId, qcId, notes);
  }

  /** Hapus QC Plan berdasarkan ID */
  @Delete('plans/:qcId')
  @ApiOperation({ summary: 'Hapus QC Plan berdasarkan ID' })
  @ApiParam({ name: 'qcId', description: 'ID QC Plan yang ingin dihapus' })
  @ApiResponse({ status: 200, description: 'Berhasil menghapus QC Plan' })
  async deleteSinglePlan(
    @CurrentUser('id') userId: string,
    @Param('qcId') qcId: string,
  ) {
    return this.qcListService.softDeletePlan(userId, qcId);
  }
}
