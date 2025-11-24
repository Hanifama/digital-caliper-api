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
   * Ambil daftar QC Plan milik user saat ini dengan pagination
   * @param userId ID user saat ini
   * @param page Nomor halaman, default 1
   * @param limit Jumlah data per halaman, default 10
   * @param search Kata kunci pencarian (opsional)
   * @param from_date Filter tanggal mulai (opsional)
   * @param end_date Filter tanggal akhir (opsional)
   * @returns Array berisi QC Plan milik user
   */
  @Get('plans')
  @ApiOperation({ summary: 'Ambil daftar QC Plan List' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'file_name', required: false })
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
    @Query('file_name') fileName?: string,
    @Query('from_date') from_date?: string,
    @Query('end_date') end_date?: string,
  ) {
    return this.qcListService.getAllQcPlans(
      userId,
      page,
      limit,
      search,
      fileName,
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
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('file_name') fileName?: string,
    @Query('location_id') locationId?: string,
  ) {
    return this.qcListService.getAllQcPlansAdmin(
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
  @ApiOperation({ summary: 'Export QC Plan ke XLSX' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengekspor QC Plan ke XLSX',
  })
  async exportQcPlansHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.qcListService.exportQcPlans();

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
  async exportQcPlansHeaderHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } =
      await this.qcListService.exportQcPlansHeaderOnly();

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
  async updateNotes(@Param('qcId') qcId: string, @Body('notes') notes: string) {
    return this.qcListService.updatePlanNotes(qcId, notes);
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
