import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { User } from '../auth/entitities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { GeneratorModule } from '../generator/generator.module';
import { LogModule } from '../log-app/log.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, QcData, QcRecord]),
    LogModule,
    GeneratorModule,
    MessageModule,
  ],
  providers: [NotificationService],
  controllers: [NotificationController],
  exports: [NotificationService],
})
export class NotificationModule {}
