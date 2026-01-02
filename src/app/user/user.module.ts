import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';

import { User } from '../auth/entitities/user.entity';
import { Role } from '../auth/entitities/role.entity';

import { MessageModule } from '../message/message.module';
import { SheetModule } from '../sheet/sheet.module';
import { AuthModule } from '../auth/auth.module';
import { Location } from '../location/entity/location.entity';
import { LogModule } from '../log-app/log.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Location]),
    MessageModule,
    SheetModule,
    AuthModule,
    LogModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
