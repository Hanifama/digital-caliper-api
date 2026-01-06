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
import { DashboardMonthlyQueryDto } from './dto/dashboard-monthly-query.dto';
import { DashboardSummaryBySizeParamsDto } from './dto/dashboard-bysize.dto';
import { DashboardRecentQcByUserParamsDto } from './dto/dashboard-recent-byUser.dto';

@ApiTags('Dashboard') // Grup endpoint di Swagger
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil ringkasan master sistem' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil ringkasan master dashboard',
  })
  async getCountMasterDashboard() {
    return this.dashboardService.getCountMasterDashboard();
  }

  /**
   * Endpoint untuk mendapatkan ringkasan dashboard by Size
   * @param params Parameter query untuk filter data dashboard by Size
   * @returns Objek berisi ringkasan data dashboard by Size
   */
  @Get('by-size')
  @ApiOperation({ summary: 'Ambil ringkasan dashboard berdasarkan size' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil ringkasan dashboard per size',
  })
  async getDashboardSummaryBySize(
    @CurrentUser('id') userId: string,
    @Query() params: DashboardSummaryBySizeParamsDto,
  ) {
    return this.dashboardService.getDashboardSummaryBySize(params, userId);
  }

  /**
   * Endpoint untuk mendapatkan analisis 7 hari terakhir dashboard
   * @returns Objek berisi hasil analisis 7 hari terakhir dashboard
   */
  @Get('analysis')
  @ApiOperation({ summary: 'Ambil analisis 7 hari terakhir untuk dashboard' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil analisis dashboard',
  })
  async getAnalysis(@CurrentUser('id') userId: string) {
    return this.dashboardService.getDashboardWeeklyAnalysis(userId);
  }

  /**
   * Endpoint untuk mendapatkan analisis 12 bulan dashboard
   * @returns Objek berisi hasil analisis bulanan dashboard
   */
  @Get('analysis/monthly')
  @ApiOperation({ summary: 'Ambil analisis bulanan (12 bulan / 1 bulan)' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil analisis bulanan dashboard',
  })
  async getMonthlyAnalysis(
    @CurrentUser('id') userId: string,
    @Query() query: DashboardMonthlyQueryDto,
  ) {
    const { year, month } = query;

    return this.dashboardService.getDashboardMonthlyAnalysis(
      userId,
      year,
      month,
    );
  }

  /**
   * Endpoint untuk mendapatkan ringkasan dashboard
   * @param params Parameter query untuk filter data dashboard
   * @returns Objek berisi ringkasan data dashboard
   */
  @Get('summary/recent-qc')
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

  /**
   * Endpoint untuk mengambil recent QC summary per user (pagination)
   * Digunakan untuk tabel Recent per user QC di dashboard
   */
  @Get('recent-qc-by-user')
  @ApiOperation({
    summary:
      'Ambil recent QC per user (pagination) - filter lokasi hanya bisa oleh Super Admin',
  })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil leaderboard recent QC per user',
  })
  async getRecentQcByUser(
    @CurrentUser('id') userId: string,
    @Query() query: DashboardRecentQcByUserParamsDto,
  ) {
    const { page = 1, limit = 10, from_date, end_date, locationId } = query;

    return this.dashboardService.getRecentQcDashboardByUser(
      userId,
      page,
      limit,
      { from_date, end_date, locationId },
    );
  }
}
