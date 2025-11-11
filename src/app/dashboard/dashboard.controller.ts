import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { DashboardService } from './dashboard.service';
import type { DashboardSummaryParams } from './interfaces/dashboard-summary-params';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getDashboardSummary(@Query() params: DashboardSummaryParams) {
    return this.dashboardService.getDashboardSummary(params);
  }

  @Get('analysis')
  async getAnalysis() {
    return this.dashboardService.getDashboardAnalysis();
  }
}
