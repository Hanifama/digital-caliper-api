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

@UseGuards(JwtAuthGuard)
@Controller('qc-list')
export class QcListController {
  constructor(private readonly qcListService: QcListService) {}

  @Get('plans')
  async getPlans(
    @CurrentUser('id') userId: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('from_date') from_date?: string,
    @Query('end_date') end_date?: string,
  ) {
    return this.qcListService.getAllQcPlans(
      userId,
      page,
      limit,
      search,
      from_date,
      end_date,
    );
  }

  @Delete('plans')
  async deleteAllPlans(@CurrentUser('id') userId: string) {
    return this.qcListService.softDeleteAllPlans(userId);
  }

  @Patch('plans/restore')
  async restoreAllPlans(@CurrentUser('id') userId: string) {
    return this.qcListService.restoreAllPlans(userId);
  }

  @Get('plans/all')
  async getAllPlansAdmin(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
    @Query('location_id') locationId?: string,
  ) {
    return this.qcListService.getAllQcPlansAdmin(
      page,
      limit,
      search,
      locationId,
    );
  }

  @Post('plans/import')
  @UseInterceptors(FileInterceptor('file'))
  async importQcPlans(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') userId: string,
  ) {
    return this.qcListService.importQcPlans(file, userId);
  }

  @Get('plans/export/xlsx')
  async exportQcPlansHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.qcListService.exportQcPlans();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  @Get('plans/template/xlsx')
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

  @Get('plans/:qcId')
  async getQcPlanDetail(@Param('qcId') qcId: string) {
    return this.qcListService.getQcPlanDetail(qcId);
  }

  @Post('plans/notes/:qcId')
  async updateNotes(@Param('qcId') qcId: string, @Body('notes') notes: string) {
    return this.qcListService.updatePlanNotes(qcId, notes);
  }

  @Delete('plans/:qcId')
  async deleteSinglePlan(
    @CurrentUser('id') userId: string,
    @Param('qcId') qcId: string,
  ) {
    return this.qcListService.softDeletePlan(userId, qcId);
  }
}
