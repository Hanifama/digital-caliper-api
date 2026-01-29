import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { User } from 'src/app/auth/entity/user.entity';
import { Location } from './entity/location.entity';
import { MessageModule } from '../message/message.module';
import { LogModule } from '../log-app/log.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, User]),
    MessageModule,
    LogModule,
  ],
  providers: [LocationService],
  controllers: [LocationController],
  exports: [LocationService],
})
export class LocationModule {}
