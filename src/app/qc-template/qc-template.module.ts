import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../auth/entity/user.entity';
import { ProductType } from '../product/entity/product-type.entity';

import { QcTemplateController } from './qc-template.controller';
import { QcTemplateService } from './qc-template.service';

import { MessageModule } from 'src/app/message/message.module';

import { QcTemplate } from './entity/qc-template.entity';
import { QcTemplateData } from './entity/qc-template-data.entity';
import { QcPlan } from './entity/qc-plan.entity';
import { QcRecord } from './entity/qc-record.entity';
import { QcData } from './entity/qc-data.enity';

import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { QcTemplateMapping } from './entity/qc-template-data-mapping';
import { ProductTypeDataMapping } from '../product/entity/product-type-data-mapping.entity';
import { Size } from '../size/entity/size.entity';
import { LogModule } from '../log-app/log.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      QcTemplate,
      QcTemplateData,
      QcTemplateMapping,
      QcPlan,
      QcRecord,
      QcData,
      ProductType,
      Size,
      ProductTypeData,
      ProductTypeDataMapping,
    ]),
    MessageModule,
    LogModule,
  ],
  controllers: [QcTemplateController],
  providers: [QcTemplateService],
  exports: [QcTemplateService],
})
export class QcTemplateModule {}
