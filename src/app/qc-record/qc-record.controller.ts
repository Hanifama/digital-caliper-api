import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { QcRecordService } from './qc-record.service';
import { AddQcRecordTablesDto } from './dto/create-qc-data.dto';
import { StartProcessingDto } from './dto/start-processing.dto';
import { QcRecordGroupedResult } from './interfaces/groupedRecord';
import { CurrentUser } from 'src/decorator/user.decorator';

@ApiTags('QC Records')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qc-record')
export class QcRecordController {
  constructor(private readonly qcRecordService: QcRecordService) {}

  /**
   * Ambil semua histori QC Record dengan pagination
   * @param page Nomor halaman, default 1
   * @param limit Jumlah data per halaman, default 10
   * @param search Kata kunci pencarian (opsional)
   * @param from_date Filter tanggal mulai (opsional)
   * @param end_date Filter tanggal akhir (opsional)
   * @returns Array berisi histori QC Record
   */
  @Get('history')
  @ApiOperation({ summary: 'Ambil semua histori QC Record' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'file_name', required: false })
  @ApiQuery({ name: 'from_date', required: false })
  @ApiQuery({ name: 'end_date', required: false })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil histori QC Record',
  })
  async getAllQcRecordHistory(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('file_name') fileName?: string,
    @Query('from_date') from_date?: string,
    @Query('end_date') end_date?: string,
  ) {
    return this.qcRecordService.getAllQcRecordHistory(
      page,
      limit,
      fileName,
      search,
      from_date,
      end_date,
    );
  }

  /**
   * Mulai QC Record baru dari QC Plan
   * @param dto DTO berisi data untuk memulai QC Record
   * @returns QC Record baru yang dibuat
   */
  @Post('start-processing')
  @ApiOperation({ summary: 'Mulai QC Record baru dari plan' })
  @ApiBody({ type: StartProcessingDto })
  @ApiResponse({ status: 201, description: 'Berhasil memulai QC Record baru' })
  async startProcessing(
    @Body() dto: StartProcessingDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcRecordService.startProcessingFromPlan(dto, userId);
  }

  /**
   * Tambah data ke QC Record
   * @param userId ID user saat ini
   * @param dto DTO berisi data yang akan ditambahkan
   * @returns Data QC Record yang berhasil dibuat
   */
  @Post('records')
  @ApiOperation({ summary: 'Tambah data ke QC Record' })
  @ApiBody({ type: AddQcRecordTablesDto })
  @ApiResponse({
    status: 201,
    description: 'Berhasil menambahkan data QC Record',
  })
  async createRecord(
    @CurrentUser('id') userId: string,
    @Body() dto: AddQcRecordTablesDto,
  ) {
    return this.qcRecordService.createQcRecordData(dto, userId);
  }

  /**
   * Ambil detail histori QC Record berdasarkan ID
   * @param qcId ID QC Record
   * @returns Detail histori QC Record
   */
  @Get('history/:qcId')
  @ApiOperation({ summary: 'Ambil detail histori QC Record berdasarkan ID' })
  @ApiParam({ name: 'qcId', description: 'ID QC Record' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil detail histori QC Record',
  })
  async getHistoryDetailRecord(@Param('qcId') qcId: string) {
    return this.qcRecordService.getHistoryDetailRecord(qcId);
  }

  /**
   * Ambil detail QC Record yang sudah dikelompokkan
   * @param qcId ID QC Record
   * @returns Data QC Record yang sudah dikelompokkan
   */
  @Get(':qcId/:no_seq')
  @ApiOperation({ summary: 'Ambil detail QC Record dikelompokkan' })
  @ApiParam({ name: 'qcId', description: 'ID QC Record' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil QC Record dikelompokkan',
  })
  async getQcRecordDetail(
    @CurrentUser('id') userId: string,
    @Param('qcId') qcId: string,
    @Param('no_seq') no_seq: number,
  ): Promise<QcRecordGroupedResult> {
    return this.qcRecordService.getQcRecordDetail(qcId, no_seq, userId);
  }
}
