import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { DashboardSummaryParams } from './interfaces/dashboard-summary-params';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,
    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,
    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,
  ) {}

  // === Summary ringan ===
  async getDashboardSummary(params: DashboardSummaryParams) {
    const { from_date, end_date } = params;

    let start = new Date();
    let end = new Date();

    if (from_date) {
      start = new Date(from_date);
      start.setHours(0, 0, 0, 0);
    }

    if (end_date) {
      end = new Date(end_date);
      end.setHours(23, 59, 59, 999);
    } else if (from_date) {
      // fallback: kalau cuma from_date yang dikirim, end_date ikut from_date (24 jam penuh)
      end = new Date(from_date);
      end.setHours(23, 59, 59, 999);
    } else {
      // default: hari ini (00:00 - 23:59)
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    }

    const dailyTotalQC = await this.qcRecordRepo
      .createQueryBuilder('r')
      .where('r.created_dt BETWEEN :start AND :end', { start, end })
      .getCount();

    const totalQC = await this.qcRecordRepo.count();
    const totalTemplate = await this.qcTemplateRepo.count();

    const qcPassed = await this.qcDataRepo.count({
      where: { status: 'passed' },
    });
    const qcNotPassed = await this.qcDataRepo.count({
      where: { status: 'not passed' },
    });

    const qcProcessing = await this.qcRecordRepo
      .createQueryBuilder('r')
      .leftJoin('r.datas', 'd')
      .where('d.qc_data_id IS NULL')
      .getCount();

    return {
      dailyTotalQC,
      qcProcessing,
      qcPassed,
      qcNotPassed,
      totalQC,
      totalTemplate,
      lastUpdated: new Date(),
    };
  }

  async getDashboardAnalysis() {
    // Step 1: ambil data asli
    const weeklyRaw = await this.qcRecordRepo
      .createQueryBuilder('r')
      .select('WEEKDAY(r.created_dt)', 'dayIndex') // 0 = Senin ... 6 = Minggu
      .addSelect('COUNT(r.qc_id)', 'total')
      .groupBy('WEEKDAY(r.created_dt)')
      .orderBy('dayIndex', 'ASC')
      .getRawMany();

    // Step 2: siapkan map hasil query
    const weeklyMap = new Map(
      weeklyRaw.map((row) => [Number(row.dayIndex), Number(row.total)]),
    );

    // Step 3: array fix Senin - Minggu
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const weekly = days.map((day, idx) => ({
      dayIndex: idx,
      dayName: day,
      total: weeklyMap.get(idx) ?? 0, // kalau kosong → 0
    }));

    return { weekly };
  }
}
