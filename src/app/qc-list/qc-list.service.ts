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

@Injectable()
export class QcListService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(QcPlan)
    private readonly qcPlanRepo: Repository<QcPlan>,

    private readonly sheetService: SheetService,

    private readonly messageService: MessageService,
  ) {}

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

    plansQuery.orderBy('qp.created_dt', 'DESC').offset(offset).limit(limit);

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
    plansQuery.orderBy('qp.created_dt', 'DESC').offset(offset).limit(limit);

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

  /** Import QC Plan berdasarkan lokasi user */
  async importQcPlans(file: Express.Multer.File, userId: string) {
    // Step 1: Ambil user data
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      select: ['locationId', 'name', 'user_id'],
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'Pengguna belum memiliki lokasi yang terdaftar.',
      );
    }

    // Step 2: Baca data dengan chunking
    const rows: any[] = await this.sheetService.importQcPlanExcel(file);
    if (!rows.length) {
      throw new BadRequestException(
        'File Excel kosong atau format tidak sesuai.',
      );
    }

    console.log(`📊 Memproses ${rows.length} rows dari Excel`);

    // Step 3: Pre-fetch existing batch IDs dengan query yang lebih efisien
    const existingBatchIds = await this.qcPlanRepo
      .createQueryBuilder('plan')
      .select('plan.qc_id')
      .where('plan.location_id = :locationId', { locationId: user.locationId })
      .getMany();

    const existingIdsSet = new Set(existingBatchIds.map((b) => b.qc_id));

    // Step 4: Kumpulkan semua product-size combinations untuk batch query
    const productSizeCombinations = new Set(
      rows
        .filter((row) => row.product && row.size)
        .map((row) => `${row.product.toLowerCase()}|${row.size.toLowerCase()}`),
    );

    // Step 5: Batch query templates
    const productSizeArray = Array.from(productSizeCombinations).map((ps) => {
      const [product, size] = ps.split('|');
      return { product, size };
    });

    console.log(
      `🔍 Mencari template untuk ${productSizeArray.length} kombinasi product-size`,
    );

    const templates = await this.qcTemplateRepo
      .createQueryBuilder('template')
      .leftJoinAndSelect('template.size', 'size')
      .leftJoinAndSelect('size.productType', 'productType')
      .where('LOWER(productType.name) IN (:...products)', {
        products: productSizeArray.map((ps) => ps.product),
      })
      .andWhere('LOWER(size.name) IN (:...sizes)', {
        sizes: productSizeArray.map((ps) => ps.size),
      })
      .getMany();

    console.log(`✅ Ditemukan ${templates.length} template yang sesuai`);

    // Create lookup map untuk templates
    const templateMap = new Map();
    templates.forEach((template) => {
      const key = `${template.size.productType.name.toLowerCase()}|${template.size.name.toLowerCase()}`;
      templateMap.set(key, template);
    });

    // Step 6: Process data dengan chunking
    const BATCH_SIZE = 500;
    const plansToInsert: QcPlan[] = [];

    // COUNTER YANG BENAR
    let totalSuccessCount = 0; // <-- INI YANG DIPERBAIKI
    let skippedDueToMissingProduct = 0;
    let skippedDueToMissingSize = 0;
    let skippedDueToMissingTemplate = 0;
    let skippedDueToDuplicate = 0;
    let skippedDueToMissingBatch = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      // DEBUG: Log setiap 50 rows
      if (i % 50 === 0) {
        console.log(`🔧 Memproses row ${i + 1}/${rows.length}`);
      }

      const productName = row['product'] || null;
      const sizeName = row['size'] || null;

      if (!productName) {
        skippedDueToMissingProduct++;
        continue;
      }
      if (!sizeName) {
        skippedDueToMissingSize++;
        continue;
      }

      let qcId = row['batch_id'] || null;
      if (!qcId) {
        skippedDueToMissingBatch++;
        continue;
      }

      qcId = qcId.replace(/\s+/g, '');

      if (existingIdsSet.has(qcId)) {
        skippedDueToDuplicate++;
        continue;
      }

      // Cari template dari map
      const templateKey = `${productName.toLowerCase()}|${sizeName.toLowerCase()}`;
      const foundTemplate = templateMap.get(templateKey);

      if (!foundTemplate) {
        console.log(
          `❌ Template tidak ditemukan untuk: ${productName} - ${sizeName}`,
        );
        skippedDueToMissingTemplate++;
        continue;
      }

      const plan = this.qcPlanRepo.create({
        qc_id: qcId,
        qc_template_id: foundTemplate.qc_template_id,
        location_id: user.locationId,
        product: productName,
        size: sizeName,
        specifications: row['specifications'] ?? null,
        dimension: sizeName,
        sequence_no: row['sequence_no'] ?? null,
        std_grad: row['grade'] ?? null,
        kgm_nominal: row['kgm_nominal'] ?? null,
        brand_merek: row['brand_merek'] ?? null,
        status: 'New Data',
        created_by: user.user_id,
        created_dt: new Date(),
      });

      plansToInsert.push(plan);

      // Save per batch dan reset array untuk mengurangi memory usage
      if (plansToInsert.length >= BATCH_SIZE) {
        try {
          const savedPlans = await this.qcPlanRepo.save(plansToInsert);
          totalSuccessCount += savedPlans.length; // <-- TAMBAH KE TOTAL
          console.log(`💾 Menyimpan batch: ${savedPlans.length} records`);
          plansToInsert.length = 0;
        } catch (saveError) {
          console.error('❌ Error menyimpan batch:', saveError);
          throw saveError;
        }
      }
    }

    // Save sisa data
    if (plansToInsert.length > 0) {
      try {
        const savedPlans = await this.qcPlanRepo.save(plansToInsert);
        totalSuccessCount += savedPlans.length; // <-- TAMBAH KE TOTAL
        console.log(`💾 Menyimpan sisa: ${savedPlans.length} records`);
      } catch (saveError) {
        console.error('❌ Error menyimpan sisa data:', saveError);
        throw saveError;
      }
    }

    // Step 7: Return result dengan totalSuccessCount
    const result = {
      successCount: totalSuccessCount, // <-- PAKAI YANG INI
      skippedDueToMissingProduct,
      skippedDueToMissingSize,
      skippedDueToMissingTemplate,
      skippedDueToDuplicate,
      skippedDueToMissingBatch,
      totalProcessed: rows.length,
    };

    console.log(`📈 Hasil import:`, result);

    const message = `Import selesai: ${result.successCount} berhasil, ${result.skippedDueToDuplicate} duplikat, ${result.skippedDueToMissingTemplate} template tidak ditemukan.`;
    this.messageService.setMessage(message);

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
