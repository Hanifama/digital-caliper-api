import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from '../auth/entity/log.entity';
import { User } from '../auth/entity/user.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepo: Repository<Log>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async createLog(
    user?: User,
    data?: {
      data_1?: string;
      data_2?: string;
      data_3?: string;
      data_4?: string;
      data_5?: string;
    },
  ) {
    const log = new Log();
    log.user = user ?? null;
    log.data_1 = data?.data_1 ?? '';
    log.data_2 = data?.data_2 ?? '';
    log.data_3 = data?.data_3 ?? '';
    log.data_4 = data?.data_4 ?? '';
    log.data_5 = data?.data_5 ?? '';

    return await this.logRepo.save(log);
  }
}
