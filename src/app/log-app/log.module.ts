import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from './log.service';
import { Log } from '../auth/entitities/log.entity';
import { User } from '../auth/entitities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log, User])],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
