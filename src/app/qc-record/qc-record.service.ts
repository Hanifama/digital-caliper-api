import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';

import { v4 as uuidv4 } from 'uuid';

import { MessageService } from '../message/message.service';
// import { NotificationService } from '../notification/notification.service';

import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { QcRecord } from '../qc-template/entity/qc-record.entity';
import { QcData } from '../qc-template/entity/qc-data.enity';
import { QcTemplateData } from '../qc-template/entity/qc-template-data.entity';
import { QcPlan } from '../qc-template/entity/qc-plan.entity';

import { StartProcessingDto } from './dto/start-processing.dto';
import { AddQcRecordTablesDto } from './dto/create-qc-data.dto';
import { QcRecordGroupedResult } from './interfaces/groupedRecord';
import { ProductTypeDataMapping } from '../product/entity/product-type-data-mapping.entity';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { Size } from '../size/entity/size.entity';
import { User } from '../auth/entitities/user.entity';
import { QcTemplate } from '../qc-template/entity/qc-template.entity';

@Injectable()
export class QcRecordService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(ProductTypeData)
    private productTypeDataRepo: Repository<ProductTypeData>,

    @InjectRepository(ProductTypeDataMapping)
    private readonly productTypeDataMappingRepo: Repository<ProductTypeDataMapping>,

    @InjectRepository(QcPlan)
    private readonly qcPlanRepo: Repository<QcPlan>,

    @InjectRepository(QcRecord)
    private readonly qcRecordRepo: Repository<QcRecord>,

    @InjectRepository(QcData)
    private readonly qcDataRepo: Repository<QcData>,

    @InjectRepository(QcTemplateData)
    private readonly qcTemplateDataRepo: Repository<QcTemplateData>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(Size)
    private readonly sizeRepo: Repository<Size>,

    private readonly messageService: MessageService,
    // private readonly notificationService: NotificationService,
  ) {}

  /** Get ALl history record QC Record */
  async getAllQcRecordHistory(
    page: number = 1,
    limit: number = 10,
    search?: string,
    fileName?: string,
    from_date?: string,
    end_date?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    const recordsQuery = this.qcRecordRepo
      .createQueryBuilder('qc')
      .leftJoinAndSelect('qc.qc_template', 'template')
      .leftJoinAndSelect('qc.location', 'loc');

    const countQuery = this.qcRecordRepo
      .createQueryBuilder('qc')
      .leftJoin('qc.qc_template', 'template')
      .leftJoin('qc.location', 'loc');

    // Filter pencarian
    if (search && search.trim() !== '' && search !== '{{search}}') {
      const trimmed = search.trim();
      const searchText = `%${trimmed.toLowerCase()}%`;
      const searchNumber = Number(trimmed);

      if (!isNaN(searchNumber) && /^\d+$/.test(trimmed)) {
        // Kalau input murni angka, cari berdasarkan sequence_no
        recordsQuery.andWhere('qc.sequence_no = :searchNumber', {
          searchNumber,
        });
        countQuery.andWhere('qc.sequence_no = :searchNumber', { searchNumber });
      } else {
        // Kalau input berupa teks, cari di qc_id, template_name, atau status
        recordsQuery.andWhere(
          '(LOWER(qc.qc_id) LIKE :searchText OR LOWER(template.name) LIKE :searchText OR LOWER(qc.status) LIKE :searchText)',
          { searchText },
        );
        countQuery.andWhere(
          '(LOWER(qc.qc_id) LIKE :searchText OR LOWER(template.name) LIKE :searchText OR LOWER(qc.status) LIKE :searchText)',
          { searchText },
        );
      }
    }

    // Filter file_name
    if (fileName && fileName.trim() !== '') {
      const fileNameText = `%${fileName.trim().toLowerCase()}%`;
      recordsQuery.andWhere('LOWER(qc.file_name) LIKE :fileNameText', {
        fileNameText,
      });
      countQuery.andWhere('LOWER(qc.file_name) LIKE :fileNameText', {
        fileNameText,
      });
    }

    // Filter tanggal
    if (from_date && end_date) {
      const from = new Date(from_date);
      const to = new Date(end_date);
      to.setHours(23, 59, 59, 999);

      recordsQuery.andWhere('qc.created_dt BETWEEN :from AND :to', {
        from,
        to,
      });
      countQuery.andWhere('qc.created_dt BETWEEN :from AND :to', { from, to });
    }

    // Filter agar hanya status selain Processing
    recordsQuery.andWhere('qc.status IN (:...statuses)', {
      statuses: ['Done', 'Canceled'],
    });
    countQuery.andWhere('qc.status IN (:...statuses)', {
      statuses: ['Done', 'Canceled'],
    });

    // Order + pagination
    recordsQuery
      .orderBy('qc.sequence_no', 'ASC')
      .addOrderBy('qc.created_dt', 'DESC')
      .offset(offset)
      .limit(limit);

    const [records, totalData] = await Promise.all([
      recordsQuery.getMany(),
      countQuery.getCount(),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    // Ambil qc_ids
    const qcIds = records.map((r) => r.qc_id);

    // Ambil invalid_data
    let invalidMap = new Map<string, number>();

    if (qcIds.length > 0) {
      const invalidDataCounts = await this.qcDataRepo
        .createQueryBuilder('qd')
        .select('qd.qc_id', 'qc_id')
        .addSelect('COUNT(*)', 'invalid_count')
        .where('qd.qc_id IN (:...qcIds)', { qcIds })
        .andWhere('qd.status = :status', { status: 'Not Passed' })
        .groupBy('qd.qc_id')
        .getRawMany();

      invalidMap = new Map(
        invalidDataCounts.map((item) => [
          item.qc_id,
          parseInt(item.invalid_count, 10),
        ]),
      );
    }

    // Ambil semua user_id dari created_by
    const userIds = Array.from(
      new Set(records.map((r) => r.created_by)),
    ).filter(Boolean);

    let userMap = new Map<string, string>();
    if (userIds.length > 0) {
      const users = await this.userRepo
        .createQueryBuilder('u')
        .select(['u.user_id', 'u.name'])
        .where('u.user_id IN (:...userIds)', { userIds })
        .getMany();

      userMap = new Map(users.map((u) => [u.user_id, u.name]));
    }

    // Format hasil
    const result = records.map((r) => ({
      qc_id: r.qc_id,
      qc_template_id: r.qc_template_id,
      qc_template_name: r.qc_template?.name || '-',
      template_profile: r.qc_template?.profile || '-',
      template_std_dimention: r.qc_template?.std_dimention || '-',
      template_brand_merek: r.qc_template?.brand_merek || '-',
      template_specification: r.qc_template?.specification || '-',
      location_id: r.location_id || '-',
      location_name: r.location?.name || '-',
      status: r.status,
      status_overall: r.status_overall,
      invalid_data: invalidMap.get(r.qc_id) || 0,
      sequence_no: r.sequence_no,
      file_name: r.file_name,
      size: r.size,
      created_by: r.created_by,
      created_by_name: userMap.get(r.created_by) || '-',
      start_date: r.start_dt,
      finish_date: r.created_dt,
      created_dt: r.created_dt,
      updated_dt: r.updated_dt,
    }));

    this.messageService.setMessage('Berhasil memuat histori QC.');

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

  /** Get Deyaol history record QC Record */
  async getHistoryDetailRecord(qcId: string): Promise<any> {
    if (!qcId) {
      throw new BadRequestException('qc_id harus diberikan.');
    }

    // Ambil semua data qc_data untuk qc_id tertentu
    const qcDataRecords = await this.qcDataRepo
      .createQueryBuilder('qd')
      .where('qd.qc_id = :qcId', { qcId })
      .orderBy('qd.qc_data_id', 'ASC')
      .getMany();

    // Hitung valid dan invalid
    const invalidCount = qcDataRecords.filter(
      (r) => r.status === 'Not Passed',
    ).length;
    const validCount = qcDataRecords.filter(
      (r) => r.status === 'Passed',
    ).length;

    // Format hasil
    const result = qcDataRecords.map((r) => ({
      qc_data_id: r.qc_data_id,
      qc_id: r.qc_id,
      input_code: r.input_code,
      input_value: r.input_value,
      err_tolerance: r.err_tolerance,
      status: r.status,
      notified: r.notified,
      position: r.position,
    }));

    this.messageService.setMessage(
      `Berhasil memuat summary record QC ${qcId}.`,
    );

    return {
      meta: {
        invalid_data: invalidCount,
        valid_data: validCount,
        total_data: qcDataRecords.length,
      },
      data: result,
    };
  }

  /** Start Status QC Record */
  @Transactional()
  async startProcessingFromPlan(dto: StartProcessingDto, userId: string) {
    const { qc_id, no_seq, status } = dto;
    const sequence_no = no_seq;

    if (!qc_id || !sequence_no) {
      throw new BadRequestException('qc_id dan no_seq wajib dikirim.');
    }

    /** 1. Ambil location_id berdasar user */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'User tidak memiliki location_id. Tidak bisa memulai QC Record.',
      );
    }

    const location_id = user.locationId;

    /** 2. Ambil QC Plan berdasarkan:
     * qc_id + sequence_no + location_id
     */
    const plan = await this.qcPlanRepo.findOne({
      where: {
        qc_id,
        sequence_no,
        location_id,
      },
    });

    if (!plan) {
      throw new BadRequestException(
        `QC Plan tidak ditemukan untuk qc_id "${qc_id}", seq "${sequence_no}", location "${location_id}".`,
      );
    }

    /** 3. Cek apakah QC Record sudah ada */
    const existingRecord = await this.qcRecordRepo.findOne({
      where: {
        qc_id,
        sequence_no,
        location_id,
      },
    });

    if (existingRecord) {
      throw new BadRequestException(
        `QC Record untuk qc_id "${qc_id}" seq "${sequence_no}" location "${location_id}" sudah ada.`,
      );
    }

    /** 4. Create QC Record dari QC Plan */
    const newRecord = this.qcRecordRepo.create({
      qc_id: plan.qc_id,
      qc_template_id: plan.qc_template_id,
      location_id: plan.location_id,
      sequence_no: plan.sequence_no,

      size: plan.size,
      product: plan.product,
      specifications: plan.specifications,
      dimension: plan.dimension,
      profile: plan.profile,
      brand_merek: plan.brand_merek,
      notes: plan.notes,
      std_grad: plan.std_grad,
      kgm_nominal: plan.kgm_nominal,
      campaign_no: plan.campaign_no,
      file_name: plan.file_name,
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
      h: plan.h,
      b: plan.b,
      thicknees_web: plan.thicknees_web,
      thicknes_flange: plan.thicknes_flange,
      pcs: plan.pcs,
      spec: plan.spec,
      ce: plan.ce,
      finish_temp: plan.finish_temp,
      charging_time: plan.charging_time,
      discharging_time: plan.discharging_time,
      process_time: plan.process_time,
      remarks: plan.remarks,

      created_by: userId,
      created_dt: new Date(),
      start_dt: new Date(),
      status_overall: status || 'Processing',
    });

    await this.qcRecordRepo.save(newRecord);

    /** 5. Update status QC Plan */
    plan.status = status || 'Processing';
    await this.qcPlanRepo.save(plan);

    /** 6. Message sukses */
    this.messageService.setMessage(
      `QC Plan ${qc_id} (seq: ${plan.sequence_no}) berstatus ${plan.status}.`,
    );

    return {
      qc_id,
      sequence_no: plan.sequence_no,
      location_id: plan.location_id,
      status: plan.status,
    };
  }

  /** Create QC Record */
  @Transactional()
  async createQcRecordData(dto: AddQcRecordTablesDto, userId: string) {
    let {
      qc_id,
      qc_template_id,
      no_seq,
      basic,
      default: defaultData,
      data,
    } = dto;
    let record: QcRecord | null = null;

    const sequence_no = no_seq;

    const user = await this.userRepo.findOne({ where: { user_id: userId } });
    if (!user?.locationId) {
      throw new BadRequestException('User belum memiliki lokasi terdaftar.');
    }
    const location_id = user.locationId;

    // Tahap 1: Validasi & inisialisasi record
    if (!qc_id) {
      if (!qc_template_id) {
        throw new BadRequestException(
          'qc_template_id wajib diisi saat membuat QC baru.',
        );
      }

      const templateExists = await this.qcTemplateRepo.findOne({
        where: { qc_template_id },
        relations: ['productType'],
      });
      if (!templateExists) {
        throw new BadRequestException(
          `QC Template dengan ID ${qc_template_id} tidak ditemukan.`,
        );
      }

      qc_id = `${Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 10),
      ).join('')}`;

      record = this.qcRecordRepo.create({
        qc_id,
        qc_template_id,
        status_overall: 'Processing',
        status: 'Processing',
      });
      await this.qcRecordRepo.save(record);
    } else {
      record = await this.qcRecordRepo.findOne({
        where: {
          qc_id,
          location_id: user.locationId,
          sequence_no,
        },
      });
      if (!record) {
        throw new BadRequestException(
          `QC Record dengan Batch Id ${qc_id} belum diproses.`,
        );
      }

      if (record.status === 'Done' || record.status_overall !== 'Processing') {
        throw new BadRequestException(
          `QC dengan Batch Id ${qc_id} sudah diperiksa.`,
        );
      }
      record.created_dt = new Date();
    }

    // Tahap 2: Update data basic & default
    if (basic) {
      record.length = basic.length ?? record.length;
      record.weight = basic.weight ?? record.weight;
      record.kg_m = basic.actual ?? record.kg_m;
      record.percent_deviasi = basic.percentDeviasi ?? record.percent_deviasi;
      record.kgm_nominal = basic.nominal ?? record.kgm_nominal;
      record.cow = basic.cow ?? record.cow;
      record.os = basic.os ?? record.os;
      record.radius = basic.radius ?? record.radius;
    }

    record.brand_merek = dto['brand_merek'] ?? record.brand_merek;
    record.specifications = dto['specifications'] ?? record.specifications;
    record.dimension = dto['std_dimention'] ?? record.dimension;
    record.profile = dto['profile'] ?? record.profile;

    if (defaultData) {
      record.created_by = defaultData.pic ?? record.created_by;
      record.charging_time = defaultData.start
        ? new Date(defaultData.start)
        : record.charging_time;
      record.discharging_time = defaultData.finish
        ? new Date(defaultData.finish)
        : record.discharging_time;
      record.lot = defaultData.lot ?? record.lot;
      record.bloom_number = defaultData.bloom ?? record.bloom_number;
      record.heat_number = defaultData.heat ?? record.heat_number;
      record.location_id = location_id;
      record.created_dt = new Date();
    }

    // Tahap 3: Ambil template dan proses field QC Data
    const templateDataList = await this.qcTemplateDataRepo.find({
      where: { qc_template_id: record.qc_template_id },
    });

    if (!templateDataList.length) {
      throw new BadRequestException(
        `Tidak ditemukan data field untuk qc_template_id "${record.qc_template_id}".`,
      );
    }

    const templateMap = new Map(templateDataList.map((t) => [t.input_code, t]));

    // Ambil semua productTypeData
    const productTypeDataList = await this.productTypeDataRepo.find({
      where: { prodtype_id: record.product },
    });
    const productTypeMap = new Map(
      productTypeDataList.map((item) => [item.code, item]),
    );

    const processedFields: Array<{
      qc_data_id: string;
      qc_id: string;
      sequence_no: number;
      location_id: string;
      input_code: string;
      input_value: number;
      err_tolerance: number;
      status: string;
      notified: string;
      position: string;
      min_tolerance: number;
      max_tolerance: number;
    }> = [];

    const warnings: string[] = [];
    let checkedCount = 0;
    let uncheckedCount = 0;
    let checkedPassedCount = 0;
    let checkedNotPassedCount = 0;

    // --- VALIDASI BARU: Group by position dan check minimal satu field terisi ---
    // Handle case ketika data tidak ada atau undefined
    if (!data || !Array.isArray(data)) {
      data = [];
    }

    const positionGroups = new Map<string, any[]>();

    // Group data by position dengan validasi
    data.forEach((table) => {
      // Validasi struktur table
      if (!table || typeof table !== 'object') {
        warnings.push('Struktur data table tidak valid');
        return;
      }

      if (!table.position) {
        warnings.push('Table tidak memiliki property position');
        return;
      }

      if (!Array.isArray(table.fields)) {
        warnings.push(`Table ${table.position} tidak memiliki fields array`);
        return;
      }

      // Pastikan positionGroups selalu memiliki array untuk position ini
      if (!positionGroups.has(table.position)) {
        positionGroups.set(table.position, []);
      }

      // Hanya push fields yang valid
      const validFields = table.fields.filter(
        (field) => field && typeof field === 'object' && field.code,
      );

      // Gunakan optional chaining untuk menghindari error
      positionGroups.get(table.position)?.push(...validFields);
    });

    // Validasi: setiap position minimal ada satu field yang diisi (tidak semua null)
    positionGroups.forEach((fields, position) => {
      const filledFields = fields.filter(
        (field) =>
          field.input_value !== null &&
          field.input_value !== undefined &&
          typeof field.input_value === 'number' &&
          !isNaN(field.input_value),
      );

      if (filledFields.length === 0) {
        warnings.push(
          `Position ${position}: minimal satu field (H/C/T) harus diisi`,
        );
      }
    });

    // Jika ada warning validasi position, throw exception
    if (warnings.length > 0) {
      throw new BadRequestException({
        message: warnings,
      });
    }

    // --- BASIC QC CHECK ---
    if (basic) {
      // 1. Radius (harus sama persis)
      if (basic.radius !== undefined && basic.radius !== null) {
        const t = templateMap.get('radius');
        if (t) {
          const status =
            basic.radius === t.nominal_tolerance ? 'Passed' : 'Not Passed';
          processedFields.push({
            qc_data_id: `QCD-${uuidv4().replace(/-/g, '').slice(0, 20)}`,
            qc_id: record.qc_id,
            sequence_no: record.sequence_no,
            location_id: record.location_id,
            input_code: 'radius',
            input_value: basic.radius,
            err_tolerance: status === 'Not Passed' ? basic.radius : 0,
            status,
            notified: 'Yes',
            position: t.position ?? 'Basic',
            min_tolerance: t.min_tolerance,
            max_tolerance: t.max_tolerance,
          });
          status === 'Passed' ? checkedPassedCount++ : checkedNotPassedCount++;
          checkedCount++;
        }
      }

      // 2. OS (> nominal_tolerance = Not Passed)
      if (basic.os !== undefined && basic.os !== null) {
        const t = templateMap.get('os');
        if (t) {
          const status =
            basic.os > t.nominal_tolerance ? 'Not Passed' : 'Passed';
          processedFields.push({
            qc_data_id: `QCD-${uuidv4().replace(/-/g, '').slice(0, 20)}`,
            qc_id: record.qc_id,
            sequence_no: record.sequence_no,
            location_id: record.location_id,
            input_code: 'os',
            input_value: basic.os,
            err_tolerance: status === 'Not Passed' ? basic.os : 0,
            status,
            notified: 'Yes',
            position: t.position ?? 'Basic',
            min_tolerance: t.min_tolerance,
            max_tolerance: t.max_tolerance,
          });
          status === 'Passed' ? checkedPassedCount++ : checkedNotPassedCount++;
          checkedCount++;
        }
      }

      // 3. CoW (> actual_tolerance = Not Passed)
      if (basic.cow !== undefined && basic.cow !== null) {
        const t = templateMap.get('cow');
        if (t) {
          const status =
            basic.cow > t.actual_tolerance ? 'Not Passed' : 'Passed';
          processedFields.push({
            qc_data_id: `QCD-${uuidv4().replace(/-/g, '').slice(0, 20)}`,
            qc_id: record.qc_id,
            sequence_no: record.sequence_no,
            location_id: record.location_id,
            input_code: 'cow',
            input_value: basic.cow,
            err_tolerance: status === 'Not Passed' ? basic.cow : 0,
            status,
            notified: 'Yes',
            position: t.position ?? 'Basic',
            min_tolerance: t.min_tolerance,
            max_tolerance: t.max_tolerance,
          });
          status === 'Passed' ? checkedPassedCount++ : checkedNotPassedCount++;
          checkedCount++;
        }
      }

      // 4. Nominal (range min-max)
      if (basic.nominal !== undefined && basic.nominal !== null) {
        const t = templateMap.get('unit.weight');
        if (t) {
          const status =
            basic.nominal >= t.min_tolerance && basic.nominal <= t.max_tolerance
              ? 'Passed'
              : 'Not Passed';
          processedFields.push({
            qc_data_id: `QCD-${uuidv4().replace(/-/g, '').slice(0, 20)}`,
            qc_id: record.qc_id,
            sequence_no: record.sequence_no,
            location_id: record.location_id,
            input_code: 'nominal',
            input_value: basic.nominal,
            err_tolerance: status === 'Not Passed' ? basic.nominal : 0,
            status,
            notified: 'Yes',
            position: t.position ?? 'Basic',
            min_tolerance: t.min_tolerance,
            max_tolerance: t.max_tolerance,
          });
          status === 'Passed' ? checkedPassedCount++ : checkedNotPassedCount++;
          checkedCount++;
        }
      }
    }

    // --- PROCESS DATA ---
    for (const table of data) {
      // Skip table yang invalid
      if (!table || !Array.isArray(table.fields)) {
        continue;
      }

      for (const field of table.fields) {
        // Skip field yang tidak valid
        if (!field || !field.code) {
          continue;
        }

        // Skip field yang tidak diisi (null/undefined) atau bukan number
        if (
          field.input_value === null ||
          field.input_value === undefined ||
          typeof field.input_value !== 'number' ||
          isNaN(field.input_value)
        ) {
          continue;
        }

        const template = templateMap.get(field.code);
        if (!template) {
          warnings.push(`Field "${field.code}" tidak ada di template.`);
          continue;
        }

        const productTypeData = productTypeMap.get(field.code);
        const isTolerance = productTypeData?.is_tolerance ?? false;

        let errTolerance = 0;
        let status = 'Passed';

        if (!isTolerance) {
          // Field tidak diperiksa
          uncheckedCount++;
          status = 'Not Checked';
          errTolerance = 0;
        } else {
          // Field diperiksa
          checkedCount++;

          if (
            field.input_value < template.min_tolerance ||
            field.input_value > template.max_tolerance
          ) {
            errTolerance = field.input_value;
            status = 'Not Passed';
            checkedNotPassedCount++;
          } else {
            checkedPassedCount++;
          }
        }

        processedFields.push({
          qc_data_id: `QCD-${uuidv4().replace(/-/g, '').slice(0, 20)}`,
          qc_id: record.qc_id,
          sequence_no: record.sequence_no,
          location_id: record.location_id,
          input_code: field.code,
          input_value: field.input_value,
          err_tolerance: errTolerance,
          status,
          notified: 'Yes',
          position: table.position,
          min_tolerance: template.min_tolerance,
          max_tolerance: template.max_tolerance,
        });
      }
    }

    // Jika ada warning validasi data, hentikan proses
    if (warnings.length > 0) {
      throw new BadRequestException({
        message: warnings,
      });
    }

    // Tahap 4: Simpan data hasil QC ke database
    if (processedFields.length > 0) {
      await this.qcDataRepo.save(
        processedFields.map(
          ({ min_tolerance, max_tolerance, ...entityOnly }) => entityOnly,
        ),
      );
    }

    // Tahap 41: Simpan record ke database
    await this.qcRecordRepo.save(record);

    // Tahap 5: Update status akhir QC Record
    const passedCount = processedFields.filter(
      (f) => f.status === 'Passed',
    ).length;
    const notPassedCount = processedFields.filter(
      (f) => f.status === 'Not Passed',
    ).length;

    // Jika tidak ada field yang diproses, status overall = "Not Passed"
    const statusOverall =
      processedFields.length === 0
        ? 'Not Passed'
        : notPassedCount > 0
          ? 'Not Passed'
          : 'Passed';

    record.status_overall = statusOverall;
    record.status = 'Done';
    await this.qcRecordRepo.save(record);

    record = await this.qcRecordRepo
      .createQueryBuilder('qc')
      .leftJoinAndSelect('qc.location', 'loc')
      .where('qc.qc_id = :qc_id', { qc_id: record.qc_id })
      .getOne();

    if (!record) {
      throw new Error('Kesalahan server periksa lagi.');
    }

    if (record.status === 'Done') {
      await this.qcPlanRepo
        .createQueryBuilder()
        .update(QcPlan)
        .set({ status: 'Done' })
        .where('qc_id = :qcId', { qcId: qc_id })
        .execute();
    }

    // Tahap 6: Kirim pesan sukses & response akhir
    this.messageService.setMessage(
      `QC Data untuk ${qc_id} berhasil direkam (${statusOverall}).`,
    );

    return {
      qc_id,
      is_new: !dto.qc_id,
      status: 'Done',
      status_overall: statusOverall,
      total_fields: processedFields.length,
      checked_fields: checkedCount,
      unchecked_fields: uncheckedCount,
      passed_checked_fields: checkedPassedCount,
      not_passed_checked_fields: checkedNotPassedCount,
      warnings,
    };
  }

  /** Detail QC Record Gruped*/
  async getQcRecordDetail(
    qcId: string,
    no_seq: number,
    userId: string,
  ): Promise<QcRecordGroupedResult> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    if (!user?.locationId) {
      throw new BadRequestException(
        'User tidak memiliki location_id, tidak dapat mengambil detail QC.',
      );
    }

    const location_id = user.locationId;

    const sequence_no = no_seq;
    // Fetch QC record and its related entities
    const record = await this.qcRecordRepo.findOne({
      where: {
        qc_id: qcId,
        sequence_no,
        location_id,
      },
      relations: ['qc_template', 'datas'],
    });

    if (!record) {
      throw new NotFoundException(`QC Record ${qcId} tidak ditemukan`);
    }

    const template = record.qc_template;

    // Step 1: Ambil semua data yang diperlukan (sama seperti getTemplate)
    const templateDatas = await this.qcTemplateDataRepo.find({
      where: { qc_template_id: template.qc_template_id },
    });

    const productFields = await this.productTypeDataRepo.find({
      where: { prodtype_id: template.prodtype_id },
    });

    const productMappings = await this.productTypeDataMappingRepo.find({
      where: { prodtype_id: template.prodtype_id },
    });

    // Step 2: Map existing QC record data for quick lookup
    const qcDataMap = new Map(record.datas.map((d) => [d.input_code, d]));

    // console.log(
    //   '=== QC RECORD DATAS ===',
    //   record.datas.map((d) => ({
    //     code: d.input_code,
    //     value: d.input_value,
    //     status: d.status,
    //   })),
    // );

    let template_size_name = '';
    if (template.size_id) {
      const sizeRecord = await this.sizeRepo.findOne({
        where: { size_id: template.size_id },
      });
      template_size_name = sizeRecord?.name || '';
    }

    // Step 3: Prepare grouped result container
    const grouped: QcRecordGroupedResult = {
      qc_id: record.qc_id,
      qc_template_id: record.qc_template_id,
      template_prodtype_id: template.prodtype_id,
      template_profile: template.profile,
      template_name: template.name,
      template_size_id: template.size_id,
      template_size_name: template_size_name,
      template_std_dimention: template.std_dimention,
      template_brand_merek: template.brand_merek,
      template_specification: template.specification,
      status: record.status,
      status_overall: record.status_overall,
      created_dt: record.created_dt,
      table: [],
      FormRight: [],
      basic: [],
      default: [],
    };

    const tempTable: Record<string, any[]> = {};
    const formRight: any[] = [];

    // Step 4: Group mappings by form_right name
    const mappingsByFormRight = new Map<string, Set<string>>();
    productMappings.forEach((mapping) => {
      if (!mappingsByFormRight.has(mapping.code)) {
        mappingsByFormRight.set(mapping.code, new Set());
      }
      mappingsByFormRight.get(mapping.code)!.add(mapping.position);
    });

    // Step 5: Group template FormRight by name
    const templateFormRights = new Map<string, any>();
    templateDatas
      .filter((td) => td.position === 'FormRight')
      .forEach((td) => {
        templateFormRights.set(td.group_name, td);
      });

    // Step 6: Process ALL H/C/T fields dari product master (bukan hanya yang ada di template)
    const allHCTFields = productFields.filter((item) =>
      ['H', 'C', 'T'].includes(item.code[0]),
    );

    // Step 7: Group H/C/T fields by position
    allHCTFields.forEach((item) => {
      const position = item.position || 'default';

      // Cari template data untuk field ini
      const templateData = templateDatas.find(
        (td) => td.input_code === item.code,
      );
      const qcData = qcDataMap.get(item.code);

      let enabled = templateData?.enabled ?? false;
      let selected = !!templateData;

      // Jika ini H/C/T field dan table position enabled, maka field juga enabled
      if (templateData?.group_name === 'table') {
        const tablePositionEnabled = templateDatas.find(
          (td) => td.position === position && td.group_name === 'table',
        )?.enabled;
        if (tablePositionEnabled) {
          enabled = true;
          selected = true;
        }
      }

      const entry = {
        input_code: item.code,
        label: item.label,
        isFormula: item.is_formula,
        formula: item.formula,
        input_value: qcData?.input_value ?? null,
        err_tolerance: qcData?.err_tolerance ?? null,
        minTolerance: templateData?.min_tolerance ?? null,
        maxTolerance: templateData?.max_tolerance ?? null,
        t_lt_50_Tolerance: templateData?.t_lt_50_tolerance ?? null,
        nominalTolerance: templateData?.nominal_tolerance ?? null,
        t_gt_50_Tolerance: templateData?.t_gt_50_tolerance ?? null,
        status: qcData?.status ?? 'Not Checked',
        position: position,
        isTable: true,
        input_type: templateData?.input_type || item.type,
        is_readonly: item.is_readonly ?? false,
        isTolerance: item.is_tolerance ?? false,
        enabled: enabled,
        selected: selected,
        order_numb: templateData?.order_numb ?? 0,
      };

      if (!tempTable[position]) tempTable[position] = [];
      tempTable[position].push(entry);
    });

    // Step 8: Process TABLE POSITIONS dari template (yang mungkin tidak ada di product master)
    templateDatas.forEach((templateData) => {
      if (templateData.group_name === 'table' && templateData.position) {
        // Pastikan position ada di tempTable meskipun tidak ada fields
        if (!tempTable[templateData.position]) {
          tempTable[templateData.position] = [];
        }
      }
    });

    // Step 9: Convert tempTable to grouped.table dengan sorting HCT + order
    for (const pos in tempTable) {
      // Sort fields by H/C/T order + orderNumb
      tempTable[pos].sort((a, b) => {
        const order = ['H', 'C', 'T'];
        const orderDiff =
          order.indexOf(a.input_code[0]) - order.indexOf(b.input_code[0]);
        if (orderDiff !== 0) return orderDiff;

        const orderNumbA = a.order_numb ?? 0;
        const orderNumbB = b.order_numb ?? 0;
        return orderNumbA - orderNumbB;
      });

      // Cek apakah table position ini enabled di template
      const tablePositionEnabled =
        templateDatas.find(
          (td) => td.position === pos && td.group_name === 'table',
        )?.enabled ?? false;

      grouped.table.push({
        name: pos,
        fields: tempTable[pos].map((f) => ({
          code: f.input_code,
          name: `${f.input_code[0]}(${pos})`,
          isTable: true,
          isFormula: f.isFormula,
          formula: f.formula,
          productType: template.name,
          enabled: f.enabled,
          selected: f.selected,
          minTolerance: f.minTolerance,
          t_lt_50_Tolerance: f.t_lt_50_Tolerance,
          nominalTolerance: f.nominalTolerance,
          t_gt_50_Tolerance: f.t_gt_50_Tolerance,
          maxTolerance: f.maxTolerance,
          sound: null,
          input_value: f.input_value,
          inputType: f.input_type,
          isReadonly: f.is_readonly,
          isTolerance: f.isTolerance,
          orderNumb: f.order_numb,
        })),
        enabled: tablePositionEnabled,
      });
    }

    // Step 10: Sort tables by position name
    grouped.table.sort((a, b) => a.name.localeCompare(b.name));

    // Step 11: Process FormRight data dengan struktur yang sama seperti template
    const formRightProductData = productFields.filter(
      (item) => item.position === 'FormRight',
    );

    // Group by FormRight name (untuk hindari duplikat)
    const formRightNames = new Set(
      formRightProductData.map((item) => item.label),
    );

    formRightNames.forEach((formRightName) => {
      // Cari template data untuk FormRight ini
      const templateFormRight = templateFormRights.get(formRightName);

      // Cari field di productTypeData untuk FormRight ini
      const formRightField = formRightProductData.find(
        (item) => item.label === formRightName,
      );

      const inputCode = formRightField?.code;
      const qcData = inputCode ? qcDataMap.get(inputCode) : null;

      // Dapatkan related positions dari product master mapping
      const relatedPositions = inputCode
        ? Array.from(mappingsByFormRight.get(inputCode) || new Set())
        : [];

      // Struktur FormRight yang sama dengan template
      const formRightEntry = {
        name: formRightName,
        enabled: templateFormRight?.enabled ?? false,
        tolerance: {
          min: templateFormRight?.min_tolerance ?? 0,
          t_lt_50: templateFormRight?.t_lt_50_tolerance ?? 0,
          nominal: templateFormRight?.nominal_tolerance ?? 0,
          t_gt_50: templateFormRight?.t_gt_50_tolerance ?? 0,
          max: templateFormRight?.max_tolerance ?? 0,
          actual: templateFormRight?.actual_tolerance ?? 0,
        },
        relatedTablePositions: relatedPositions,
      };

      formRight.push(formRightEntry);
    });

    // Step 12: Sort FormRight by name
    formRight.sort((a, b) => a.name.localeCompare(b.name));
    grouped.FormRight = formRight;

    // Step 13 & 14: Generate grup Basic dan Default secara dinamis dari productTypeData
    const basicFields = productFields.filter((f) => f.position === 'basic');
    const defaultFields = productFields.filter((f) => f.position === 'default');

    // Mapping otomatis dari productTypeData ke kolom record
    const recordFieldMapping: Record<string, keyof typeof record> = {
      length: 'length',
      weight: 'weight',
      'kgm.actual': 'kg_m',
      'percent.deviasi': 'percent_deviasi',
      'kgm.nominal': 'kgm_nominal',
      'radius.basic': 'radius',
      'os.basic': 'os',
      'cow.basic': 'cow',
      'pic.user': 'created_by',
      start: 'charging_time',
      finish: 'discharging_time',
      lot: 'lot',
      bloom: 'bloom_number',
      heat: 'heat_number',
      location: 'location_id',
    };

    // Fungsi dinamis buat ambil dari record
    const makeGroupFromRecord = (fields: any[]) => {
      return fields.map((field) => {
        const mappedKey = recordFieldMapping[field.code];
        const value = mappedKey ? record[mappedKey] : null;
        return {
          label: field.label,
          value,
          code: field.code,
        };
      });
    };

    grouped.basic = makeGroupFromRecord(basicFields);
    grouped.default = makeGroupFromRecord(defaultFields);

    this.messageService.setMessage(`Berhasil memuat QC Record ${qcId}`);
    return grouped;
  }
}
