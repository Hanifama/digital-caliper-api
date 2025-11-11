import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { User } from '../auth/entitities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, QcData, QcRecord]), MessageModule],
  providers: [NotificationService],
  controllers: [NotificationController],
  exports: [NotificationService],
})
export class NotificationModule {}
