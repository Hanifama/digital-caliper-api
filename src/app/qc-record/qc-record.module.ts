import { Module } from '@nestjs/common';
// import { NotificationModule } from '../notification/notification.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';

import { QcRecordService } from './qc-record.service';
import { QcRecordController } from './qc-record.controller';

import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { Location } from '../location/entity/location.entity';
import { User } from '../auth/entitities/user.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { Size } from '../size/entity/size.entity';

import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { ProductTypeDataMapping } from '../product/entity/product-type-data-mapping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductTypeData,
      ProductTypeDataMapping,
      QcPlan,
      QcRecord,
      QcData,
      QcTemplate,
      QcTemplateData,
      Location,
      User,
      Size,
    ]),
    MessageModule,
    // NotificationModule,
  ],
  controllers: [QcRecordController],
  providers: [QcRecordService],
  exports: [QcRecordService],
})
export class QcRecordModule {}
