import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QcListService } from './qc-list.service';
import { QcListController } from './qc-list.controller';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { MessageModule } from 'src/app/message/message.module';
import { SheetModule } from '../sheet/sheet.module';
import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { Location } from '../location/entity/location.entity';
import { User } from '../auth/entitities/user.entity';
import { LogModule } from '../log-app/log.module';
import { RoleMenu } from '../auth/entitities/role-menu.entity';

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
  controllers: [QcListController],
  providers: [QcListService],
  exports: [QcListService],
})
export class QcListModule {}
