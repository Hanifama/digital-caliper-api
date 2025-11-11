import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';
import { AppVersion } from './entity/app-version.entity';
import { AppVersionService } from './app-version.service';
import { AppVersionController } from './app-version.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AppVersion]), MessageModule],
  controllers: [AppVersionController],
  providers: [AppVersionService],
  exports: [AppVersionService],
})
export class AppVersionModule {}
