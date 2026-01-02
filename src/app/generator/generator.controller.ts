import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import {
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import type { Response } from 'express';

import { GeneratorService } from './generator.service';
import { QcPdfDataService } from './generator-data.service';
import { CurrentUser } from 'src/decorator/user.decorator';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';

@ApiTags('Generator')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('generator')
export class GeneratorController {
  constructor(
    private readonly generatorService: GeneratorService,
    private readonly qcPdfDataService: QcPdfDataService,
  ) {}

  @Get('pdf')
  @ApiOperation({ summary: 'Generate PDF QC' })
  @ApiProduces('application/pdf')
  @ApiResponse({
    status: 200,
    description: 'PDF berhasil digenerate',
  })

  /** 🔹 QUERY PARAMS */
  @ApiQuery({
    name: 'qcId',
    type: String,
    required: true,
    example: '20I2513CA',
    description: 'Batch ID',
  })
  @ApiQuery({
    name: 'sequence',
    type: Number,
    required: true,
    example: 2,
    description: 'Nomor sequence QC',
  })
  @ApiQuery({
    name: 'piece',
    type: String,
    required: true,
    example: 'p1',
    description: 'Nomor potongan / piece',
  })
  async generate(
    @Query('qcId') qcId: string,
    @Query('sequence') sequence: number,
    @Query('piece') piece: string,
    @CurrentUser('id') userId: string,
    @Res() res: Response,
  ) {
    const pdfData = await this.qcPdfDataService.getPdfData(
      qcId,
      sequence,
      piece,
      userId,
    );

    const pdf = await this.generatorService.generatePdf(pdfData);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="qc-result.pdf"',
      'Content-Length': pdf.length,
    });

    res.send(pdf);
  }
}
