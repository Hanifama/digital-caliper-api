import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../auth/entitities/user.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';

import { DashboardSummaryParams } from './interfaces/dashboard-summary-params';
import { LogService } from '../log-app/log.service';
import { MessageService } from '../message/message.service';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,
    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,
    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    private readonly logService: LogService,
    private readonly messageService: MessageService,
  ) {}

  // === Summary Card Dashboard ===
  async getDashboardSummary(params: DashboardSummaryParams, userId: string) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) {
      throw new Error('User tidak ditemukan.');
    }

    const normalizeRole = (role?: string) => role?.trim().toLowerCase();

    const isSuperAdmin = normalizeRole(user.role?.name) === 'superadmin';

    if (!isSuperAdmin && !user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 2. Handle date range */
    const { from_date, end_date } = params;

    let start = new Date();
    let end = new Date();

    if (from_date) {
      start = new Date(from_date);
      start.setHours(0, 0, 0, 0);

      if (end_date) {
        end = new Date(end_date);
        end.setHours(0, 0, 0, 0);
      } else {
        end = new Date(from_date);
        end.setHours(0, 0, 0, 0);
      }
    } else {
      // default hari ini
      start.setHours(0, 0, 0, 0);
      end = new Date(start);
    }

    // end EXCLUSIVE
    end.setDate(end.getDate() + 1);

    /** 3. Base Query (role-aware location filter) */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (!isSuperAdmin) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: user.locationId,
        });
      }

      return qb;
    };

    /** 4. Summary counts */
    const dailyTotalQC = await baseQcQuery()
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    const qcPassed = await baseQcQuery()
      .andWhere('r.status_overall = :passed', { passed: 'Passed' })
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    const qcNotPassed = await baseQcQuery()
      .andWhere('r.status_overall = :notPassed', {
        notPassed: 'Not Passed',
      })
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    const qcProcessing = await baseQcQuery()
      .andWhere('(r.status IS NULL OR r.status = :processing)', {
        processing: 'Processing',
      })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    /** 5. Global info */
    const totalQC = isSuperAdmin
      ? await this.qcRecordRepo.count()
      : await this.qcRecordRepo.count({
          where: { location_id: user.locationId },
        });

    const totalTemplate = await this.qcTemplateRepo.count();

    /** 6. Logging (non-blocking) */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-SUMMARY',
        data_2: `range:${start.toISOString().slice(0, 10)}~${new Date(
          end.getTime() - 1,
        )
          .toISOString()
          .slice(0, 10)} location:${isSuperAdmin ? 'ALL' : user.locationId}`,
        data_3: `totalQC:${dailyTotalQC}`,
        data_4: `passed:${qcPassed} notPassed:${qcNotPassed} processing:${qcProcessing}`,
        data_5: `viewer:${user.full_name}`,
      });
    } catch (err) {
      // jangan bikin dashboard gagal
      console.error('Failed to create dashboard log', err);
    }

    /** 7. Response */
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

  // === Analysis dashboard ===
  async getDashboardAnalysis(userId?: string) {
    /** 1. Ambil user + role */
    const user = userId
      ? await this.userRepo.findOne({
          where: { user_id: userId },
          relations: ['role'],
        })
      : null;

    const normalizeRole = (role?: string) => role?.trim().toLowerCase();
    const isSuperAdmin = normalizeRole(user?.role?.name) === 'superadmin';

    if (user && !isSuperAdmin && !user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 2. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (user && !isSuperAdmin) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: user.locationId,
        });
      }

      return qb;
    };

    /** 3. Query weekly + status breakdown */
    const weeklyRaw = await baseQcQuery()
      .select(
        `to_char(r.created_dt AT TIME ZONE 'Asia/Jakarta', 'YYYY-MM-DD')`,
        'date',
      )
      .addSelect(`COUNT(r.qc_id)`, 'total')
      .addSelect(
        `SUM(CASE WHEN r.status_overall = 'Passed' THEN 1 ELSE 0 END)`,
        'passed',
      )
      .addSelect(
        `SUM(CASE WHEN r.status_overall = 'Not Passed' THEN 1 ELSE 0 END)`,
        'not_passed',
      )
      .addSelect(
        `SUM(CASE 
        WHEN r.status_overall = 'Processing' OR r.status_overall IS NULL 
        THEN 1 ELSE 0 END)`,
        'processing',
      )
      .andWhere(
        `
      r.created_dt >= (CURRENT_DATE - INTERVAL '6 days')
      AND r.created_dt < (CURRENT_DATE + INTERVAL '1 day')
    `,
      )
      .groupBy('date')
      .orderBy('date', 'ASC')
      .getRawMany();

    /** 4. Map date → data */
    const weeklyMap = new Map<
      string,
      { total: number; passed: number; notPassed: number; processing: number }
    >();

    weeklyRaw.forEach((r) => {
      weeklyMap.set(r.date, {
        total: Number(r.total),
        passed: Number(r.passed),
        notPassed: Number(r.not_passed),
        processing: Number(r.processing),
      });
    });

    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const getDayIndexFromDate = (date: string) => {
      const [y, m, d] = date.split('-').map(Number);
      const utcDate = new Date(Date.UTC(y, m - 1, d));
      const jsDay = utcDate.getUTCDay();
      return jsDay === 0 ? 6 : jsDay - 1;
    };

    /** 5. Today WIB */
    const todayWIB = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
    );
    todayWIB.setHours(0, 0, 0, 0);

    /** 6. Rolling 7 days */
    const weekly = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(todayWIB);
      d.setDate(d.getDate() - (6 - i));

      const date = d.toISOString().slice(0, 10);
      const dayIndex = getDayIndexFromDate(date);

      const data = weeklyMap.get(date) ?? {
        total: 0,
        passed: 0,
        notPassed: 0,
        processing: 0,
      };

      return {
        dayIndex,
        dayName: days[dayIndex],
        date,
        ...data,
        hasQcInspection: data.total > 0,
      };
    });

    /** 7. Logging */
    try {
      await this.logService.createLog(user ?? undefined, {
        data_1: 'DASHBOARD-ANALYSIS',
        data_2: `range:${weekly[0].date}~${weekly[6].date}`,
        data_3: `total:${weekly.reduce((s, d) => s + d.total, 0)}`,
        data_4: `passed:${weekly.reduce((s, d) => s + d.passed, 0)}`,
        data_5: `viewer:${user?.full_name ?? 'system'}`,
      });
    } catch (err) {
      console.error('Failed to create dashboard analysis log', err);
    }

    return { weekly };
  }

  // === Summary Recent dashboard ===
  async getRecentQcDashboard(
    userId?: string,
    page = 1,
    limit = 10,
    params?: {
      from_date?: string;
      end_date?: string;
    },
  ) {
    /** 1. Ambil user + role */
    const user = userId
      ? await this.userRepo.findOne({
          where: { user_id: userId },
          relations: ['role'],
        })
      : null;

    const normalizeRole = (role?: string) => role?.trim().toLowerCase();
    const isSuperAdmin = normalizeRole(user?.role?.name) === 'superadmin';

    if (user && !isSuperAdmin && !user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 🔒 Validasi tanggal */
    const { from_date, end_date } = params || {};
    if (from_date && end_date && new Date(from_date) > new Date(end_date)) {
      throw new Error('from_date tidak boleh lebih besar dari end_date');
    }

    const offset = (page - 1) * limit;

    /** 2. Base Query (ROLE + LOCATION SAFE) */
    const baseQuery = this.qcRecordRepo
      .createQueryBuilder('r')
      .leftJoin('user', 'u', 'u.user_id = r.created_by')
      .where('r.status = :status', { status: 'Done' })
      .andWhere('r.status_overall IN (:...statuses)', {
        statuses: ['Passed', 'Not Passed'],
      });

    if (user && !isSuperAdmin) {
      baseQuery.andWhere('r.location_id = :locationId', {
        locationId: user.locationId,
      });
    }

    /** 3. Filter tanggal */
    if (from_date) {
      baseQuery.andWhere(`r.created_dt >= (:fromDate)::date`, {
        fromDate: from_date,
      });
    }

    if (end_date) {
      baseQuery.andWhere(
        `r.created_dt < ((:endDate)::date + INTERVAL '1 day')`,
        { endDate: end_date },
      );
    }

    /** 4. Total count */
    const total = await baseQuery.getCount();

    if (!total) {
      return {
        data: [],
        meta: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      };
    }

    /** 5. Ambil data utama */
    const records = await baseQuery
      .select([
        'r.qc_id AS qc_id',
        'r.sequence_no AS sequence_no',
        'r.location_id AS location_id',
        'loc.name AS location_name',
        'r.piece_no AS piece_no',
        'r.qc_template_id AS qc_template_id',
        't.name AS template_name',
        'r.size AS size',
        'r.status AS status',
        'r.status_overall AS status_overall',
        'r.created_dt AS created_dt',
        'u.user_id AS created_by_id',
        'u.full_name AS created_by_name',
      ])
      .leftJoin('location', 'loc', 'loc.location_id = r.location_id')
      .leftJoin('qc_template', 't', 't.qc_template_id = r.qc_template_id')
      .orderBy('r.created_dt', 'DESC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    /** 6. Ambil agregasi qc_data */
    const qcDataRaw = await this.qcDataRepo
      .createQueryBuilder('d')
      .select([
        'd.qc_id AS qc_id',
        'd.sequence_no AS sequence_no',
        'd.location_id AS location_id',
        'd.piece_no AS piece_no',
        `SUM(CASE WHEN d.status = 'Passed' THEN 1 ELSE 0 END) AS passed_count`,
        `SUM(CASE WHEN d.status = 'Not Passed' THEN 1 ELSE 0 END) AS not_passed_count`,
      ])
      .where('d.qc_id IN (:...qcIds)', {
        qcIds: records.map((r) => r.qc_id),
      })
      .groupBy('d.qc_id, d.sequence_no, d.location_id, d.piece_no')
      .getRawMany();

    /** 7. Map qc_data */
    const qcDataMap = new Map<string, { passed: number; not_passed: number }>();

    qcDataRaw.forEach((d) => {
      const key = `${d.qc_id}_${d.sequence_no}_${d.location_id}_${d.piece_no}`;
      qcDataMap.set(key, {
        passed: Number(d.passed_count),
        not_passed: Number(d.not_passed_count),
      });
    });

    /** 8. Final response */
    const data = records.map((r) => {
      const key = `${r.qc_id}_${r.sequence_no}_${r.location_id}_${r.piece_no}`;

      return {
        qc_id: r.qc_id,
        sequence_no: r.sequence_no,
        location_name: r.location_name,
        location_id: r.location_id,
        piece_no: r.piece_no,
        qc_template_id: r.qc_template_id,
        qc_template_name: r.template_name,
        size: r.size,
        status: r.status,
        status_overall: r.status_overall,
        created_dt: r.created_dt,
        created_by_id: r.created_by_id,
        created_by_name: r.created_by_name,
        qc_summary: qcDataMap.get(key) ?? {
          passed: 0,
          not_passed: 0,
        },
      };
    });

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
