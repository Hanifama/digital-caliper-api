import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { DashboardService } from './dashboard.service';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { DashboardSummaryParamsDto } from './dto/dashboard-summary.dto';
import { CurrentUser } from 'src/decorator/user.decorator';
import { DashboardSummaryRecentParamsDto } from './dto/dashboard-recent.dto';

@ApiTags('Dashboard') // Grup endpoint di Swagger
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  /**
   * Endpoint untuk mendapatkan ringkasan dashboard
   * @param params Parameter query untuk filter data dashboard
   * @returns Objek berisi ringkasan data dashboard
   */
  @Get()
  @ApiOperation({ summary: 'Ambil ringkasan dashboard' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil ringkasan dashboard',
  })
  async getDashboardSummary(
    @CurrentUser('id') userId: string,
    @Query() params: DashboardSummaryParamsDto,
  ) {
    return this.dashboardService.getDashboardSummary(params, userId);
  }

  /**
   * Endpoint untuk mendapatkan analisis dashboard
   * @returns Objek berisi hasil analisis dashboard
   */
  @Get('analysis')
  @ApiOperation({ summary: 'Ambil analisis dashboard' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil analisis dashboard',
  })
  async getAnalysis(@CurrentUser('id') userId: string) {
    return this.dashboardService.getDashboardAnalysis(userId);
  }

  /**
   * Endpoint untuk mendapatkan recent QC (status Done)
   * Digunakan untuk tabel Recent QC di dashboard
   */
  /**
   * Endpoint untuk mendapatkan recent QC (status Done)
   * Digunakan untuk tabel Recent QC di dashboard
   */
  @Get('recent-qc')
  @ApiOperation({ summary: 'Ambil recent QC (pagination)' })
  async getRecentQc(
    @CurrentUser('id') userId: string,
    @Query() query: DashboardSummaryRecentParamsDto,
  ) {
    const { page = 1, limit = 10, from_date, end_date } = query;

    return this.dashboardService.getRecentQcDashboard(userId, page, limit, {
      from_date,
      end_date,
    });
  }
}
