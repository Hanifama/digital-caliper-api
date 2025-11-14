import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';

import { User } from '../auth/entitities/user.entity';
import { ProductType } from '../product/entity/product-type.entity';

import { MessageService } from 'src/app/message/message.service';

import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';

import { QcTemplate } from './entity/qc-template.entity';
import { QcTemplateData } from './entity/qc-template-data.entity';
import { ProductTypeData } from '../product/entity/product-type-data.entity';
import { QcTemplateMapping } from './entity/qc-template-data-mapping';

import { CreateQcTemplateDto } from './dto/create-qc-template.dto';
import { UpdateQcTemplateDto } from './dto/update-qc-template.dto';

import {
  FormRightGroup,
  GroupedTemplateData,
  ProductField,
  TableGroup,
} from './interfaces/template-grouped-data';
import { ProductTypeDataMapping } from '../product/entity/product-type-data-mapping.entity';
import { Size } from '../size/entity/size.entity';

@Injectable()
export class QcTemplateService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(ProductType)
    private readonly productTypeRepo: Repository<ProductType>,

    @InjectRepository(QcTemplate)
    private readonly qcTemplateRepo: Repository<QcTemplate>,

    @InjectRepository(QcTemplateData)
    private readonly qcTemplateDataRepo: Repository<QcTemplateData>,

    @InjectRepository(QcTemplateMapping)
    private readonly qcTemplateMappingRepo: Repository<QcTemplateMapping>,

    @InjectRepository(ProductTypeData)
    private readonly productTypeDataRepo: Repository<ProductTypeData>,

    @InjectRepository(ProductTypeDataMapping)
    private readonly productTypeDataMappingRepo: Repository<ProductTypeDataMapping>,

    @InjectRepository(Size)
    private readonly sizeRepo: Repository<Size>,

    private readonly messageService: MessageService,
  ) {}

  // Ambil semua Template (dengan pagination + params filter)
  public async getAllTemplates(
    page: number = 1,
    limit: number = 10,
    search?: string,
    prodtype_id?: string,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    const templatesQuery = this.qcTemplateRepo
      .createQueryBuilder('qt')
      .leftJoinAndSelect('qt.size', 's');

    const countQuery = this.qcTemplateRepo.createQueryBuilder('qt');

    // Filter search
    if (search && search.trim() !== '' && search !== '{{search}}') {
      templatesQuery.andWhere(
        '(qt.qc_template_id LIKE :search OR qt.profile LIKE :search OR qt.name LIKE :search)',
        { search: `%${search.trim()}%` },
      );
      countQuery.andWhere(
        '(qt.qc_template_id LIKE :search OR qt.profile LIKE :search OR qt.name LIKE :search)',
        { search: `%${search.trim()}%` },
      );
    }

    // Filter prodtype_id
    if (prodtype_id) {
      templatesQuery.andWhere('qt.prodtype_id = :prodtype_id', { prodtype_id });
      countQuery.andWhere('qt.prodtype_id = :prodtype_id', { prodtype_id });
    }

    templatesQuery
      .select([
        'qt.qc_template_id',
        'qt.prodtype_id',
        'qt.profile',
        'qt.std_dimention',
        'qt.brand_merek',
        'qt.specification',
        'qt.name',
        'qt.status',
        'qt.created_by',
        'qt.created_dt',
        'qt.updated_by',
        'qt.updated_dt',
        's.size_id',
        's.name',
      ])
      .orderBy('qt.created_dt', 'DESC')
      .offset(offset)
      .limit(limit);

    const [templates, totalData] = await Promise.all([
      templatesQuery.getRawMany(),
      countQuery.getCount(),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    const result = templates.map((t: any) => ({
      qc_template_id: t.qt_qc_template_id,
      prodtype_id: t.qt_prodtype_id,
      profile: t.qt_template_profile,
      std_dimention: t.qt_std_dimention,
      brand_merek: t.qt_brand_merek,
      specification: t.specification,
      name: t.qt_name,
      status: t.qt_status,
      created_by: t.qt_created_by,
      created_dt: t.qt_created_dt,
      updated_by: t.qt_updated_by,
      updated_dt: t.qt_updated_dt,
      size_id: t.s_size_id,
      size_name: t.s_name,
    }));

    this.messageService.setMessage('Berhasil memuat QC Template.');

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

  // Ambil detail Template (gruped)
  async getTemplateDataByTemplateId(
    qcTemplateId: string,
  ): Promise<GroupedTemplateData> {
    // Step 1: Ambil template dengan relations lengkap
    const template = await this.qcTemplateRepo.findOne({
      where: { qc_template_id: qcTemplateId },
      relations: ['datas', 'mappings'],
    });

    if (!template) {
      throw new NotFoundException(`Template ${qcTemplateId} tidak ditemukan`);
    }

    // Step 2: Ambil semua ProductTypeData berdasarkan prodtype_id template
    const productFields = await this.productTypeDataRepo.find({
      where: { prodtype_id: template.prodtype_id },
      relations: ['productType'],
    });

    const size = await this.sizeRepo.findOne({
      where: { prodtype_id: template.prodtype_id },
    });

    // Step 3: Ambil mapping data dari product master
    const productMappings = await this.productTypeDataMappingRepo.find({
      where: { prodtype_id: template.prodtype_id },
    });

    // Step 4: Index-kan template datas & mappings
    const templateDataMap = new Map(
      template.datas.map((d) => [d.input_code, d]),
    );
    const templateMappings = template.mappings || [];

    const grouped: GroupedTemplateData = {
      qc_template_id: template?.qc_template_id,
      template_name: template?.name,
      template_prodtype_id: template?.prodtype_id,
      template_prodtype_name: template?.profile, // renamed from product_name
      template_size_id: template?.size_id,
      template_size_name: size?.name,
      template_std_dimention: template?.std_dimention, // renamed from std_grade
      template_brand_merek: template?.brand_merek, // new field
      template_specification: template?.specification, // new field
      template_created_by: template?.created_by,
      template_created_dt: template?.created_dt?.toISOString(),
      template_updated_by: template?.updated_by,
      template_updated_at: template?.updated_dt?.toISOString(),
      template_status: template?.status,
      table: [],
    };
    const tempTable: Record<string, ProductField[]> = {};
    const formRight: FormRightGroup[] = [];

    // Step 5: Group mappings by form_right name (dari product master) - pakai Set untuk unique
    const mappingsByFormRight = new Map<string, Set<string>>();
    productMappings.forEach((mapping) => {
      if (!mappingsByFormRight.has(mapping.code)) {
        mappingsByFormRight.set(mapping.code, new Set());
      }
      mappingsByFormRight.get(mapping.code)!.add(mapping.position);
    });

    // Step 6: Group template FormRight by name (untuk cek enabled status)
    const templateFormRights = new Map<string, any>();
    template.datas
      .filter((td) => td.position === 'FormRight')
      .forEach((td) => {
        templateFormRights.set(td.group_name, td);
      });

    // Step 7: Ambil semua Form Right dari product master
    const formRightProductData = productFields.filter(
      (item) => item.position === 'FormRight',
    );

    // Group by FormRight name (untuk hindari duplikat)
    const formRightNames = new Set(
      formRightProductData.map((item) => item.label),
    );

    // Step 8: Buat Form Right entries untuk semua Form Right
    formRightNames.forEach((formRightName) => {
      // Cari template data untuk FormRight ini
      const templateFormRight = templateFormRights.get(formRightName);

      // Dapatkan related positions dari product master mapping - unique
      const formRightCode = formRightProductData.find(
        (item) => item.label === formRightName,
      )?.code;

      // Convert Set ke array unique dengan type casting
      const relatedPositions = formRightCode
        ? (Array.from(
            mappingsByFormRight.get(formRightCode) || new Set(),
          ) as string[])
        : [];

      const formRightEntry: FormRightGroup = {
        name: formRightName,
        enabled: templateFormRight?.enabled ?? false,
        tolerance: templateFormRight
          ? {
              min: templateFormRight.min_tolerance,
              t_lt_50: templateFormRight.t_lt_50_tolerance,
              nominal: templateFormRight.nominal_tolerance,
              t_gt_50: templateFormRight.t_gt_50_tolerance,
              max: templateFormRight.max_tolerance,
              actual: templateFormRight.actual_tolerance,
            }
          : {
              min: 0,
              t_lt_50: 0,
              nominal: 0,
              t_gt_50: 0,
              max: 0,
              actual: 0,
            },
        relatedTablePositions: relatedPositions,
      };
      formRight.push(formRightEntry);
    });

    // Step 9: Loop product master untuk tables, default, basic fields
    productFields.forEach((item) => {
      const position = item.position || 'default';
      const isHCT = ['H', 'C', 'T'].includes(item.code[0]);

      // Skip FormRight - sudah diproses di atas
      if (position === 'FormRight') return;

      // Cari template data untuk field ini
      const templateData = templateDataMap.get(item.code);

      let enabled = templateData?.enabled ?? false;

      // Jika ini H/C/T field dan table position enabled, maka field juga enabled
      if (isHCT && templateData?.group_name === 'table') {
        const tablePositionEnabled = template.datas.find(
          (td) => td.position === position && td.group_name === 'table',
        )?.enabled;
        if (tablePositionEnabled) {
          enabled = true;
        }
      }

      const entry: ProductField = {
        code: item.code,
        name: item.label,
        type: item.type,
        isTable: isHCT,
        productType: item.productType?.name,
        enabled: enabled,
        selected: !!templateData,
        minTolerance: templateData?.min_tolerance ?? null,
        t_lt_50_Tolerance: templateData?.t_lt_50_tolerance ?? null,
        nominalTolerance: templateData?.nominal_tolerance ?? null,
        t_gt_50_Tolerance: templateData?.t_gt_50_tolerance ?? null,
        maxTolerance: templateData?.max_tolerance ?? null,
        sound: templateData?.sound ?? null,
        inputType: templateData?.input_type ?? null,
        isReadonly: item.is_readonly,
        isFormula: item.is_formula,
        formula: item.formula,
        isTolerance: item.is_tolerance,
        orderNumb: templateData?.order_numb ?? 0,
      };

      if (isHCT) {
        if (!tempTable[position]) tempTable[position] = [];
        tempTable[position].push(entry);
      } else {
        if (!grouped[position]) grouped[position] = [];
        (grouped[position] as ProductField[]).push(entry);
      }
    });

    // Step 10: Sorting table by HCT + order_numb
    for (const pos in tempTable) {
      tempTable[pos].sort((a, b) => {
        const order = ['H', 'C', 'T'];
        const diff = order.indexOf(a.code[0]) - order.indexOf(b.code[0]);
        if (diff !== 0) return diff;
        return (a.orderNumb ?? 0) - (b.orderNumb ?? 0);
      });

      const tablePositionEnabled =
        template.datas.find(
          (td) => td.position === pos && td.group_name === 'table',
        )?.enabled ?? false;

      const tableGroup: TableGroup = {
        name: pos,
        fields: tempTable[pos],
        enabled: tablePositionEnabled,
      };
      grouped.table.push(tableGroup);
    }

    // Step 11: Handle TABLE POSITIONS dari template (yang mungkin tidak ada di product master)
    template.datas.forEach((templateData) => {
      if (templateData.group_name === 'table' && templateData.position) {
        const existingTable = grouped.table.find(
          (t) => t.name === templateData.position,
        );

        if (!existingTable) {
          // Position ada di template tapi tidak di product master
          const newTableGroup: TableGroup = {
            name: templateData.position,
            fields: [], // Kosong karena tidak ada H/C/T fields
            enabled: templateData.enabled,
          };
          grouped.table.push(newTableGroup);
        } else {
          // Update enabled status dari template
          existingTable.enabled = templateData.enabled;

          // Update semua fields di table ini jika table enabled
          if (templateData.enabled) {
            existingTable.fields.forEach((field) => {
              field.enabled = true;
              field.selected = true;
            });
          }
        }
      }
    });

    // Step 12: Sort tables by position name
    grouped.table.sort((a, b) => a.name.localeCompare(b.name));

    // Step 13: Sort FormRight by name
    formRight.sort((a, b) => a.name.localeCompare(b.name));

    // Step 14: Add FormRight ke grouped data
    if (formRight.length > 0) {
      grouped.FormRight = formRight;
    }

    this.messageService.setMessage(
      `Berhasil memuat detail template ${qcTemplateId}.`,
    );
    return grouped;
  }

  // Membuat Template QC
  @Transactional()
  async create(dto: CreateQcTemplateDto, userId: string) {
    // Step 1: Validasi product type
    const productType = await this.productTypeRepo.findOne({
      where: { prodtype_id: dto.prodtype_id },
    });

    if (!productType) {
      throw new BadRequestException(
        `prodtype_id ${dto.prodtype_id} tidak ditemukan.`,
      );
    }

    // Step 1b: Validasi size
    const size = await this.sizeRepo.findOne({
      where: { size_id: dto.size_id, prodtype_id: dto.prodtype_id },
    });
    if (!size) {
      throw new BadRequestException(
        `Size dengan ID ${dto.size_id} tidak ditemukan untuk prodtype_id ${dto.prodtype_id}.`,
      );
    }

    // Step 2: Validasi user
    const user = await this.userRepo.findOne({ where: { user_id: userId } });
    if (!user) {
      throw new BadRequestException(
        `User dengan ID ${userId} tidak ditemukan.`,
      );
    }

    // Step 3: Cek apakah qc_template_id sudah ada (jika provided)
    if (dto.qc_template_id) {
      const existingTemplate = await this.qcTemplateRepo.findOne({
        where: { qc_template_id: dto.qc_template_id },
      });
      if (existingTemplate) {
        throw new BadRequestException(
          `Template dengan ID ${dto.qc_template_id} sudah ada.`,
        );
      }
    }

    // Step 4: Simpan template utama
    const template = this.qcTemplateRepo.create({
      qc_template_id: dto.qc_template_id || (await this.generateTemplateId()),
      prodtype_id: dto.prodtype_id,
      size_id: dto.size_id,
      name: dto.name,
      profile: dto.profile,
      std_dimention: dto.std_dimention,
      brand_merek: dto.brand_merek,
      specification: dto.specification,
      status: 'active',
      created_by: user.full_name,
      created_dt: new Date(),
      updated_by: user.full_name,
      updated_dt: new Date(),
    });
    await this.qcTemplateRepo.save(template);

    // Step 5: Simpan TABLE FIELDS dengan tolerance dari FormRight
    const tableDataEntities: QcTemplateData[] = [];

    // Buat map untuk akses cepat tolerance FormRight berdasarkan position
    const formRightToleranceMap = new Map<string, any>();
    dto.form_rights.forEach((fr) => {
      fr.relatedTablePositions.forEach((position) => {
        formRightToleranceMap.set(position, fr.tolerance);
      });
    });

    // Proses setiap table dan field-nya
    for (const table of dto.tables) {
      for (const field of table.fields) {
        // Dapatkan tolerance yang related dengan position ini
        const positionTolerance = formRightToleranceMap.get(table.position);

        const tableData = new QcTemplateData();
        tableData.input_code = field.code;
        tableData.label = await this.getFieldLabel(field.code, dto.prodtype_id);
        tableData.input_type = await this.getFieldType(
          field.code,
          dto.prodtype_id,
        );
        tableData.position = table.position;
        tableData.group_name = 'table';
        tableData.enabled = field.enabled;
        tableData.order_numb = field.order_numb;
        tableData.qc_template_id = template.qc_template_id;

        // Apply tolerance dari FormRight jika ada, otherwise default 0
        if (positionTolerance) {
          tableData.min_tolerance = positionTolerance.min || 0;
          tableData.t_lt_50_tolerance = positionTolerance.t_lt_50 || 0;
          tableData.nominal_tolerance = positionTolerance.nominal || 0;
          tableData.t_gt_50_tolerance = positionTolerance.t_gt_50 || 0;
          tableData.max_tolerance = positionTolerance.max || 0;
        } else {
          tableData.min_tolerance = 0;
          tableData.t_lt_50_tolerance = 0;
          tableData.nominal_tolerance = 0;
          tableData.t_gt_50_tolerance = 0;
          tableData.max_tolerance = 0;
        }

        tableData.sound = '';
        tableDataEntities.push(tableData);
      }
    }

    // Step 6: Simpan FORM RIGHTS dengan tolerance
    const formRightEntities: QcTemplateData[] = [];
    let formRightOrder = 0;

    for (const formRight of dto.form_rights) {
      const formRightData = new QcTemplateData();
      formRightData.input_code = formRight.name
        .toLowerCase()
        .replace(/\s+/g, '.');
      formRightData.label = formRight.name;
      formRightData.input_type = 'number';
      formRightData.position = 'FormRight';
      formRightData.group_name = formRight.name;
      formRightData.enabled = formRight.enabled;
      formRightData.order_numb = formRightOrder++;
      formRightData.qc_template_id = template.qc_template_id;

      // Set tolerance values dari FormRight
      formRightData.min_tolerance = formRight.tolerance.min || 0;
      formRightData.t_lt_50_tolerance = formRight.tolerance.t_lt_50 || 0;
      formRightData.nominal_tolerance = formRight.tolerance.nominal || 0;
      formRightData.t_gt_50_tolerance = formRight.tolerance.t_gt_50 || 0;
      formRightData.max_tolerance = formRight.tolerance.max || 0;
      formRightData.actual_tolerance = formRight.tolerance.actual || 0;
      formRightData.sound = '';

      formRightEntities.push(formRightData);
    }

    // Step 7: Simpan MAPPING untuk korelasi FormRight dengan table positions
    const mappingEntities: QcTemplateMapping[] = [];

    for (const formRight of dto.form_rights) {
      // Hilangkan duplikat posisi dengan Set()
      const uniquePositions = [...new Set(formRight.relatedTablePositions)];
      let mappingOrder = 0;

      for (const tablePosition of uniquePositions) {
        const mapping = new QcTemplateMapping();
        mapping.mapping_id = await this.generateMappingId();
        mapping.qc_template_id = template.qc_template_id;
        mapping.group_name = formRight.name;
        mapping.position = tablePosition;
        mapping.order_numb = mappingOrder++;

        mappingEntities.push(mapping);
      }
    }

    // Step 8: Simpan semua data ke database
    if (tableDataEntities.length > 0) {
      await this.qcTemplateDataRepo.save(tableDataEntities);
    }
    if (formRightEntities.length > 0) {
      await this.qcTemplateDataRepo.save(formRightEntities);
    }
    if (mappingEntities.length > 0) {
      await this.qcTemplateMappingRepo.save(mappingEntities);
    }

    this.messageService.setMessage('QC Template berhasil dibuat.');

    // Step 9: Return response dengan data terstruktur
    return this.getTemplateDetail(template.qc_template_id);
  }

  // Helper function: Ambil label field dari product master
  private async getFieldLabel(
    code: string,
    prodtypeId: string,
  ): Promise<string> {
    const field = await this.productTypeDataRepo.findOne({
      where: { code, prodtype_id: prodtypeId },
    });
    return field?.label || code;
  }

  // Helper function: Ambil type field dari product master
  private async getFieldType(
    code: string,
    prodtypeId: string,
  ): Promise<string> {
    const field = await this.productTypeDataRepo.findOne({
      where: { code, prodtype_id: prodtypeId },
    });
    return field?.type || 'number';
  }

  // Helper function: Generate template ID unik
  private async generateTemplateId(): Promise<string> {
    const timestamp = new Date().getTime().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newId = `TMP${timestamp}${random}`;

    // Cek duplikat ID
    const existing = await this.qcTemplateRepo.findOne({
      where: { qc_template_id: newId },
    });

    return existing ? this.generateTemplateId() : newId;
  }

  // Helper function: Generate mapping ID unik
  private async generateMappingId(): Promise<string> {
    const timestamp = new Date().getTime().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `MAP${timestamp}${random}`;
  }

  // Helper function: Ambil detail template untuk response
  private async getTemplateDetail(qc_template_id: string) {
    const template = await this.qcTemplateRepo.findOne({
      where: { qc_template_id },
    });

    if (!template) {
      throw new NotFoundException('Template tidak ditemukan');
    }

    const datas = await this.qcTemplateDataRepo.find({
      where: { qc_template_id },
      order: { order_numb: 'ASC' },
    });

    const mappings = await this.qcTemplateMappingRepo.find({
      where: { qc_template_id },
      order: { order_numb: 'ASC' },
    });

    const tables = this.groupTableFields(datas);
    const FormRight = this.groupFormRightFields(datas, mappings);

    return {
      ...template,
      tables,
      FormRight,
    };
  }

  // Helper function: Group table fields berdasarkan position
  private groupTableFields(fields: QcTemplateData[]) {
    const grouped: Record<string, any> = {};

    fields.forEach((field) => {
      if (
        !field.position ||
        field.position === '' ||
        field.group_name !== 'table'
      )
        return;

      if (!grouped[field.position]) {
        grouped[field.position] = {
          position: field.position,
          enabled: field.enabled,
        };
      }
    });

    return Object.values(grouped);
  }

  // Helper function: Group FormRight fields dengan mappings
  private groupFormRightFields(
    fields: QcTemplateData[],
    mappings: QcTemplateMapping[],
  ) {
    const grouped: Record<string, any> = {};

    fields.forEach((field) => {
      if (
        !field.group_name ||
        field.group_name === '' ||
        field.position !== 'FormRight'
      )
        return;

      if (!grouped[field.group_name]) {
        const relatedMappings = mappings.filter(
          (mapping) => mapping.group_name === field.group_name,
        );

        grouped[field.group_name] = {
          name: field.group_name,
          enabled: field.enabled,
          tolerance: {
            min: field.min_tolerance,
            t_lt_50: field.t_lt_50_tolerance,
            nominal: field.nominal_tolerance,
            t_gt_50: field.t_gt_50_tolerance,
            max: field.max_tolerance,
            actual: field.actual_tolerance,
          },
          relatedTablePositions: relatedMappings.map(
            (mapping) => mapping.position,
          ),
        };
      }
    });

    return Object.values(grouped);
  }

  // Edit Template
  @Transactional()
  async update(qcTemplateId: string, dto: UpdateQcTemplateDto, userId: string) {
    // Step 1: Cek template exists
    const template = await this.qcTemplateRepo.findOne({
      where: { qc_template_id: qcTemplateId },
    });

    if (!template) {
      throw new NotFoundException(
        `QC Template ${qcTemplateId} tidak ditemukan.`,
      );
    }

    // Step 2: Validasi product type
    const productType = await this.productTypeRepo.findOne({
      where: { prodtype_id: dto.prodtype_id },
    });

    if (!productType) {
      throw new BadRequestException(
        `prodtype_id ${dto.prodtype_id} tidak ditemukan.`,
      );
    }

    // Step 3: Ambil user untuk updated_by
    const user = await this.userRepo.findOne({ where: { user_id: userId } });

    // Step 4: Update template utama
    template.prodtype_id = dto.prodtype_id;
    template.name = dto.name;
    template.profile = dto.profile;
    template.std_dimention = dto.std_dimention;
    template.brand_merek = dto.brand_merek;
    template.specification = dto.specification;
    template.status = dto.status;
    template.updated_by = user?.full_name ?? 'system';
    template.updated_dt = new Date();

    await this.qcTemplateRepo.save(template);

    // Step 5: Hapus data lama (fields + mappings)
    await this.qcTemplateDataRepo.delete({ qc_template_id: qcTemplateId });
    await this.qcTemplateMappingRepo.delete({ qc_template_id: qcTemplateId });

    // Step 6: Simpan TABLE FIELDS baru
    const tableDataEntities: QcTemplateData[] = [];

    for (const table of dto.tables) {
      for (const field of table.fields) {
        const tableData = new QcTemplateData();
        tableData.input_code = field.input_code;
        tableData.label = field.label;
        tableData.input_type = field.input_type;
        tableData.position = table.position;
        tableData.group_name = 'table';
        tableData.enabled = field.enabled && table.enabled;
        tableData.order_numb = field.order_numb;
        tableData.qc_template_id = qcTemplateId;

        tableData.min_tolerance = field.min_tolerance || 0;
        tableData.max_tolerance = field.max_tolerance || 0;
        tableData.t_lt_50_tolerance = field.t_lt_50_tolerance || 0;
        tableData.nominal_tolerance = field.nominal_tolerance || 0;
        tableData.t_gt_50_tolerance = field.t_gt_50_tolerance || 0;

        tableData.sound = field.sound || '';

        tableDataEntities.push(tableData);
      }
    }

    // Step 7: Simpan FORM RIGHTS dengan 5 tolerance values
    const formRightEntities: QcTemplateData[] = [];
    let formRightOrder = 0;

    for (const formRight of dto.form_rights) {
      for (const field of formRight.fields) {
        const formRightData = new QcTemplateData();
        formRightData.input_code = field.input_code;
        formRightData.label = field.label;
        formRightData.input_type = field.input_type;
        formRightData.position = 'FormRight';
        formRightData.group_name = formRight.name;
        formRightData.enabled = field.enabled && formRight.enabled; // Field enabled AND formRight enabled
        formRightData.order_numb = formRightOrder++;
        formRightData.qc_template_id = qcTemplateId;

        // Untuk FormRight, pakai semua 5 tolerance values
        formRightData.min_tolerance = field.min_tolerance || 0;
        formRightData.t_lt_50_tolerance = field.t_lt_50_tolerance || 0;
        formRightData.nominal_tolerance = field.nominal_tolerance || 0;
        formRightData.t_gt_50_tolerance = field.t_gt_50_tolerance || 0;
        formRightData.max_tolerance = field.max_tolerance || 0;

        formRightData.sound = field.sound || '';

        formRightEntities.push(formRightData);
      }
    }

    // Step 8: Simpan MAPPING untuk korelasi FormRight dengan table positions
    const mappingEntities: QcTemplateMapping[] = [];
    let mappingOrder = 0;

    for (const formRight of dto.form_rights) {
      for (const tablePosition of formRight.related_positions) {
        const mapping = new QcTemplateMapping();
        mapping.mapping_id = await this.generateMappingId();
        mapping.qc_template_id = qcTemplateId;
        mapping.group_name = formRight.name;
        mapping.position = tablePosition;
        mapping.order_numb = mappingOrder++;

        mappingEntities.push(mapping);
      }
    }

    // Step 9: Simpan semua data ke database
    if (tableDataEntities.length > 0) {
      await this.qcTemplateDataRepo.save(tableDataEntities);
    }
    if (formRightEntities.length > 0) {
      await this.qcTemplateDataRepo.save(formRightEntities);
    }
    if (mappingEntities.length > 0) {
      await this.qcTemplateMappingRepo.save(mappingEntities);
    }

    this.messageService.setMessage(
      `QC Template ${qcTemplateId} berhasil diperbarui.`,
    );

    // Step 10: Return response dengan data terstruktur
    return this.getTemplateDetail(qcTemplateId);
  }

  // Hapus Template
  @Transactional()
  async delete(qcTemplateId: string) {
    const template = await this.qcTemplateRepo.findOne({
      where: { qc_template_id: qcTemplateId },
    });
    if (!template) {
      throw new NotFoundException(
        `QC Template ${qcTemplateId} tidak ditemukan.`,
      );
    }
    await this.qcTemplateMappingRepo.delete({ qc_template_id: qcTemplateId });

    await this.qcTemplateDataRepo.delete({ qc_template_id: qcTemplateId });

    await this.qcTemplateRepo.delete({ qc_template_id: qcTemplateId });

    this.messageService.setMessage(
      `QC Template ${qcTemplateId} berhasil dihapus.`,
    );
  }
}
