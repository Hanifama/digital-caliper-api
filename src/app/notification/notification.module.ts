import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/entity/user.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { MessageModule } from '../message/message.module';
import { GeneratorModule } from '../generator/generator.module';
import { LogModule } from '../log-app/log.module';

// BAILEYS SERVICE
import { WhatsappBaileysService } from './whatsapp-baileys.service';

// IMPORT CONTROLLER
import { NotificationController } from './notification.controller';

// === SERVICE LAMA DI-NONAKTIFKAN SEMENTARA ===
// import { NotificationService } from './notification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, QcData, QcRecord]),
    LogModule,
    GeneratorModule,
    MessageModule,
  ],
  providers: [
    // === SERVICE LAMA DI-NONAKTIFKAN ===
    // NotificationService,

    // === SERVICE BAILEYS ===
    WhatsappBaileysService,
  ],
  controllers: [NotificationController],
  exports: [
    WhatsappBaileysService,
    // NotificationService,
  ],
})
export class NotificationModule {}
