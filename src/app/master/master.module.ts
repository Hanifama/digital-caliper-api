import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';

import { MasterService } from './master.service';
import { MasterController } from './master.controller';

import { User } from '../auth/entitities/user.entity';
import { Role } from '../auth/entitities/role.entity';
import { RoleMenu } from '../auth/entitities/role-menu.entity';
import { Menu } from '../auth/entitities/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, RoleMenu, Menu]),
    MessageModule,
  ],
  controllers: [MasterController],
  providers: [MasterService],
  exports: [MasterService],
})
export class MasterModule {}
