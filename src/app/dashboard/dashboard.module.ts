import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { MessageModule } from 'src/app/message/message.module';
import { SheetModule } from '../sheet/sheet.module';

import { ProductType } from '../product/entity/product-type.entity';
import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { LogModule } from '../log-app/log.module';
import { User } from '../auth/entity/user.entity';
import { Size } from '../size/entity/size.entity';
import { RoleMenu } from '../auth/entity/role-menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      ProductType,
      ProductTypeData,
      QcTemplate,
      QcTemplateData,
      QcPlan,
      QcRecord,
      QcData,
      Size,
      RoleMenu,
    ]),
    LogModule,
    MessageModule,
    SheetModule,
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}
