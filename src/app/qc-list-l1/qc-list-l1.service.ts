import { Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';
import { CreateQcPlanDto } from './dto/create-qc-plan-l1.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageService } from '../message/message.service';

@Injectable()
export class QcListL1Service {
  constructor(
    @InjectRepository(QcPlan)
    private readonly qcPlanRepo: Repository<QcPlan>,

    private readonly messageService: MessageService,
  ) {}

  @Transactional()
  async createFromL1(payload: CreateQcPlanDto) {
    const plan = new QcPlan();
    Object.assign(plan, payload);

    plan.status = 'New Data';
    plan.created_by = 'operator-660e8400-e29b-41d4-a716-446655440111';
    plan.location_id = 'LOC002';

    await this.qcPlanRepo.save(plan);

    this.messageService.setMessage('Berhasil membuat data baru.');
  }
}
