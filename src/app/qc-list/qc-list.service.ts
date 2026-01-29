import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';

import { MessageService } from 'src/app/message/message.service';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { User } from '../auth/entity/user.entity';
import { SheetService } from '../sheet/sheet.service';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { LogService } from '../log-app/log.service';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { RoleMenu } from '../auth/entity/role-menu.entity';

@Injectable()
export class QcListService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(RoleMenu)
    private readonly roleMenuRepo: Repository<RoleMenu>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(QcTemplateData)
    private readonly qcTemplateDataRepo: Repository<QcTemplateData>,

    @InjectRepository(QcPlan)
    private readonly qcPlanRepo: Repository<QcPlan>,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,

    @InjectRepository(ProductTypeData)
    private readonly productTypeDataRepo: Repository<ProductTypeData>,

    private readonly sheetService: SheetService,

    private readonly messageService: MessageService,
    private readonly logService: LogService,
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

  /** Insert Excel to qc plan */
  private async insertQcPlan(plans: QcPlan[]) {
    if (!plans.length) return;

    const escape = (v: any) =>
      v === null || v === undefined
        ? 'NULL'
        : `'${String(v).replace(/'/g, "''")}'`;

    const values = plans
      .map(
        (p) => `(
        ${escape(p.qc_id)},
        ${escape(p.qc_template_id)},
        ${escape(p.location_id)},
        ${escape(p.file_name)},
        ${escape(p.product)},
        ${escape(p.profile)},
        ${escape(p.size)},
        ${escape(p.specifications)},
        ${escape(p.dimension)},
        ${escape(p.sequence_no)},
        ${escape(p.std_grad)},
        ${p.kgm_nominal ?? 'NULL'},
        ${escape(p.brand_merek)},
        ${escape(p.status)},
        ${escape(p.created_by)},
        NOW()
      )`,
      )
      .join(',');

    const sql = `
      INSERT INTO qc_plan (
        qc_id,
        qc_template_id,
        location_id,
        file_name,
        product,
        profile,
        size,
        specifications,
        dimension,
        sequence_no,
        std_grad,
        kgm_nominal,
        brand_merek,
        status,
        created_by,
        created_dt
      ) VALUES ${values};
    `;

    await this.qcPlanRepo.query(sql);
  }

  /** Ambil semua QC Plan beserta template terkait admin */
  async getAllQcPlansAdmin(
    userId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
    fileName?: string,
    locationId?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    const plansQuery = this.qcPlanRepo
      .createQueryBuilder('qp')
      .withDeleted()
      .leftJoinAndSelect('qp.qc_template', 'qt')
      .leftJoinAndSelect('qp.location', 'loc');

    const countQuery = this.qcPlanRepo
      .createQueryBuilder('qp')
      .withDeleted()
      .leftJoin('qp.qc_template', 'qt');

    // Filter search
    if (search && search.trim() !== '' && search !== '{{search}}') {
      const trimmed = search.trim();
      const searchText = `%${trimmed.toLowerCase()}%`;
      const searchNumber = Number(trimmed);

      if (!isNaN(searchNumber) && /^\d+$/.test(trimmed)) {
        // Kalau input murni angka, hanya cari berdasarkan sequence_no
        plansQuery.andWhere('qp.sequence_no = :searchNumber', { searchNumber });
        countQuery.andWhere('qp.sequence_no = :searchNumber', { searchNumber });
      } else {
        // Kalau input teks, cari di qc_id, template_name, atau status
        plansQuery.andWhere(
          '(LOWER(qp.qc_id) LIKE :searchText OR LOWER(qt.name) LIKE :searchText OR LOWER(qp.status) LIKE :searchText)',
          { searchText },
        );
        countQuery.andWhere(
          '(LOWER(qp.qc_id) LIKE :searchText OR LOWER(qt.name) LIKE :searchText OR LOWER(qp.status) LIKE :searchText)',
          { searchText },
        );
      }
    }

    // Filter file_name
    if (fileName && fileName.trim() !== '') {
      const fileNameText = `%${fileName.trim().toLowerCase()}%`;
      plansQuery.andWhere('LOWER(qp.file_name) LIKE :fileNameText', {
        fileNameText,
      });
      countQuery.andWhere('LOWER(qp.file_name) LIKE :fileNameText', {
        fileNameText,
      });
    }

    // Filter location
    if (locationId) {
      plansQuery.andWhere('qp.location_id = :locationId', { locationId });
      countQuery.andWhere('qp.location_id = :locationId', { locationId });
    }

    plansQuery
      .orderBy('qp.sequence_no', 'ASC')
      .addOrderBy('qp.created_dt', 'DESC')
      .offset(offset)
      .limit(limit);

    const [plans, totalData] = await Promise.all([
      plansQuery.getMany(),
      countQuery.getCount(),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    // Ambil semua user_id unik dari created_by & updated_by
    const userIds = Array.from(
      new Set(
        plans
          .map((p) => [p.created_by, p.updated_by])
          .flat()
          .filter(Boolean),
      ),
    );

    let userMap = new Map<string, string>();
    if (userIds.length > 0) {
      const users = await this.userRepo
        .createQueryBuilder('u')
        .select(['u.user_id', 'u.name'])
        .where('u.user_id IN (:...userIds)', { userIds })
        .getMany();

      userMap = new Map(users.map((u) => [u.user_id, u.name]));
    }

    const result = plans.map((p) => ({
      qc_id: p.qc_id,
      qc_template_id: p.qc_template_id,
      template_name: p.qc_template?.name,
      location_id: p.location_id,
      location_name: p.location?.name,
      size: p.size,
      kgm_nominal: p.kgm_nominal,
      brand_merek: p.brand_merek,
      file_name: p.file_name,
      sequence_no: p.sequence_no,
      product: p.product,
      status: p.status,
      created_by: p.created_by,
      created_by_name: userMap.get(p.created_by),
      created_dt: p.created_dt,
      updated_by: p.updated_by,
      updated_by_name: userMap.get(p.updated_by),
      updated_dt: p.updated_dt,
    }));

    this.messageService.setMessage('Berhasil memuat semua QC Plan.');

    await this.logService.createLog(user ?? undefined, {
      data_1: 'GET-QC-PLAN-ADMIN',
      data_2: `page:${page}, limit:${limit}`,
      data_3: `search:${search || '-'}, fileName:${fileName || '-'}`,
      data_4: `totalData:${totalData}`,
      data_5: `locationId:${locationId || '-'}`,
    });

    return {
      meta: {
        page,
        limit,
        totalPages,
        totalData,
        totalDataPerPage: result.length,
      },
      data: result,
    };
  }

  /** Ambil semua QC Plan beserta template terkait filter location and soft delete*/
  async getAllQcPlans(
    userId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
    location_id?: string,
    fileName?: string,
    from_date?: string,
    end_date?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    // Ambil info user beserta role dan location
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
      select: ['user_id', 'locationId', 'role'],
    });

    if (!user) throw new BadRequestException('User tidak ditemukan.');

    const CAN_FILTER_LOC = 'qc_list_filter_location';

    const canFilterLocation = await this.hasMenuAccess(
      user.role.role_id,
      CAN_FILTER_LOC,
    );

    if (!canFilterLocation) {
      if (location_id?.trim()) {
        throw new BadRequestException(
          'Anda tidak memiliki izin untuk memfilter berdasarkan lokasi.',
        );
      }

      if (!user.locationId) {
        throw new BadRequestException('Pengguna belum ditempatkan lokasi.');
      }

      location_id = user.locationId;
    }

    const plansQuery = this.qcPlanRepo.createQueryBuilder('qp');
    const countQuery = this.qcPlanRepo.createQueryBuilder('qp');

    // Join template & location
    plansQuery
      .leftJoinAndSelect('qp.qc_template', 'qt')
      .leftJoinAndSelect('qp.location', 'loc');
    countQuery.leftJoin('qp.qc_template', 'qt');

    if (canFilterLocation) {
      // memiliki acces menu bisa lihat semua
      plansQuery.withDeleted();
      countQuery.withDeleted();

      plansQuery.andWhere('qp.status != :doneStatus', {
        doneStatus: 'Done',
      });
      countQuery.andWhere('qp.status != :doneStatus', {
        doneStatus: 'Done',
      });

      // Jika user memiliki acces menu mengirim location → filter by location
      if (location_id && location_id.trim()) {
        plansQuery.andWhere('qp.location_id = :filterLoc', {
          filterLoc: location_id.trim(),
        });
        countQuery.andWhere('qp.location_id = :filterLoc', {
          filterLoc: location_id.trim(),
        });
      }
    } else {
      // User biasa tidak memiliki acces hanya bisa lihat berdasarkan lokasi user sendiri
      if (!user.locationId)
        throw new BadRequestException('Pengguna belum ditempatkan lokasi.');

      plansQuery
        .where('qp.deleted_at IS NULL')
        .andWhere('qp.location_id = :locationId', {
          locationId: user.locationId,
        })
        .andWhere('qp.status != :doneStatus', { doneStatus: 'Done' });

      countQuery
        .where('qp.deleted_at IS NULL')
        .andWhere('qp.location_id = :locationId', {
          locationId: user.locationId,
        })
        .andWhere('qp.status != :doneStatus', { doneStatus: 'Done' });
    }

    // Filter search
    if (search?.trim() && search !== '{{search}}') {
      const trimmed = search.trim();
      const searchText = `%${trimmed.toLowerCase()}%`;
      const searchNumber = Number(trimmed);

      if (!isNaN(searchNumber) && /^\d+$/.test(trimmed)) {
        plansQuery.andWhere('qp.sequence_no = :searchNumber', { searchNumber });
        countQuery.andWhere('qp.sequence_no = :searchNumber', { searchNumber });
      } else {
        plansQuery.andWhere(
          '(LOWER(qp.qc_id) LIKE :searchText OR LOWER(qt.name) LIKE :searchText OR LOWER(qp.status) LIKE :searchText)',
          { searchText },
        );
        countQuery.andWhere(
          '(LOWER(qp.qc_id) LIKE :searchText OR LOWER(qt.name) LIKE :searchText OR LOWER(qp.status) LIKE :searchText)',
          { searchText },
        );
      }
    }

    // Filter file_name
    if (fileName?.trim()) {
      const fileNameText = `%${fileName.trim().toLowerCase()}%`;
      plansQuery.andWhere('LOWER(qp.file_name) LIKE :fileNameText', {
        fileNameText,
      });
      countQuery.andWhere('LOWER(qp.file_name) LIKE :fileNameText', {
        fileNameText,
      });
    }

    // Default tanggal: 1 bulan (bulan berjalan)
    let from: Date;
    let to: Date;

    if (from_date && end_date) {
      from = new Date(from_date);
      to = new Date(end_date);
      to.setHours(23, 59, 59, 999);
    } else {
      const now = new Date();

      // awal bulan
      from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);

      // akhir bulan
      to = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    }

    // filter tanggal
    plansQuery.andWhere('qp.created_dt BETWEEN :from AND :to', { from, to });
    countQuery.andWhere('qp.created_dt BETWEEN :from AND :to', { from, to });

    // Sorting & pagination
    plansQuery
      .orderBy('qp.sequence_no', 'ASC')
      .addOrderBy('qp.created_dt', 'DESC')
      .offset(offset)
      .limit(limit);

    const [plans, totalData] = await Promise.all([
      plansQuery.getMany(),
      countQuery.getCount(),
    ]);
    const totalPages = Math.ceil(totalData / limit);

    // Ambil user map
    const userIds = Array.from(
      new Set(
        plans
          .map((p) => [p.created_by, p.updated_by])
          .flat()
          .filter(Boolean),
      ),
    );
    let userMap = new Map<string, string>();
    if (userIds.length > 0) {
      const users = await this.userRepo
        .createQueryBuilder('u')
        .select(['u.user_id', 'u.name'])
        .where('u.user_id IN (:...userIds)', { userIds })
        .getMany();
      userMap = new Map(users.map((u) => [u.user_id, u.name]));
    }

    const result = plans.map((p) => ({
      qc_id: p.qc_id,
      qc_template_id: p.qc_template_id,
      template_name: p.qc_template?.name,
      location_id: p.location_id,
      location_name: p.location?.name,
      kgm_nominal: p.kgm_nominal,
      brand_merek: p.brand_merek,
      file_name: p.file_name,
      sequence_no: p.sequence_no,
      size: p.size,
      product: p.product,
      notes: p.notes,
      status: p.status,
      created_by: p.created_by,
      created_by_name: userMap.get(p.created_by),
      created_dt: p.created_dt,
      updated_by: p.updated_by,
      updated_by_name: userMap.get(p.updated_by),
      updated_dt: p.updated_dt,
    }));

    await this.logService.createLog(user, {
      data_1: 'GET-QC-PLANS',
      data_2: `page:${page}`,
      data_3: `limit:${limit}`,
      data_4: `search:${search || '-'}`,
      data_5: `location:${location_id || '-'}`,
    });

    const msg = canFilterLocation
      ? 'Berhasil memuat semua QC Plan.'
      : 'Berhasil memuat semua QC Plan di lokasi Anda.';

    this.messageService.setMessage(msg);

    return {
      meta: {
        page,
        limit,
        totalPages,
        totalData,
        totalDataPerPage: result.length,
      },
      data: result,
    };
  }

  /** Mengambil detail QC Plan */
  async getQcPlanDetail(qcId: string): Promise<any> {
    if (!qcId) {
      throw new BadRequestException('qc_id harus diberikan.');
    }

    // Ambil QC Plan beserta template dan lokasi
    const plan = await this.qcPlanRepo
      .createQueryBuilder('qp')
      .withDeleted()
      .leftJoinAndSelect('qp.qc_template', 'qt')
      .leftJoinAndSelect('qp.location', 'loc')
      .where('qp.qc_id = :qcId', { qcId })
      .getOne();

    if (!plan) {
      throw new NotFoundException(`QC Plan dengan ID ${qcId} tidak ditemukan.`);
    }

    // Ambil info user (created_by & updated_by)
    const userIds = [plan.created_by, plan.updated_by].filter(Boolean);
    let userMap = new Map<string, string>();
    if (userIds.length > 0) {
      const users = await this.userRepo
        .createQueryBuilder('u')
        .select(['u.user_id', 'u.name'])
        .where('u.user_id IN (:...userIds)', { userIds })
        .getMany();
      userMap = new Map(users.map((u) => [u.user_id, u.name]));
    }

    // Format response
    const result = {
      qc_id: plan.qc_id,
      qc_template_id: plan.qc_template_id,
      template_name: plan.qc_template?.name,
      location_id: plan.location_id,
      location_name: plan.location?.name,
      size: plan.size,
      campaign_no: plan.campaign_no,
      sequence_no: plan.sequence_no,
      pattern: plan.pattern,
      heat_number: plan.heat_number,
      bloom_number: plan.bloom_number,
      type_material: plan.type_material,
      thick: plan.thick,
      width: plan.width,
      length: plan.length,
      kg_m: plan.kg_m,
      weight: plan.weight,
      order_number: plan.order_number,
      item_number: plan.item_number,
      status: plan.status,
      remarks: plan.remarks,
      created_by: plan.created_by,
      created_by_name: userMap.get(plan.created_by),
      created_dt: plan.created_dt,
      updated_by: plan.updated_by,
      updated_by_name: userMap.get(plan.updated_by),
      updated_dt: plan.updated_dt,
      // Tambahkan template detail lengkap jika mau
      template_detail: plan.qc_template,
    };

    this.messageService.setMessage(`Berhasil memuat detail QC Plan ${qcId}.`);
    return result;
  }

  /** Delete semua QC Plan Soft Delete berdasarkan lokasi user, tapi hanya yang status 'New Data' */
  async softDeleteAllPlans(userId: string) {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId'],
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'Pengguna belum memiliki lokasi yang terdaftar.',
      );
    }

    // Ambil semua QC Plan yang status 'New Data' di lokasi user
    const plansToDelete = await this.qcPlanRepo.find({
      where: { location_id: user.locationId, status: 'New Data' },
    });

    if (plansToDelete.length === 0) {
      this.messageService.setMessage(
        `Tidak ada QC Plan dengan status 'New Data' untuk lokasi ${user.locationId}.`,
      );
      // await this.logService.createLog(user, {
      //   data_1: 'SOFT-DELETE-QC-PLANS',
      //   data_2: `location:${user.locationId}`,
      //   data_3: 'result: no plans to delete',
      // });
      return;
    }

    // Soft delete + update status menjadi 'Deleted'
    await this.qcPlanRepo
      .createQueryBuilder()
      .update(QcPlan)
      .set({
        status: 'Deleted',
        deleted_at: () => 'NOW()',
      })
      .where('location_id = :locationId AND status = :status', {
        locationId: user.locationId,
        status: 'New Data',
      })
      .execute();

    this.messageService.setMessage(
      `Semua QC Plan dengan status 'New Data' untuk lokasi ${user.locationId} berhasil dihapus.`,
    );
    // await this.logService.createLog(user, {
    //   data_1: 'SOFT-DELETE-QC-PLANS',
    //   data_2: `location:${user.locationId}`,
    //   data_3: `deleted_count:${updateResult.affected}`,
    // });
  }

  /** Restore semua QC Plan berdasarkan lokasi user */
  async restoreAllPlans(userId: string) {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId'],
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'Pengguna belum memiliki lokasi yang terdaftar.',
      );
    }

    const restoreResult = await this.qcPlanRepo
      .createQueryBuilder()
      .restore()
      .where('location_id = :locationId', { locationId: user.locationId })
      .andWhere('deleted_at IS NOT NULL')
      .execute();

    const affectedRows = restoreResult.affected ?? 0;

    this.messageService.setMessage(
      `Semua QC Plan untuk lokasi ${user.locationId} berhasil direstore.`,
    );
    await this.logService.createLog(user, {
      data_1: 'RESTORE-QC-PLANS',
      data_2: `location:${user.locationId}`,
      data_3: `restored_count:${affectedRows}`,
    });
  }

  /** Soft Delete 1 QC Plan berdasarkan qc_id & lokasi user */
  async softDeletePlan(userId: string, qcId: string) {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId'],
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'Pengguna belum memiliki lokasi yang terdaftar.',
      );
    }

    // Ambil QC Plan sesuai lokasi & qc_id
    const plan = await this.qcPlanRepo.findOne({
      where: { location_id: user.locationId, qc_id: qcId, status: 'New Data' },
    });

    if (!plan) {
      throw new BadRequestException(
        `QC Plan dengan BATCH ID ${qcId} dan status 'New Data' tidak ditemukan di lokasi ${user.locationId}.`,
      );
    }

    // Soft delete + update status menjadi 'Deleted'
    await this.qcPlanRepo
      .createQueryBuilder()
      .update(QcPlan)
      .set({ status: 'Deleted', deleted_at: new Date() })
      .where(
        'qc_id = :qcId AND location_id = :locationId AND status = :status',
        {
          qcId,
          locationId: user.locationId,
          status: 'New Data',
        },
      )
      .execute();

    this.messageService.setMessage(
      `QC Plan dengan BATCH ID ${qcId} berhasil dihapus.`,
    );

    // LOG SERVICE
    // await this.logService.createLog(user, {
    //   data_1: 'SOFT-DELETE-QC-PLAN',
    //   data_2: `qc_id:${qcId}`,
    //   data_3: `location:${user.locationId}`,
    // });
  }

  /** Memberikan Catatan Terhadap QC List Plan */
  async updatePlanNotes(userId: string, qcId: string, notes: string) {
    const plan = await this.qcPlanRepo.findOne({ where: { qc_id: qcId } });
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });
    if (!plan) throw new Error(`QC Plan dengan qc_id ${qcId} tidak ditemukan`);

    plan.notes = notes;
    await this.qcPlanRepo.save(plan);
    this.messageService.setMessage(
      `QC Plan dengan BATCH ID ${qcId} diberikan catatan.`,
    );
    await this.logService.createLog(user ?? undefined, {
      data_1: 'UPDATE-QC-PLAN-NOTES',
      data_2: `qc_id:${qcId}`,
      data_3: `notes:${notes}`,
    });
  }

  /**
   * Import QC Plan berdasarkan lokasi user
   */
  async importQcPlans(file: Express.Multer.File, userId: string) {
    /** ------------------------------------------------------------------
     * Step 1: Ambil data user, pastikan user memiliki locationId */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId', 'name', 'user_id'],
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'Pengguna belum memiliki lokasi yang terdaftar.',
      );
    }

    /** ------------------------------------------------------------------
     * Step 2: Parse file Excel menjadi rows */
    const rows: any[] = await this.sheetService.importQcPlanExcel(file);
    if (!rows.length) {
      throw new BadRequestException(
        'File Excel kosong atau format tidak sesuai.',
      );
    }

    /** ------------------------------------------------------------------
     * Step 3: Fetch seluruh qc_id yang sudah ada di DB (qc_plan & qc_record)*/
    const existingPlans = await this.qcPlanRepo
      .createQueryBuilder('plan')
      .select(['plan.qc_id', 'plan.sequence_no', 'plan.location_id'])
      .getMany();

    const existingRecords = await this.qcRecordRepo
      .createQueryBuilder('rec')
      .select(['rec.qc_id', 'rec.sequence_no', 'rec.location_id'])
      .getMany();

    const existingPlanSet = new Set(
      existingPlans.map((p) => `${p.qc_id}|${p.sequence_no}|${p.location_id}`),
    );
    const existingRecordSet = new Set(
      existingRecords.map(
        (r) => `${r.qc_id}|${r.sequence_no}|${r.location_id}`,
      ),
    );

    /** ------------------------------------------------------------------
     * Step 4: Identifikasi duplikat batch_id di dalam file Excel itu sendiri*/
    const excelSeen = new Set();
    const duplicateExcelIds = new Set();

    rows.forEach((row) => {
      const qcIdRaw = row['batch_id'] || null;
      const seqNo = row['sequence_no'] ?? null;

      if (!qcIdRaw || seqNo === null) return;

      const qcId = qcIdRaw.replace(/\s+/g, '');
      const key = `${qcId}|${seqNo}|${user.locationId}`;

      if (excelSeen.has(key)) {
        duplicateExcelIds.add(key);
      } else {
        excelSeen.add(key);
      }
    });

    /** ------------------------------------------------------------------
     * Step 5: Ambil semua size unik dari Excel untuk dipakai batch-query template*/
    const allSizes = new Set(
      rows.filter((r) => r.size).map((r) => r.size.toLowerCase().trim()),
    );

    /** ------------------------------------------------------------------
     * Step 6: Fetch semua template yang memiliki size yang cocok*/
    const templates = await this.qcTemplateRepo
      .createQueryBuilder('template')
      .leftJoinAndSelect('template.size', 'size')
      .leftJoinAndSelect('size.productType', 'productType')
      .where('LOWER(size.name) IN (:...sizes)', { sizes: Array.from(allSizes) })
      .getMany();

    const templateMap = new Map();
    templates.forEach((t) => {
      templateMap.set(t.size.name.toLowerCase().trim(), t);
    });

    /** ------------------------------------------------------------------
     * Step 7: Persiapan variabel proses batch insert*/
    const BATCH_SIZE = 500;
    const plansToInsert: QcPlan[] = [];
    const processedExcelIds = new Set();

    let totalSuccess = 0;
    let skippedMissingSize = 0;
    let skippedMissingBatch = 0;
    let skippedMissingTemplate = 0;
    let skippedDuplicateExcel = 0;
    let skippedDuplicatePlan = 0;
    let skippedDuplicateRecord = 0;

    const templateUnitWeights = await this.qcTemplateDataRepo
      .createQueryBuilder('d')
      .select(['d.qc_template_id', 'd.nominal_tolerance'])
      .where('d.input_code = :code', { code: 'unit.weight' })
      .getMany();

    // Buat map: templateId → nominal_tolerance
    const weightMap = new Map<string, number>();
    templateUnitWeights.forEach((d) => {
      weightMap.set(d.qc_template_id, Number(d.nominal_tolerance));
    });

    /** ------------------------------------------------------------------
     * Step 8: Loop utama pemrosesan setiap row Excel */
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      const sizeName = row['size'] || null;
      if (!sizeName) {
        skippedMissingSize++;
        continue;
      }

      let qcId = row['batch_id'] || null;
      const seqNo = row['sequence_no'] ?? null;

      if (!qcId) {
        skippedMissingBatch++;
        continue;
      }
      if (seqNo === null) continue;

      qcId = qcId.replace(/\s+/g, '');
      const key = `${qcId}|${seqNo}|${user.locationId}`;

      /** --------------------------------------------------------------
       * CEK URUTAN DUPLIKAT */

      // 1️ Duplicate in Excel
      if (processedExcelIds.has(key)) {
        skippedDuplicateExcel++;
        continue;
      }
      processedExcelIds.add(key);

      // 2️ Duplicate in qc_plan
      if (existingPlanSet.has(key)) {
        skippedDuplicatePlan++;
        continue;
      }

      // 3️ Duplicate in qc_record
      if (existingRecordSet.has(key)) {
        skippedDuplicateRecord++;
        continue;
      }

      /** --------------------------------------------------------------
       * Step 9: Cari template berdasarkan SIZE*/
      const sizeKey = sizeName.toLowerCase().trim();
      const foundTemplate = templateMap.get(sizeKey);

      if (!foundTemplate) {
        skippedMissingTemplate++;
        continue;
      }

      /** --------------------------------------------------------------
       * Step 10: Build QcPlan entity */
      const plan = this.qcPlanRepo.create({
        qc_id: qcId,
        qc_template_id: foundTemplate.qc_template_id,
        location_id: user.locationId,
        file_name: file.originalname,
        product: row['product'] || null,
        profile: sizeName,
        size: sizeName,
        specifications: row['specifications'] ?? null,
        dimension: sizeName,
        sequence_no: seqNo,
        std_grad: row['std_grade'] ?? null,
        kgm_nominal: weightMap.get(foundTemplate.qc_template_id),
        brand_merek: row['brand_merek'] ?? null,
        status: 'New Data',
        created_by: user.user_id,
        created_dt: new Date(),
      });

      plansToInsert.push(plan);

      /** --------------------------------------------------------------
       * Step 11: Insert batch jika sudah mencapai limit */
      if (plansToInsert.length >= BATCH_SIZE) {
        await this.insertQcPlan(plansToInsert);
        totalSuccess += plansToInsert.length;
        plansToInsert.length = 0;
      }
    }

    /** ------------------------------------------------------------------
     * Step 12: Insert sisa data yang belum diinsert*/
    if (plansToInsert.length > 0) {
      await this.insertQcPlan(plansToInsert);
      totalSuccess += plansToInsert.length;
    }

    /** ------------------------------------------------------------------
     * Step 13: Build hasil laporan */
    const result = {
      totalProcessed: rows.length,
      successCount: totalSuccess,
      skippedMissingSize,
      skippedMissingBatch,
      skippedMissingTemplate,
      skippedDuplicateExcel,
      skippedDuplicatePlan,
      skippedDuplicateRecord,
    };

    this.messageService.setMessage(
      `Berhasil import data sebanyak ${totalSuccess} QC`,
    );

    await this.logService.createLog(user, {
      data_1: 'IMPORT-QC-PLAN',
      data_2: `file:${file.originalname}`,
      data_3: `totalRows:${rows.length}`,
      data_4: `successCount:${totalSuccess}`,
      data_5: `missSize:${skippedMissingSize}, missBatch:${skippedMissingBatch}, dupPlan:${skippedDuplicatePlan}, dupRec:${skippedDuplicateRecord}`,
    });

    return result;
  }

  /** Export QC Plan XLSX */
  public async exportQcPlans(
    userId: string,
  ): Promise<{ filename: string; buffer: Buffer }> {
    // 1. Ambil semua QC Plan
    const plans: QcPlan[] = await this.qcPlanRepo.find({
      relations: ['qc_template', 'location'],
    });

    // 1a. Ambil userId
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    // 2. Mapping ke format Excel (sesuai header yang diinginkan)
    const formatedData = plans.map((plan) => ({
      'QC ID': plan.qc_id,
      'QC Template ID': plan.qc_template_id,
      'Campaign No': plan.campaign_no,
      'Sequence No': plan.sequence_no,
      Pattern: plan.pattern,
      'Heat Number': plan.heat_number,
      'Bloom Number': plan.bloom_number,
      'Type Material': plan.type_material,
      Thick: plan.thick,
      Width: plan.width,
      Length: plan.length,
      'KG/M': plan.kg_m,
      Weight: plan.weight,
      'Order Number': plan.order_number,
      'Item Number': plan.item_number,
      H: plan.h,
      B: plan.b,
      ThickneesWeb: plan.thicknees_web,
      ThicknesFlange: plan.thicknes_flange,
      PCS: plan.pcs,
      Spec: plan.spec,
      CE: plan.ce,
      FinishTemp: plan.finish_temp,
      ChargingTime: plan.charging_time ? plan.charging_time.toISOString() : '',
      DischargingTime: plan.discharging_time
        ? plan.discharging_time.toISOString()
        : '',
      ProcessTime: plan.process_time,
      Status: plan.status,
      Remarks: plan.remarks,
      Location: plan.location?.name || plan.location_id || '',
      Size: plan.size || '-',
      CreatedBy: plan.created_by,
      CreatedDt: plan.created_dt.toISOString(),
    }));

    const filename = `QC_Plan-${Date.now()}.xlsx`;
    const buffer: Buffer = this.sheetService.exportDataToExcel(
      formatedData,
      'QC_Plan',
    );

    this.messageService.setMessage('Berhasil export QC Plan!');

    await this.logService.createLog(user ?? undefined, {
      data_1: 'EXPORT-QC-PLAN',
      data_2: `totalRecords:${plans.length}`,
      data_3: `filename:${filename}`,
      data_4: `timestamp:${new Date().toISOString()}`,
    });

    return { filename, buffer };
  }

  /** Export QC Record + QC Data
   * - Hanya QC Data yang ADA
   * - Urutan sesuai QC Template Data (order_numb)
   * - Header pakai alias dari Product Type Data
   */
  public async exportQcRecords(filter: {
    userId: string;
    from_date?: string;
    end_date?: string;
    location_id?: string;
  }): Promise<{ filename: string; buffer: Buffer }> {
    const { userId, from_date, end_date, location_id } = filter;

    const MENU_EXPORT_QC_LOCATION = 'qc_list_export_location';

    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) {
      throw new BadRequestException('User tidak ditemukan.');
    }

    const canExportByLocation = await this.hasMenuAccess(
      user.role.role_id,
      MENU_EXPORT_QC_LOCATION,
    );

    const requestedLocationId = location_id?.trim();
    let resolvedLocationId: string | undefined;

    if (!canExportByLocation) {
      if (requestedLocationId) {
        throw new BadRequestException(
          'Anda tidak memiliki izin untuk export berdasarkan lokasi.',
        );
      }

      if (!user.locationId) {
        throw new BadRequestException('Pengguna belum ditempatkan lokasi.');
      }

      resolvedLocationId = user.locationId;
    } else {
      resolvedLocationId = requestedLocationId;
    }

    // 1️. Ambil QC RECORD (TANPA JOIN QC DATA)
    const qb = this.qcRecordRepo
      .createQueryBuilder('qr')
      .leftJoinAndSelect('qr.location', 'loc')
      .where('qr.status_overall != :Processing', {
        Processing: 'Processing',
      });

    if (resolvedLocationId) {
      qb.andWhere('qr.location_id = :locationId', {
        locationId: resolvedLocationId,
      });
    }

    if (from_date && end_date) {
      qb.andWhere('qr.created_dt BETWEEN :from AND :to', {
        from: `${from_date} 00:00:00`,
        to: `${end_date} 23:59:59`,
      });
    } else if (from_date) {
      qb.andWhere('qr.created_dt >= :from', { from: `${from_date} 00:00:00` });
    } else if (end_date) {
      qb.andWhere('qr.created_dt <= :to', { to: `${end_date} 23:59:59` });
    }

    const records = await qb.getMany();

    if (!records.length) {
      return {
        filename: `QC_Record_Empty.xlsx`,
        buffer: this.sheetService.exportDataToExcel([], 'QC_Record'),
      };
    }

    // 2️. Ambil QC DATA dari Repository
    const qcIds = records.map((r) => r.qc_id);
    const qcDatas = await this.qcDataRepo
      .createQueryBuilder('qd')
      .where('qd.qc_id IN (:...ids)', { ids: qcIds })
      .getMany();

    const qcDataMap = new Map<string, QcData[]>();
    qcDatas.forEach((d) => {
      if (!qcDataMap.has(d.qc_id)) qcDataMap.set(d.qc_id, []);
      qcDataMap.get(d.qc_id)!.push(d);
    });

    // 3️. Ambil QC TEMPLATE
    const templateIds = [...new Set(records.map((r) => r.qc_template_id))];
    const qcTemplates = await this.qcTemplateRepo
      .createQueryBuilder('qt')
      .where('qt.qc_template_id IN (:...ids)', { ids: templateIds })
      .getMany();
    const qcTemplateMap = new Map<string, QcTemplate>();
    qcTemplates.forEach((qt) => qcTemplateMap.set(qt.qc_template_id, qt));

    // 4️. Ambil QC TEMPLATE DATA (ORDER)
    const templateDatas = await this.qcTemplateDataRepo
      .createQueryBuilder('qtd')
      .where('qtd.qc_template_id IN (:...ids)', { ids: templateIds })
      .andWhere('qtd.enabled = true')
      .orderBy('qtd.order_numb', 'ASC')
      .getMany();
    const templateLookup = new Map<string, QcTemplateData>();
    templateDatas.forEach((td) =>
      templateLookup.set(`${td.qc_template_id}__${td.input_code}`, td),
    );

    // 5️. Ambil PRODUCT TYPE DATA (ALIAS HEADER)
    const prodTypeIds = [
      ...new Set(
        records
          .map((r) => qcTemplateMap.get(r.qc_template_id)?.prodtype_id)
          .filter((v): v is string => !!v),
      ),
    ];
    const productTypeDatas = await this.productTypeDataRepo
      .createQueryBuilder('ptd')
      .where('ptd.prodtype_id IN (:...ids)', { ids: prodTypeIds })
      .getMany();
    const prodTypeLookup = new Map<string, ProductTypeData>();
    productTypeDatas.forEach((pt) =>
      prodTypeLookup.set(`${pt.prodtype_id}__${pt.code}`, pt),
    );

    // 6️. Ambil semua user yang ada di created_by records
    const userIds = [...new Set(records.map((r) => r.created_by))];
    const users = await this.userRepo
      .createQueryBuilder('u')
      .where('u.user_id IN (:...ids)', { ids: userIds })
      .getMany();
    const userMap = new Map<string, string>();
    users.forEach((u) => userMap.set(u.user_id, u.full_name));

    // 7️. Mapping ke Excel Row
    const formatedData = records.map((record) => {
      const row: any = {
        No: record.sequence_no,
        'Batch ID': record.qc_id,
        'QC Template ID': record.qc_template_id,
        'Piece No': record.piece_no,
        Location: record.location?.name || record.location_id || '',
        Size: record.size || '-',

        Brand: record.brand_merek || '-',
        'STD Dimention': record.std_grad || '-',

        'Total Length': record.total_length,
        'Kg/m Nominal': record.kgm_nominal,

        Length: record.length,
        Weight: record.weight,
        'Kg/m Actual': record.kg_m,
        'Percent Deviasi': record.percent_deviasi,

        Status: record.status,
        'Status Overall': record.status_overall,

        // GANTI ID ke NAMA USER
        CreatedBy: userMap.get(record.created_by) || record.created_by,
        CreatedDt: record.created_dt.toISOString(),
      };

      const prodtypeId = qcTemplateMap.get(record.qc_template_id)?.prodtype_id;
      const recordQcDatas = qcDatas.filter(
        (d) =>
          d.qc_id === record.qc_id &&
          d.piece_no === record.piece_no &&
          d.sequence_no === record.sequence_no &&
          d.location_id === record.location_id,
      );

      const sortedQcData = recordQcDatas
        .map((d) => {
          const tpl = templateLookup.get(
            `${record.qc_template_id}__${d.input_code}`,
          );
          const prodAlias = prodtypeId
            ? prodTypeLookup.get(`${prodtypeId}__${d.input_code}`)
            : undefined;
          const header =
            prodAlias?.alias || prodAlias?.label || tpl?.label || d.input_code;
          return {
            qcData: d,
            header,
            code: d.input_code,
            posisition: d.position,
            order: tpl?.order_numb ?? 9999,
          };
        })
        .sort((a, b) => a.order - b.order);

      sortedQcData.forEach(({ qcData, header, code, posisition }) => {
        const finalHeader = `${header} (${posisition})`;
        row[`${finalHeader}_CODE`] = code ?? '';
        row[`${finalHeader}_VALUE`] = qcData.input_value ?? '';
        row[`${finalHeader}_STATUS`] = qcData.status ?? '';
      });

      return row;
    });

    // 8️. Generate Excel
    const filename = `QC_Record_Full-${Date.now()}.xlsx`;
    const buffer = this.sheetService.exportDataToExcel(
      formatedData,
      'QC_Record',
    );

    this.messageService.setMessage('Berhasil export Quality Control History');

    await this.logService.createLog(user ?? undefined, {
      data_1: 'EXPORT-QC',
      data_2: `range:${from_date ?? '-'}~${end_date ?? '-'}`,
      data_3: `total:${records.length}`,
      data_4: `filename:${filename}`,
      data_5: `location:${resolvedLocationId ?? 'ALL'}`,
    });

    return { filename, buffer };
  }

  /** Export QC Plan Header Only (XLSX) */
  public async exportQcPlansHeaderOnly(userId: string) {
    // 1a. Ambil userId
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    const buffer = this.sheetService.exportQcPlanHeaderOnly();
    const filename = 'QC_Plan_Template.xlsx';
    this.messageService.setMessage('Berhasil mengekspor template QC Plan.');

    await this.logService.createLog(user ?? undefined, {
      data_1: 'EXPORT-QC-PLAN-HEADER',
      data_2: `filename:${filename}`,
      data_3: `timestamp:${new Date().toISOString()}`,
    });

    return { filename, buffer };
  }
}
