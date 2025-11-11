import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { User } from 'src/app/auth/entitities/user.entity';
import { Location } from './entity/location.entity';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location, User]), MessageModule],
  providers: [LocationService],
  controllers: [LocationController],
  exports: [LocationService],
})
export class LocationModule {}
