import { Controller, Post, Body } from '@nestjs/common';
import { QcListL1Service } from './qc-list-l1.service';

import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateQcPlanDto } from './dto/create-qc-plan-l1.dto';

@ApiTags('QC List L1')
@Controller('qc-list-l1')
export class QcListL1Controller {
  constructor(private readonly qcListL1Service: QcListL1Service) {}

  @Post('submit')
  @ApiOperation({ summary: 'Create QC List Plan' })
  @ApiBody({ type: CreateQcPlanDto })
  @ApiResponse({
    status: 201,
    description: 'Berhasil membuat qc list plan baru L1',
  })
  async submitFromL1(@Body() payload: CreateQcPlanDto) {
    return this.qcListL1Service.createFromL1(payload);
  }
}
