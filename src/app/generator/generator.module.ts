import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GeneratorController } from './generator.controller';
import { GeneratorService } from './generator.service';
import { QcPdfDataService } from './generator-data.service';

import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { User } from '../auth/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QcRecord, QcData, QcPlan, User])],
  controllers: [GeneratorController],
  providers: [GeneratorService, QcPdfDataService],
  exports: [GeneratorService, QcPdfDataService],
})
export class GeneratorModule {}
