import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { CurrentUser } from 'src/decorator/user.decorator';

import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { QcTemplateService } from './qc-template.service';
import { QcTemplate } from './entity/qc-template.entity';
import { QcTemplateData } from './entity/qc-template-data.entity';

import { CreateQcTemplateDto } from './dto/create-qc-template.dto';
import { UpdateQcTemplateDto } from './dto/update-qc-template.dto';

import { GroupedTemplateData } from './interfaces/template-grouped-data';

@Controller('qc-template')
@UseGuards(JwtAuthGuard)
export class QcTemplateController {
  constructor(private readonly qcTemplateService: QcTemplateService) {}

  /**
   * Ambil semua QC Template
   */
  @Get()
  async getAllTemplates(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('prodtype_id') prodtype_id?: string,
  ): Promise<IResponsePageWrapper<QcTemplate>> {
    return this.qcTemplateService.getAllTemplates(page, limit, search);
  }

  /**
   * Create QC Template (plus fields)
   */
  @Post()
  async create(
    @Body() dto: CreateQcTemplateDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcTemplateService.create(dto, userId);
  }

  /**
   * Ambil QC Template Data berdasarkan qc_template_id
   */
  @Get('data/:qcTemplateId')
  async getTemplateDataByTemplateId(
    @Param('qcTemplateId') qcTemplateId: string,
  ): Promise<GroupedTemplateData> {
    return this.qcTemplateService.getTemplateDataByTemplateId(qcTemplateId);
  }

  /**
   * Update QC Template (plus fields)
   */
  @Put(':qcTemplateId')
  async update(
    @Param('qcTemplateId') qcTemplateId: string,
    @Body() dto: UpdateQcTemplateDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcTemplateService.update(qcTemplateId, dto, userId);
  }

  /**
   * Delete QC Template
   */
  @Delete(':qcTemplateId')
  async delete(@Param('qcTemplateId') qcTemplateId: string) {
    return this.qcTemplateService.delete(qcTemplateId);
  }
}
