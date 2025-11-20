import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { DashboardService } from './dashboard.service';
import type { DashboardSummaryParams } from './interfaces/dashboard-summary-params';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { DashboardSummaryParamsDto } from './dto/dashboard-summary.dto';

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
  async getDashboardSummary(@Query() params: DashboardSummaryParamsDto) {
    return this.dashboardService.getDashboardSummary(params);
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
  async getAnalysis() {
    return this.dashboardService.getDashboardAnalysis();
  }
}
