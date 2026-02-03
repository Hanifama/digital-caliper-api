import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LdapService } from './ldap.service';

import { PasswordService } from './password.service';
import { TokenManagerService } from './tokenManager.service';

import { MessageModule } from '../message/message.module';
import { LogModule } from '../log-app/log.module';

import { JwtStrategy } from './strategy/jwt.strategy';

import { User } from './entity/user.entity';
import { Role } from './entity/role.entity';
import { Menu } from './entity/menu.entity';
import { RoleMenu } from './entity/role-menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, RoleMenu, Menu]),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('ACCESS_TOKEN_SECRET'),
        signOptions: { expiresIn: '7h' },
      }),
    }),
    MessageModule,
    LogModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenManagerService,
    PasswordService,
    JwtStrategy,
    LdapService,
  ],
  exports: [TokenManagerService, PasswordService],
})
export class AuthModule {}
