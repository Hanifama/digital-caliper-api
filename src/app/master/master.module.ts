import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';

import { MasterService } from './master.service';
import { MasterController } from './master.controller';

import { User } from '../auth/entity/user.entity';
import { Role } from '../auth/entity/role.entity';
import { RoleMenu } from '../auth/entity/role-menu.entity';
import { Menu } from '../auth/entity/menu.entity';

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
