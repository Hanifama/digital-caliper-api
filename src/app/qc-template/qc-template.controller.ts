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
import { CurrentUser } from 'src/decorator/user.decorator';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';

import { QcTemplateService } from './qc-template.service';
import { QcTemplate } from './entity/qc-template.entity';
import { QcTemplateData } from './entity/qc-template-data.entity';
import { GroupedTemplateData } from './interfaces/template-grouped-data';

import { CreateQcTemplateDto } from './dto/create-qc-template.dto';
import { UpdateQcTemplateDto } from './dto/update-qc-template.dto';

@ApiTags('QC Templates')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qc-template')
export class QcTemplateController {
  constructor(private readonly qcTemplateService: QcTemplateService) {}

  /**
   * Ambil semua QC Template dengan pagination
   * @param page Nomor halaman, default 1
   * @param limit Jumlah data per halaman, default 10
   * @param search Kata kunci pencarian template (opsional)
   * @param prodtype_id Filter berdasarkan product type (opsional)
   * @returns Data QC Template sesuai pagination
   */
  @Get()
  @ApiOperation({ summary: 'Ambil semua QC Template' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'prodtype_id', required: false })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil QC Template' })
  async getAllTemplates(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('prodtype_id') prodtype_id?: string,
  ): Promise<IResponsePageWrapper<QcTemplate>> {
    return this.qcTemplateService.getAllTemplates(page, limit, search);
  }

  /**
   * Buat QC Template baru beserta field-nya
   * @param dto DTO berisi data template
   * @param userId ID user yang membuat template
   * @returns QC Template yang berhasil dibuat
   */
  @Post()
  @ApiOperation({ summary: 'Buat QC Template baru' })
  @ApiBody({ type: CreateQcTemplateDto })
  @ApiResponse({ status: 201, description: 'Berhasil membuat QC Template' })
  async create(
    @Body() dto: CreateQcTemplateDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcTemplateService.create(dto, userId);
  }

  /**
   * Ambil semua QC Template Data berdasarkan qc_template_id
   * @param qcTemplateId ID template
   * @returns Data QC Template yang dikelompokkan
   */
  @Get('data/:qcTemplateId')
  @ApiOperation({ summary: 'Ambil QC Template Data berdasarkan ID template' })
  @ApiParam({ name: 'qcTemplateId', description: 'ID QC Template' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil QC Template Data',
  })
  async getTemplateDataByTemplateId(
    @Param('qcTemplateId') qcTemplateId: string,
  ): Promise<GroupedTemplateData> {
    return this.qcTemplateService.getTemplateDataByTemplateId(qcTemplateId);
  }

  /**
   * Update QC Template beserta field-nya
   * @param qcTemplateId ID template yang ingin diupdate
   * @param dto DTO berisi data template baru
   * @param userId ID user yang melakukan update
   * @returns QC Template yang berhasil diperbarui
   */
  @Put(':qcTemplateId')
  @ApiOperation({ summary: 'Update QC Template' })
  @ApiParam({ name: 'qcTemplateId', description: 'ID QC Template' })
  @ApiBody({ type: UpdateQcTemplateDto })
  @ApiResponse({ status: 200, description: 'Berhasil memperbarui QC Template' })
  async update(
    @Param('qcTemplateId') qcTemplateId: string,
    @Body() dto: UpdateQcTemplateDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcTemplateService.update(qcTemplateId, dto, userId);
  }

  /**
   * Hapus QC Template
   * @param qcTemplateId ID template yang ingin dihapus
   * @returns Pesan sukses penghapusan
   */
  @Delete(':qcTemplateId')
  @ApiOperation({ summary: 'Hapus QC Template' })
  @ApiParam({ name: 'qcTemplateId', description: 'ID QC Template' })
  @ApiResponse({ status: 200, description: 'Berhasil menghapus QC Template' })
  async delete(@Param('qcTemplateId') qcTemplateId: string) {
    return this.qcTemplateService.delete(qcTemplateId);
  }
}
