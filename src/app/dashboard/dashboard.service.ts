import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../auth/entity/user.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';

import { DashboardSummaryParams } from './interfaces/dashboard-summary-params';
import { LogService } from '../log-app/log.service';
import { MessageService } from '../message/message.service';
import { DashboardSummaryBySizeParamsDto } from './dto/dashboard-bysize.dto';
import { Size } from '../size/entity/size.entity';
import { RoleMenu } from '../auth/entity/role-menu.entity';
import { ProductType } from '../product/entity/product-type.entity';
import { DashboardMeta } from './interfaces/dashboard-meta-size';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(ProductType)
    private readonly productTypeDataRepo: Repository<ProductType>,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(Size)
    private readonly sizeRepo: Repository<Size>,

    @InjectRepository(RoleMenu)
    private readonly roleMenuRepo: Repository<RoleMenu>,

    private readonly logService: LogService,
    private readonly messageService: MessageService,
  ) {}

  /** pemeriksaan acces menu */
  private async hasMenuAccess(
    roleId: string,
    menuId: string,
  ): Promise<boolean> {
    const count = await this.roleMenuRepo.count({
      where: {
        role_id: roleId,
        menu_id: menuId,
        status: 'active',
      },
    });

    return count > 0;
  }

  // === Summary Card Dashboard ===
  async getDashboardSummary(params: DashboardSummaryParams, userId: string) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    if (!user) {
      throw new Error('User tidak ditemukan.');
    }

    if (!user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 2. Cek akses filter lokasi */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    const { from_date, end_date, location_id } = params;

    /** 3. Validasi filter lokasi */
    if (!canFilterLocation && location_id) {
      throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
    }

    /** 4. Tentukan lokasi aktif */
    const activeLocationId = canFilterLocation
      ? (location_id ?? null) // null = ALL lokasi
      : user.locationId; // terkunci ke lokasi user

    /** 5. Handle date range */
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

    /** 6. Base Query (ACCESS-AWARE) */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (activeLocationId) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: activeLocationId,
        });
      }

      qb.andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      });

      return qb;
    };

    /** 7. Summary counts (ONLY status = Done) */
    const qcDone = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .getCount();

    const qcPassed = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.status_overall = :passed', { passed: 'Passed' })
      .getCount();

    const qcNotPassed = await baseQcQuery()
      .andWhere('r.status = :done', { done: 'Done' })
      .andWhere('r.status_overall = :notPassed', {
        notPassed: 'Not Passed',
      })
      .getCount();

    /** 8. Hitung persentase */
    let percentPassed = 0;
    let percentNotPassed = 0;

    if (qcDone > 0) {
      percentPassed = Math.round((qcPassed / qcDone) * 100);
      percentNotPassed = 100 - percentPassed;
    }

    this.messageService.setMessage('Berhasil memuat ringkasan dashboard.');

    /** 9. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-SUMMARY',
        data_2: `range:${start.toISOString().slice(0, 10)}~${new Date(
          end.getTime() - 1,
        )
          .toISOString()
          .slice(0, 10)} location:${activeLocationId ?? 'ALL'}`,
        data_3: `done:${qcDone}`,
        data_4: `passed:${qcPassed} notPassed:${qcNotPassed}`,
        data_5: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create dashboard log', err);
    }

    /** 10. Response */
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

  // === Daily Analysis dashboard ===
  async getDashboardDailyAnalysis(
    userId: string,
    year: number,
    month: number,
    location_id?: string,
  ) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) throw new Error('User tidak ditemukan.');

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    /** 2. Cek permission */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    /** 3. Tentukan lokasi efektif */
    let effectiveLocationId: string | null = null;

    if (canFilterLocation) {
      effectiveLocationId = location_id ?? null;
    } else {
      if (location_id) {
        throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
      }

      if (!user.locationId) {
        throw new Error('User belum mempunyai lokasi.');
      }

      effectiveLocationId = user.locationId;
    }

    /** 4. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (effectiveLocationId) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: effectiveLocationId,
        });
      }

      return qb;
    };

    /** 5. Range tanggal bulan */
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1); // exclusive

    /** 6. Query QC harian */
    const dailyRaw = await baseQcQuery()
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
      .andWhere(`r.created_dt >= :startDate AND r.created_dt < :endDate`, {
        startDate,
        endDate,
      })
      .groupBy('date')
      .orderBy('date', 'ASC')
      .getRawMany();

    /** 7. Map date → data */
    const dailyMap = new Map<
      string,
      { totalQc: number; passed: number; notPassed: number }
    >();

    dailyRaw.forEach((r) => {
      dailyMap.set(r.date, {
        totalQc: Number(r.total_qc),
        passed: Number(r.passed),
        notPassed: Number(r.not_passed),
      });
    });

    /** 8. Generate tanggal 1 → akhir bulan */
    const daysInMonth = new Date(year, month, 0).getDate();

    const daily = Array.from({ length: daysInMonth }).map((_, i) => {
      const d = new Date(year, month - 1, i + 1);
      const date = d.toISOString().slice(0, 10);

      const data = dailyMap.get(date) ?? {
        totalQc: 0,
        passed: 0,
        notPassed: 0,
      };

      const percentPassed =
        data.totalQc > 0 ? Math.round((data.passed / data.totalQc) * 100) : 0;

      this.messageService.setMessage(
        'Berhasil memuat ringkasan harian dashboard.',
      );

      return {
        date,
        totalQc: data.totalQc,
        passed: data.passed,
        notPassed: data.notPassed,
        percentPassed,
        percentNotPassed: data.totalQc > 0 ? 100 - percentPassed : 0,
        hasQcInspection: data.totalQc > 0,
      };
    });

    /** 9. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-ANALYSIS-DAILY',
        data_2: `month:${month}-${year} location:${
          effectiveLocationId ?? 'ALL'
        }`,
        data_3: `totalQc:${daily.reduce((s, d) => s + d.totalQc, 0)}`,
        data_4: `passed:${daily.reduce((s, d) => s + d.passed, 0)}`,
        data_5: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create daily dashboard analysis log', err);
    }

    /** 10. Return */
    return {
      month,
      year,
      totalDays: daysInMonth,
      daily,
    };
  }

  // === Weekly Analysis dashboard ===
  async getDashboardWeeklyAnalysis(userId?: string, location_id?: string) {
    /** 1. Ambil user */
    const user = userId
      ? await this.userRepo.findOne({
          where: { user_id: userId },
          relations: ['role'],
        })
      : null;

    if (!user) throw new Error('User tidak ditemukan.');

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    /** 2. Cek permission */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    /** 3. Tentukan lokasi efektif */
    let effectiveLocationId: string | null = null;

    if (canFilterLocation) {
      // boleh filter → ALL / lokasi tertentu
      effectiveLocationId = location_id ?? null;
    } else {
      if (location_id) {
        throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
      }

      if (!user.locationId) {
        throw new Error('User belum mempunyai lokasi.');
      }

      effectiveLocationId = user.locationId;
    }

    /** 4. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (effectiveLocationId) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: effectiveLocationId,
        });
      }

      return qb;
    };

    /** 5. Query weekly (7 hari, status = Done) */
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

    /** 6. Map date → data */
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

    this.messageService.setMessage(
      'Berhasil memuat ringkasan mingguan dashboard.',
    );

    /** 7. Rolling 7 days */
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const todayWIB = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
    );
    todayWIB.setHours(0, 0, 0, 0);

    const weekly = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(todayWIB);
      d.setDate(d.getDate() - (6 - i));

      const date = d.toISOString().slice(0, 10);
      const dayIndex = (new Date(date).getDay() + 6) % 7;

      const data = weeklyMap.get(date) ?? {
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
        dayIndex,
        dayName: days[dayIndex],
        date,
        ...data,
        percentPassed,
        percentNotPassed,
        hasQcInspection: data.totalQc > 0,
      };
    });

    /** 8. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-ANALYSIS-WEEKLY',
        data_2: `range:${weekly[0].date}~${weekly[6].date} location:${
          effectiveLocationId ?? 'ALL'
        }`,
        data_3: `totalQc:${weekly.reduce((s, d) => s + d.totalQc, 0)}`,
        data_4: `passed:${weekly.reduce((s, d) => s + d.passed, 0)}`,
        data_5: `viewer:${user.full_name}`,
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
    location_id?: string,
  ) {
    /** 1. Ambil user */
    const user = userId
      ? await this.userRepo.findOne({
          where: { user_id: userId },
          relations: ['role'],
        })
      : null;

    if (!user) throw new Error('User tidak ditemukan.');

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    /** 2. Cek permission filter lokasi */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    /** 3. Tentukan lokasi efektif */
    let effectiveLocationId: string | null = null;

    if (canFilterLocation) {
      effectiveLocationId = location_id ?? null;
    } else {
      if (location_id) {
        throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
      }

      if (!user.locationId) {
        throw new Error('User belum mempunyai lokasi.');
      }

      effectiveLocationId = user.locationId;
    }

    /** 4. Validasi month */
    if (month && (month < 1 || month > 12)) {
      throw new Error('Parameter month harus antara 1 sampai 12.');
    }

    const targetYear = year ?? new Date().getFullYear();

    /** 5. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo.createQueryBuilder('r');

      if (effectiveLocationId) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: effectiveLocationId,
        });
      }

      return qb;
    };

    /** 6. Tentukan range waktu */
    let startDate: Date;
    let endDate: Date;

    if (month) {
      startDate = new Date(Date.UTC(targetYear, month - 1, 1));
      endDate = new Date(Date.UTC(targetYear, month, 1));
    } else {
      startDate = new Date(Date.UTC(targetYear, 0, 1));
      endDate = new Date(Date.UTC(targetYear + 1, 0, 1));
    }

    /** 7. Query monthly */
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
        `SUM(CASE WHEN r.status = 'Done' AND r.status_overall = 'Passed' THEN 1 ELSE 0 END)`,
        'passed',
      )
      .addSelect(
        `SUM(CASE WHEN r.status = 'Done' AND r.status_overall = 'Not Passed' THEN 1 ELSE 0 END)`,
        'not_passed',
      )
      .andWhere(`r.created_dt >= :start AND r.created_dt < :end`, {
        start: startDate,
        end: endDate,
      })
      .groupBy('month')
      .orderBy('month', 'ASC')
      .getRawMany();

    /** 8. Map hasil */
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

    this.messageService.setMessage(
      'Berhasil memuat ringkasan bulanan dashboard.',
    );

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

    /** 9. Build response */
    const monthly = month
      ? (() => {
          const monthKey = `${targetYear}-${String(month).padStart(2, '0')}`;
          const data = monthlyMap.get(monthKey) ?? {
            totalQc: 0,
            passed: 0,
            notPassed: 0,
          };

          const percentPassed = data.totalQc
            ? Math.round((data.passed / data.totalQc) * 100)
            : 0;

          return [
            {
              monthIndex: month,
              monthName: months[month - 1],
              month: monthKey,
              ...data,
              percentPassed,
              percentNotPassed: 100 - percentPassed,
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

          const percentPassed = data.totalQc
            ? Math.round((data.passed / data.totalQc) * 100)
            : 0;

          return {
            monthIndex: m,
            monthName: months[i],
            month: monthKey,
            ...data,
            percentPassed,
            percentNotPassed: 100 - percentPassed,
            hasQcInspection: data.totalQc > 0,
          };
        });

    /** 10. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-ANALYSIS-MONTHLY',
        data_2: `year:${targetYear}${month ? ` month:${month}` : ''} location:${
          effectiveLocationId ?? 'ALL'
        }`,
        data_3: `totalQc:${monthly.reduce((s, m) => s + m.totalQc, 0)}`,
        data_4: `passed:${monthly.reduce((s, m) => s + m.passed, 0)}`,
        data_5: `viewer:${user.full_name}`,
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
    userId: string,
    page = 1,
    limit = 10,
    params?: {
      from_date?: string;
      end_date?: string;
      location_id?: string;
    },
  ) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    if (!user) {
      throw new Error('User tidak ditemukan.');
    }

    if (!user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 2. Cek akses filter lokasi */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    const { from_date, end_date, location_id } = params || {};

    /** 3. Validasi akses lokasi */
    if (!canFilterLocation && location_id) {
      throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
    }

    /** 4. Tentukan lokasi aktif */
    const activeLocationId = canFilterLocation
      ? (location_id ?? null) // null = ALL
      : user.locationId;

    /** 5. Validasi tanggal */
    if (from_date && end_date && new Date(from_date) > new Date(end_date)) {
      throw new Error('from_date tidak boleh lebih besar dari end_date');
    }

    const offset = (page - 1) * limit;

    /** 6. Base Query (ACCESS-AWARE) */
    const baseQuery = this.qcRecordRepo
      .createQueryBuilder('r')
      .leftJoin('user', 'u', 'u.user_id = r.created_by')
      .leftJoin('location', 'loc', 'loc.location_id = r.location_id')
      .leftJoin('qc_template', 't', 't.qc_template_id = r.qc_template_id')
      .where('r.status = :status', { status: 'Done' })
      .andWhere('r.status_overall IN (:...statuses)', {
        statuses: ['Passed', 'Not Passed'],
      });

    if (activeLocationId) {
      baseQuery.andWhere('r.location_id = :locationId', {
        locationId: activeLocationId,
      });
    }

    if (from_date) {
      baseQuery.andWhere('r.created_dt >= (:fromDate)::date', {
        fromDate: from_date,
      });
    }

    if (end_date) {
      baseQuery.andWhere(
        `r.created_dt < ((:endDate)::date + INTERVAL '1 day')`,
        { endDate: end_date },
      );
    }

    /** 7. Total count */
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

    /** 8. Ambil data utama */
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
      .orderBy('r.created_dt', 'DESC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    /** 9. Ambil agregasi qc_data */
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

    /** 10. Map qc_data */
    const qcDataMap = new Map<string, { passed: number; not_passed: number }>();

    qcDataRaw.forEach((d) => {
      const key = `${d.qc_id}_${d.sequence_no}_${d.location_id}_${d.piece_no}`;
      qcDataMap.set(key, {
        passed: Number(d.passed_count),
        not_passed: Number(d.not_passed_count),
      });
    });

    /** 11. Final response */
    const data = records.map((r) => {
      const key = `${r.qc_id}_${r.sequence_no}_${r.location_id}_${r.piece_no}`;

      return {
        qc_id: r.qc_id,
        sequence_no: r.sequence_no,
        location_id: r.location_id,
        location_name: r.location_name,
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

    this.messageService.setMessage('Berhasil memuat data rangkuman QC.');

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
    userId: string,
    page = 1,
    limit = 10,
    params?: {
      from_date?: string;
      end_date?: string;
      location_id?: string;
    },
  ) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) {
      throw new Error('User tidak ditemukan.');
    }

    if (!user.locationId) {
      throw new Error('User belum mempunyai lokasi.');
    }

    /** 2. Cek akses filter lokasi */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      'dashboard_filter_location',
    );

    const { from_date, end_date, location_id } = params || {};

    /** 3. Validasi akses lokasi */
    if (!canFilterLocation && location_id) {
      throw new Error('Anda tidak mempunyai akses untuk filter lokasi.');
    }

    /** 4. Tentukan lokasi aktif */
    const activeLocationId = canFilterLocation
      ? (location_id ?? null) // null = ALL
      : user.locationId;

    /** 5. Validasi tanggal */
    if (from_date && end_date && new Date(from_date) > new Date(end_date)) {
      throw new Error('from_date tidak boleh lebih besar dari end_date');
    }

    const offset = (page - 1) * limit;

    /** 6. Base query leaderboard */
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

    /** 7. Filter lokasi (ACCESS-AWARE) */
    if (activeLocationId) {
      qb.andWhere('r.location_id = :locationId', {
        locationId: activeLocationId,
      });
    }

    /** 8. Filter tanggal */
    if (from_date) {
      qb.andWhere('r.created_dt >= (:fromDate)::date', {
        fromDate: from_date,
      });
    }

    if (end_date) {
      qb.andWhere("r.created_dt < ((:endDate)::date + INTERVAL '1 day')", {
        endDate: end_date,
      });
    }

    /** 9. Group & pagination */
    qb.groupBy('r.created_by, u.full_name')
      .orderBy('total_check', 'DESC')
      .offset(offset)
      .limit(limit);

    /** 10. Total user */
    const totalUsers = await qb.getCount();

    /** 11. Ambil data */
    const rawData = await qb.getRawMany();

    const data = rawData.map((r, index) => ({
      no: offset + index + 1,
      qc_by: r.user_name,
      total_check: Number(r.total_check),
      passed: Number(r.passed_count),
      not_passed: Number(r.not_passed_count),
    }));

    this.messageService.setMessage('Berhasil memuat ringkasan QC.');

    /** 12. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-LEADERBOARD',
        data_2: `range:${from_date || 'ALL'}~${end_date || 'ALL'} location:${
          activeLocationId ?? 'ALL'
        }`,
        data_3: `totalUsers:${totalUsers}`,
        data_4: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create leaderboard log', err);
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
    params: DashboardSummaryBySizeParamsDto & { prodtype_id?: string },
    userId: string,
  ) {
    /** 1. Ambil user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    const MENU_FILTER_DASHBOARD_LOCATION = 'dashboard_filter_location';

    if (!user) throw new Error('User tidak ditemukan.');

    /** 2. Cek permission filter lokasi */
    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_FILTER_DASHBOARD_LOCATION,
    );

    /** 3. Tentukan location */
    const { from_date, end_date, size, location_id, prodtype_id } = params;

    let effectiveLocationId: string | null = null;

    if (canFilterLocation) {
      effectiveLocationId = location_id ?? null;
    } else {
      if (location_id) {
        throw new BadRequestException(
          'Anda tidak mempunyai akses untuk filter lokasi.',
        );
      }

      if (!user.locationId) {
        throw new BadRequestException('User belum mempunyai lokasi.');
      }

      effectiveLocationId = user.locationId;
    }

    /** 4. Handle date range */
    let start = from_date ? new Date(from_date) : new Date();
    let end = end_date ? new Date(end_date) : start;

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1);

    if (prodtype_id) {
      const product = await this.productTypeDataRepo.findOne({
        where: { prodtype_id },
      });

      if (!product) {
        throw new BadRequestException('Product type tidak ditemukan');
      }
    }

    /** 5. Base Query */
    const baseQcQuery = () => {
      const qb = this.qcRecordRepo
        .createQueryBuilder('r')
        .leftJoin(Size, 's', 's.name = r.size')
        .leftJoin(ProductType, 'pt', 'pt.prodtype_id = s.prodtype_id');

      if (effectiveLocationId) {
        qb.andWhere('r.location_id = :locationId', {
          locationId: effectiveLocationId,
        });
      }

      qb.andWhere('r.created_dt >= :start AND r.created_dt < :end', {
        start,
        end,
      });

      if (size) qb.andWhere('r.size = :size', { size });
      if (prodtype_id)
        qb.andWhere('pt.prodtype_id = :prodtype_id', { prodtype_id });

      return qb;
    };

    /** ============================
     *  6. META (SUMMARY PRODUCT)
     *  ============================
     */
    const metaRaw = await baseQcQuery()
      .select('pt.prodtype_id', 'productId')
      .addSelect('pt.name', 'productName')
      .addSelect(`COUNT(CASE WHEN r.status = 'Done' THEN 1 END)`, 'qcDone')
      .addSelect(
        `COUNT(CASE WHEN r.status_overall = 'Passed' THEN 1 END)`,
        'passed',
      )
      .addSelect(
        `COUNT(CASE WHEN r.status_overall = 'Not Passed' THEN 1 END)`,
        'notPassed',
      )
      .groupBy('pt.prodtype_id')
      .addGroupBy('pt.name')
      .getRawMany();

    /**
     * - params prodtype_id ada  → array 1 item berdasarkan params diminta
     * - params prodtype_id null → array multi product
     */
    const meta: DashboardMeta = metaRaw
      .filter((p) => !prodtype_id || p.productId === prodtype_id)
      .map((p) => {
        const qcDone = Number(p.qcDone);
        const passed = Number(p.passed);
        const notPassed = Number(p.notPassed);

        return {
          prodtype_id: p.productId,
          name: p.productName,
          qcDone,
          passed,
          notPassed,
          percentPassed: qcDone ? Math.round((passed / qcDone) * 100) : 0,
          percentNotPassed: qcDone ? Math.round((notPassed / qcDone) * 100) : 0,
        };
      });

    /** ============================
     *  7. DATA BY SIZE
     *  ============================
     */
    const rawData = await baseQcQuery()
      .select('r.size', 'size')
      .addSelect('pt.prodtype_id', 'productId')
      .addSelect('pt.name', 'productName')
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
      .addGroupBy('pt.prodtype_id')
      .addGroupBy('pt.name')
      .getRawMany();

    /** Helper: ambil angka WF (WF 300X150X6.5X9 → 300) */
    const getWFSizeNumber = (size: string): number => {
      if (!size) return Number.MAX_SAFE_INTEGER;

      const match = size.match(/^WF\s*(\d+)/i);
      return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
    };

    const data = rawData
      .map((r) => {
        const qcDone = Number(r.qcDone);
        const passed = Number(r.passed);
        const notPassed = Number(r.notPassed);

        return {
          size: r.size || 'Unknown',
          prodtype_id: r.productId,
          name: r.productName,
          qcDone,
          passed,
          notPassed,
          percentPassed: qcDone ? Math.round((passed / qcDone) * 100) : 0,
          percentNotPassed: qcDone ? Math.round((notPassed / qcDone) * 100) : 0,
          hasQcInspection: qcDone > 0,
          __sortSize: getWFSizeNumber(r.size),
        };
      })
      /** SORT SIZE WF DARI KECIL → BESAR */
      .sort((a, b) => a.__sortSize - b.__sortSize)
      .map(({ __sortSize, ...rest }) => rest);

    this.messageService.setMessage('Berhasil memuat ringkasan size.');

    /** 8. Logging */
    try {
      await this.logService.createLog(user, {
        data_1: 'DASHBOARD-SUMMARY-BY-SIZE',
        data_2: `range:${start.toISOString().slice(0, 10)}~${new Date(
          end.getTime() - 1,
        )
          .toISOString()
          .slice(0, 10)} location:${effectiveLocationId ?? 'ALL'} product:${
          prodtype_id ?? 'ALL'
        } size:${size ?? 'ALL'}`,
        data_3: `sizes:${data.length}`,
        data_4: `viewer:${user.full_name}`,
      });
    } catch (err) {
      console.error('Failed to create dashboard log', err);
    }

    /** 9. FINAL RESPONSE */
    return {
      meta,
      data,
    };
  }
}
