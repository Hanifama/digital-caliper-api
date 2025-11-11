import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppVersionService } from './app-version.service';

@Controller('app-version')
export class AppVersionController {
  constructor(private readonly appVersionService: AppVersionService) {}

  @Get()
  async findAll() {
    return this.appVersionService.findAll();
  }

  @Post('check-version')
  async checkVersion(@Body() body: { platform: string; version_code: string }) {
    return this.appVersionService.checkVersion(
      body.platform,
      body.version_code,
    );
  }
}
