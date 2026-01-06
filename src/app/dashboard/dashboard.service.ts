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
import { DashboardSummaryBySizeParamsDto } from './dto/dashboard-bysize.dto';
import { Size } from '../size/entity/size.entity';

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

    @InjectRepository(Size)
    private readonly sizeRepo: Repository<Size>,

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

      end = end_date ? new Date(end_date) : new Date(from_date);
      end.setHours(0, 0, 0, 0);
    } else {
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

    /** 4. Summary counts (ONLY status = Done) */
    const qcDone = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    const qcPassed = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.status_overall = :passed', { passed: 'Passed' })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    const qcNotPassed = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.status_overall = :notPassed', { notPassed: 'Not Passed' })
      .andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      })
      .getCount();

    /** 5. Hitung persentase */
    let percentPassed = 0;
    let percentNotPassed = 0;
    if (qcDone > 0) {
      percentPassed = Math.round((qcPassed / qcDone) * 100);
      percentNotPassed = 100 - percentPassed;
    }

    this.messageService.setMessage(`Berhasil memuat ringkasan dashboard.`);

    /** 6. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-SUMMARY',
        data_2: `range:${start.toISOString().slice(0, 10)}~${new Date(
          end.getTime() - 1,
        )
          .toISOString()
          .slice(0, 10)} location:${isSuperAdmin ? 'ALL' : user.locationId}`,
        data_3: `done:${qcDone}`,
        data_4: `passed:${qcPassed} notPassed:${qcNotPassed} percentPassed:${percentPassed} percentNotPassed:${percentNotPassed}`,
        data_5: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create dashboard log', err);
    }

    /** 7. Response (FINAL) */
    return {
      qcDone,
      qcPassed,
      qcNotPassed,
      percentPassed,
      percentNotPassed,
    };
  }

  // === Master Dashboard Counts ===
  async getCountMasterDashboard() {
    try {
      /** 1. Hitung total size */
      const totalSize = await this.sizeRepo.count();

      /** 2. Hitung total template QC */
      const totalTemplate = await this.qcTemplateRepo.count();

      /** 3. Hitung total user */
      const totalUser = await this.userRepo.count();

      /** 4. Response */
      return {
        totalSize,
        totalTemplate,
        totalUser,
      };
    } catch (err) {
      console.error('Failed to get master dashboard counts', err);
      throw new Error('Gagal memuat data master dashboard.');
    }
  }

  // === Weekly Analysis dashboard ===
  async getDashboardWeeklyAnalysis(userId?: string) {
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

    /** 3. Query weekly (hanya status = Done) */
    const weeklyRaw = await baseQcQuery()
      .select(
        `to_char(r.created_dt AT TIME ZONE 'Asia/Jakarta', 'YYYY-MM-DD')`,
        'date',
      )
      .addSelect(
        `SUM(CASE WHEN r.status = 'Done' THEN 1 ELSE 0 END)`,
        'total_qc',
      )
      .addSelect(
        `SUM(CASE WHEN r.status = 'Done' AND r.status_overall = 'Passed' THEN 1 ELSE 0 END)`,
        'passed',
      )
      .addSelect(
        `SUM(CASE WHEN r.status = 'Done' AND r.status_overall = 'Not Passed' THEN 1 ELSE 0 END)`,
        'not_passed',
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
      { totalQc: number; passed: number; notPassed: number }
    >();

    weeklyRaw.forEach((r) => {
      weeklyMap.set(r.date, {
        totalQc: Number(r.total_qc),
        passed: Number(r.passed),
        notPassed: Number(r.not_passed),
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
        totalQc: 0,
        passed: 0,
        notPassed: 0,
      };

      // 7. Hitung persentase dengan total 100%
      let percentPassed = 0;
      let percentNotPassed = 0;
      if (data.totalQc > 0) {
        percentPassed = Math.round((data.passed / data.totalQc) * 100);
        percentNotPassed = 100 - percentPassed;
      }

      return {
        dayIndex,
        dayName: days[dayIndex],
        date,
        ...data,
        percentPassed,
        percentNotPassed,
        hasQcInspection: data.totalQc > 0,
      };
    });

    this.messageService.setMessage(`Berhasil memuat data analisa dashboard.`);

    /** 8. Logging */
    try {
      await this.logService.createLog(user ?? undefined, {
        data_1: 'DASHBOARD-ANALYSIS-WEEKLY',
        data_2: `range:${weekly[0].date}~${weekly[6].date}`,
        data_3: `totalQc:${weekly.reduce((s, d) => s + d.totalQc, 0)}`,
        data_4: `passed:${weekly.reduce((s, d) => s + d.passed, 0)}`,
        data_5: `viewer:${user?.full_name ?? 'system'}`,
      });
    } catch (err) {
      console.error('Failed to create weekly dashboard analysis log', err);
    }

    return { weekly };
  }

  // === Monthly Analysis Dashboard ===
  async getDashboardMonthlyAnalysis(
    userId?: string,
    year?: number,
    month?: number,
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

    /** 2. Validasi month */
    if (month && (month < 1 || month > 12)) {
      throw new Error('Parameter month harus antara 1 sampai 12.');
    }

    const targetYear = year ?? new Date().getFullYear();

    /** 3. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (user && !isSuperAdmin) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: user.locationId,
        });
      }

      return qb;
    };

    /** 4. Tentukan range waktu */
    let startDate: Date;
    let endDate: Date;

    if (month) {
      startDate = new Date(Date.UTC(targetYear, month - 1, 1));
      endDate = new Date(Date.UTC(targetYear, month, 1));
    } else {
      startDate = new Date(Date.UTC(targetYear, 0, 1));
      endDate = new Date(Date.UTC(targetYear + 1, 0, 1));
    }

    /** 5. Query (HANYA STATUS = DONE) */
    const monthlyRaw = await baseQcQuery()
      .select(
        `to_char(r.created_dt AT TIME ZONE 'Asia/Jakarta', 'YYYY-MM')`,
        'month',
      )
      .addSelect(
        `SUM(CASE WHEN r.status = 'Done' THEN 1 ELSE 0 END)`,
        'total_qc',
      )
      .addSelect(
        `SUM(
        CASE WHEN r.status = 'Done' AND r.status_overall = 'Passed' THEN 1 ELSE 0 END
      )`,
        'passed',
      )
      .addSelect(
        `SUM(
        CASE WHEN r.status = 'Done' AND r.status_overall = 'Not Passed' THEN 1 ELSE 0 END
      )`,
        'not_passed',
      )
      .andWhere(`r.created_dt >= :start AND r.created_dt < :end`, {
        start: startDate,
        end: endDate,
      })
      .groupBy('month')
      .orderBy('month', 'ASC')
      .getRawMany();

    /** 6. Map */
    const monthlyMap = new Map<
      string,
      { totalQc: number; passed: number; notPassed: number }
    >();

    monthlyRaw.forEach((r) => {
      monthlyMap.set(r.month, {
        totalQc: Number(r.total_qc),
        passed: Number(r.passed),
        notPassed: Number(r.not_passed),
      });
    });

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    /** 7. Build response dengan persentase fixed */
    const monthly = month
      ? (() => {
          const monthKey = `${targetYear}-${String(month).padStart(2, '0')}`;
          const data = monthlyMap.get(monthKey) ?? {
            totalQc: 0,
            passed: 0,
            notPassed: 0,
          };

          let percentPassed = 0;
          let percentNotPassed = 0;
          if (data.totalQc > 0) {
            percentPassed = Math.round((data.passed / data.totalQc) * 100);
            percentNotPassed = 100 - percentPassed; // dijamin total 100%
          }

          return [
            {
              monthIndex: month,
              monthName: months[month - 1],
              month: monthKey,
              ...data,
              percentPassed,
              percentNotPassed,
              hasQcInspection: data.totalQc > 0,
            },
          ];
        })()
      : Array.from({ length: 12 }).map((_, i) => {
          const m = i + 1;
          const monthKey = `${targetYear}-${String(m).padStart(2, '0')}`;
          const data = monthlyMap.get(monthKey) ?? {
            totalQc: 0,
            passed: 0,
            notPassed: 0,
          };

          let percentPassed = 0;
          let percentNotPassed = 0;
          if (data.totalQc > 0) {
            percentPassed = Math.round((data.passed / data.totalQc) * 100);
            percentNotPassed = 100 - percentPassed;
          }

          return {
            monthIndex: m,
            monthName: months[i],
            month: monthKey,
            ...data,
            percentPassed,
            percentNotPassed,
            hasQcInspection: data.totalQc > 0,
          };
        });

    this.messageService.setMessage('Berhasil memuat data analisa.');

    /** 8. Logging */
    try {
      await this.logService.createLog(user ?? undefined, {
        data_1: 'DASHBOARD-ANALYSIS-MONTHLY',
        data_2: `year:${targetYear}${month ? ` month:${month}` : ''}`,
        data_3: `totalQc:${monthly.reduce((s, m) => s + m.totalQc, 0)}`,
        data_4: `passed:${monthly.reduce((s, m) => s + m.passed, 0)}`,
        data_5: `viewer:${user?.full_name ?? 'system'}`,
      });
    } catch (err) {
      console.error('Failed to create monthly dashboard analysis log', err);
    }

    return {
      year: targetYear,
      month: month ?? null,
      monthly,
    };
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

    this.messageService.setMessage(`Berhasil memuat data rangkuman QC.`);

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

  // === Summary Recent User dashboard ===
  async getRecentQcDashboardByUser(
    userId?: string,
    page = 1,
    limit = 10,
    params?: { from_date?: string; end_date?: string; locationId?: number },
  ) {
    /** 1. Ambil user  */
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

    /** 🔒 Validasi akses location filter */
    const { from_date, end_date, locationId } = params || {};
    if (locationId && !isSuperAdmin) {
      throw new Error(
        'Mohon maaf, anda tidak mempunyai akses untuk filter ini.',
      );
    }

    /** 🔒 Validasi tanggal */
    if (from_date && end_date && new Date(from_date) > new Date(end_date)) {
      throw new Error('from_date tidak boleh lebih besar dari end_date');
    }

    const offset = (page - 1) * limit;

    /** 2. Base query (QC Done semua user) */
    const qb = this.qcRecordRepo
      .createQueryBuilder('r')
      .select('r.created_by', 'created_by')
      .addSelect('u.full_name', 'user_name')
      .addSelect('COUNT(*)', 'total_check')
      .addSelect(
        `SUM(CASE WHEN r.status_overall = 'Passed' THEN 1 ELSE 0 END)`,
        'passed_count',
      )
      .addSelect(
        `SUM(CASE WHEN r.status_overall = 'Not Passed' THEN 1 ELSE 0 END)`,
        'not_passed_count',
      )
      .leftJoin('user', 'u', 'u.user_id = r.created_by')
      .where('r.status = :done', { done: 'Done' });

    // Filter lokasi untuk superadmin
    if (isSuperAdmin && locationId) {
      qb.andWhere('r.location_id = :locationId', { locationId });
    }

    // User biasa pakai lokasi sendiri
    if (!isSuperAdmin && user?.locationId) {
      qb.andWhere('r.location_id = :locationId', {
        locationId: user.locationId,
      });
    }

    /** Filter tanggal */
    if (from_date) {
      qb.andWhere('r.created_dt >= (:fromDate)::date', { fromDate: from_date });
    }
    if (end_date) {
      qb.andWhere("r.created_dt < ((:endDate)::date + INTERVAL '1 day')", {
        endDate: end_date,
      });
    }

    /** Group by user untuk leaderboard */
    qb.groupBy('r.created_by, u.full_name')
      .orderBy('total_check', 'DESC')
      .offset(offset)
      .limit(limit);

    /** Ambil total user untuk pagination */
    const totalUsers = await qb.getCount();

    /** Ambil data */
    const rawData = await qb.getRawMany();

    /** Mapping data ke format tabel */
    const data = rawData.map((r, index) => ({
      no: offset + index + 1,
      qc_by: r.user_name,
      total_check: Number(r.total_check),
      passed: Number(r.passed_count),
      not_passed: Number(r.not_passed_count),
    }));

    /** Logging */
    if (user) {
      try {
        await this.logService.createLog(user, {
          data_1: 'DASHBOARD-LEADERBOARD',
          data_2: `range:${from_date || 'ALL'}~${end_date || 'ALL'} location:${isSuperAdmin && locationId ? locationId : 'ALL'}`,
          data_3: `totalUsers:${totalUsers}`,
          data_4: `viewer:${user.full_name}`,
        });
      } catch (err) {
        console.error('Failed to create leaderboard log', err);
      }
    }

    return {
      data,
      meta: {
        page,
        limit,
        total: totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
      },
    };
  }

  // === Summary BySize dashboard ===
  async getDashboardSummaryBySize(
    params: DashboardSummaryBySizeParamsDto,
    userId: string,
  ) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) throw new Error('User tidak ditemukan.');

    const normalizeRole = (role?: string) => role?.trim().toLowerCase();
    const isSuperAdmin = normalizeRole(user.role?.name) === 'superadmin';

    if (!isSuperAdmin && !user.locationId)
      throw new Error('User belum mempunyai lokasi.');

    /** 2. Handle date range */
    const { from_date, end_date, size } = params;
    let start = from_date ? new Date(from_date) : new Date();
    let end = end_date ? new Date(end_date) : start;
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1); // end exclusive

    /** 3. Base Query (role-aware location filter) */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (!isSuperAdmin) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: user.locationId,
        });
      }

      qb.andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      });

      // Filter by size jika ada
      if (size) {
        qb.andWhere('r.size = :size', { size });
      }

      return qb;
    };

    /** 4. Ambil data summary per size */
    const rawData = await baseQcQuery()
      .select('r.size', 'size')
      .addSelect(`COUNT(CASE WHEN r.status = 'Done' THEN 1 END)`, 'qcDone')
      .addSelect(
        `COUNT(CASE WHEN r.status_overall = 'Passed' THEN 1 END)`,
        'passed',
      )
      .addSelect(
        `COUNT(CASE WHEN r.status_overall = 'Not Passed' THEN 1 END)`,
        'notPassed',
      )
      .groupBy('r.size')
      .getRawMany();

    /** 5. Mapping ke response format */
    const result = rawData.map((r) => {
      const qcDone = Number(r.qcDone);
      const passed = Number(r.passed);
      const notPassed = Number(r.notPassed);

      return {
        size: r.size || 'Unknown',
        qcDone,
        passed,
        notPassed,
        percentPassed: qcDone ? Math.round((passed / qcDone) * 100) : 0,
        percentNotPassed: qcDone ? Math.round((notPassed / qcDone) * 100) : 0,
        hasQcInspection: qcDone > 0,
      };
    });

    /** 6. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-SUMMARY-BY-SIZE',
        data_2: `range:${start.toISOString().slice(0, 10)}~${new Date(
          end.getTime() - 1,
        )
          .toISOString()
          .slice(
            0,
            10,
          )} location:${isSuperAdmin ? 'ALL' : user.locationId} size:${size || 'ALL'}`,
        data_3: `sizes:${result.length}`,
        data_4: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create dashboard log', err);
    }

    return result;
  }
}
