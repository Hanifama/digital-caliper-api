import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from './log.service';
import { Log } from '../auth/entity/log.entity';
import { User } from '../auth/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log, User])],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
