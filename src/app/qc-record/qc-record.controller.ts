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

import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';

import { QcRecordService } from './qc-record.service';
import { AddQcRecordTablesDto } from './dto/create-qc-data.dto';
import { StartProcessingDto } from './dto/start-processing.dto';

import { QcRecordGroupedResult } from './interfaces/groupedRecord';
import { CurrentUser } from 'src/decorator/user.decorator';

@Controller('qc-record')
@UseGuards(JwtAuthGuard)
export class QcRecordController {
  constructor(private readonly qcRecordService: QcRecordService) {}

  /** Get All QC Record Histori*/
  @Get('history')
  async getAllQcRecordHistory(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('from_date') from_date?: string,
    @Query('end_date') end_date?: string,
  ) {
    return this.qcRecordService.getAllQcRecordHistory(
      page,
      limit,
      search,
      from_date,
      end_date,
    );
  }

  /** start new QC Record*/
  @Post('start-processing')
  async startProcessing(@Body() dto: StartProcessingDto) {
    return this.qcRecordService.startProcessingFromPlan(dto);
  }

  /** Create new QC Record data */
  @Post('records')
  async createRecord(
    @CurrentUser('id') userId: string,
    @Body() dto: AddQcRecordTablesDto,
  ) {
    return this.qcRecordService.createQcRecordData(dto, userId);
  }

  /** Get QC Record data history*/
  @Get('history/:qcId')
  async getHistoryDetailRecord(@Param('qcId') qcId: string) {
    return this.qcRecordService.getHistoryDetailRecord(qcId);
  }

  /** Get QC Record data gruped*/
  @Get(':qcId')
  async getQcRecordDetail(
    @Param('qcId') qcId: string,
  ): Promise<QcRecordGroupedResult> {
    return this.qcRecordService.getQcRecordDetail(qcId);
  }
}
