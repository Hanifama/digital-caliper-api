import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QcListL1Service } from './qc-list-l1.service';

import { User } from '../auth/entity/user.entity';
import { RoleMenu } from '../auth/entity/role-menu.entity';
import { Location } from '../location/entity/location.entity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { ProductTypeData } from '../product/entity/product-type-data.entity';

import { MessageModule } from 'src/app/message/message.module';
import { SheetModule } from '../sheet/sheet.module';
import { LogModule } from '../log-app/log.module';
import { QcListL1Controller } from './qc-list-l1-controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      RoleMenu,
      Location,
      QcTemplate,
      QcTemplateData,
      QcPlan,
      QcRecord,
      QcData,
      ProductTypeData,
    ]),
    MessageModule,
    SheetModule,
    LogModule,
  ],
  controllers: [QcListL1Controller],
  providers: [QcListL1Service],
  exports: [QcListL1Service],
})
export class QcListL1Module {}
