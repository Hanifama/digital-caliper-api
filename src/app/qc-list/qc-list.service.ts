import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { QcTemplate } from '../qc-template/entity/qc-template.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';

import { MessageService } from 'src/app/message/message.service';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { User } from '../auth/entitities/user.entity';
import { SheetService } from '../sheet/sheet.service';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';

@Injectable()
export class QcListService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(QcTemplateData)
    private readonly qcTemplateDataRepo: Repository<QcTemplateData>,

    @InjectRepository(QcPlan)
    private readonly qcPlanRepo: Repository<QcPlan>,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    private readonly sheetService: SheetService,

    private readonly messageService: MessageService,
  ) {}

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
    page: number = 1,
    limit: number = 10,
    search?: string,
    locationId?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

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
    from_date?: string,
    end_date?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    // ambil locationId user
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId'],
    });

    if (!user?.locationId) {
      throw new BadRequestException('Pengguna belum ditempatkan lokasi.');
    }

    const plansQuery = this.qcPlanRepo
      .createQueryBuilder('qp')
      .leftJoinAndSelect('qp.qc_template', 'qt')
      .leftJoinAndSelect('qp.location', 'loc')
      .where('qp.deleted_at IS NULL')
      .andWhere('qp.location_id = :locationId', {
        locationId: user.locationId,
      })
      .andWhere('qp.status != :doneStatus', { doneStatus: 'Done' });

    const countQuery = this.qcPlanRepo
      .createQueryBuilder('qp')
      .leftJoin('qp.qc_template', 'qt')
      .where('qp.deleted_at IS NULL')
      .andWhere('qp.status != :doneStatus', { doneStatus: 'Done' })
      .andWhere('qp.location_id = :locationId', {
        locationId: user.locationId,
      });

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
        // Kalau input berupa teks, cari di qc_id, template_name, atau status
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

    // Filter tanggal
    if (from_date && end_date) {
      const from = new Date(from_date);
      const to = new Date(end_date);

      to.setHours(23, 59, 59, 999);

      plansQuery.andWhere('qp.created_dt BETWEEN :from AND :to', {
        from,
        to,
      });
      countQuery.andWhere('qp.created_dt BETWEEN :from AND :to', {
        from,
        to,
      });
    }

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
    const userIds = Array.from(new Set(plans.map((p) => p.created_by))).filter(
      Boolean,
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

    this.messageService.setMessage(
      'Berhasil memuat semua plan QC di lokasi Anda.',
    );

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
      return;
    }

    // Soft delete + update status menjadi 'Deleted'
    await this.qcPlanRepo
      .createQueryBuilder()
      .update(QcPlan)
      .set({ status: 'Deleted', deleted_at: () => 'CURRENT_TIMESTAMP' })
      .where('location_id = :locationId AND status = :status', {
        locationId: user.locationId,
        status: 'New Data',
      })
      .execute();

    this.messageService.setMessage(
      `Semua QC Plan dengan status 'New Data' untuk lokasi ${user.locationId} berhasil dihapus.`,
    );
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

    await this.qcPlanRepo
      .createQueryBuilder()
      .restore()
      .where('location_id = :locationId', { locationId: user.locationId })
      .andWhere('deleted_at IS NOT NULL')
      .execute();

    this.messageService.setMessage(
      `Semua QC Plan untuk lokasi ${user.locationId} berhasil direstore.`,
    );
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
      .set({ status: 'Deleted', deleted_at: () => 'CURRENT_TIMESTAMP' })
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
  }

  /** Memberikan Catatan Terhadap QC List Plan */
  async updatePlanNotes(qcId: string, notes: string) {
    const plan = await this.qcPlanRepo.findOne({ where: { qc_id: qcId } });
    if (!plan) throw new Error(`QC Plan dengan qc_id ${qcId} tidak ditemukan`);

    plan.notes = notes;
    await this.qcPlanRepo.save(plan);
    this.messageService.setMessage(
      `QC Plan dengan BATCH ID ${qcId} diberikan catatan.`,
    );
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
    const existingPlanIds = await this.qcPlanRepo
      .createQueryBuilder('plan')
      .select('plan.qc_id')
      .where('plan.location_id = :loc', { loc: user.locationId })
      .getMany();

    const existingRecordIds = await this.qcRecordRepo
      .createQueryBuilder('rec')
      .select('rec.qc_id')
      .where('rec.location_id = :loc', { loc: user.locationId })
      .getMany();

    const existingPlanSet = new Set(existingPlanIds.map((p) => p.qc_id));
    const existingRecordSet = new Set(existingRecordIds.map((r) => r.qc_id));

    /** ------------------------------------------------------------------
     * Step 4: Identifikasi duplikat batch_id di dalam file Excel itu sendiri*/
    const excelSeen = new Set();
    const duplicateExcelIds = new Set();

    rows.forEach((row) => {
      let qcId = row['batch_id'] || null;
      if (!qcId) return;

      qcId = qcId.replace(/\s+/g, '');
      if (excelSeen.has(qcId)) {
        duplicateExcelIds.add(qcId);
      } else {
        excelSeen.add(qcId);
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
      if (!qcId) {
        skippedMissingBatch++;
        continue;
      }

      qcId = qcId.replace(/\s+/g, '');

      /** --------------------------------------------------------------
       * CEK URUTAN DUPLIKAT */

      // 1️ Duplicate in Excel (should be checked first)
      if (processedExcelIds.has(qcId)) {
        skippedDuplicateExcel++;
        continue;
      }
      processedExcelIds.add(qcId);

      // 2️ Duplicate in qc_plan
      if (existingPlanSet.has(qcId)) {
        skippedDuplicatePlan++;
        continue;
      }

      // 3️ Duplicate in qc_record
      if (existingRecordSet.has(qcId)) {
        skippedDuplicateRecord++;
        continue;
      }

      /** --------------------------------------------------------------
       * Step 9: Cari template berdasarkan SIZE saja*/
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
        sequence_no: row['sequence_no'] ?? null,
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

    return result;
  }

  /** Export QC Plan XLSX */
  public async exportQcPlans(): Promise<{ filename: string; buffer: Buffer }> {
    // 1. Ambil semua QC Plan
    const plans: QcPlan[] = await this.qcPlanRepo.find({
      relations: ['qc_template', 'location'],
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

    return { filename, buffer };
  }

  /** Export QC Plan Header Only (XLSX) */
  public async exportQcPlansHeaderOnly() {
    const buffer = this.sheetService.exportQcPlanHeaderOnly();
    const filename = 'QC_Plan_Template.xlsx';
    this.messageService.setMessage('Berhasil mengekspor template QC Plan.');
    return { filename, buffer };
  }
}
