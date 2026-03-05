import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';

import { User } from '../auth/entity/user.entity';
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
import { LogService } from '../log-app/log.service';

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
    private readonly logService: LogService,
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
      where: { size_id: template.size_id },
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

      // Ambil product master data sekali saja
      const productData = formRightProductData.find(
        (x) => x.label === formRightName,
      );

      const formRightCode = productData?.code;

      // Dapatkan related positions dari product master mapping
      const relatedPositions = formRightCode
        ? (Array.from(
            mappingsByFormRight.get(formRightCode) || new Set(),
          ) as string[])
        : [];

      const formRightEntry: FormRightGroup = {
        code: formRightCode,
        name: formRightName,
        alias: productData?.alias || formRightName,
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
        alias: item.alias,
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
        alias: tempTable[pos][0]?.alias || pos,
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
            alias: templateData.position,
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

    await this.logService.createLog(user, {
      data_1: 'QC-TEMPLATE',
      data_2: 'CREATE',
      data_3: template.qc_template_id,
      data_4: `PROD_TYPE:${dto.prodtype_id}`,
      data_5: `SIZE:${dto.size_id}`,
    });

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

  private buildTemplateEntity(
    qcTemplateId: string,
    code: string,
    label: string,
    inputType: string,
    position: string,
    groupName: string,
    enabled: boolean,
    order: number,
    tolerance: any,
  ): QcTemplateData {
    const entity = new QcTemplateData();

    entity.input_code = code;
    entity.label = label;
    entity.input_type = inputType;
    entity.position = position;
    entity.group_name = groupName;

    entity.enabled = enabled;
    entity.order_numb = order ?? 0;
    entity.qc_template_id = qcTemplateId;

    entity.min_tolerance = tolerance?.minTolerance ?? 0;
    entity.t_lt_50_tolerance = tolerance?.t_lt_50_Tolerance ?? 0;
    entity.nominal_tolerance = tolerance?.nominalTolerance ?? 0;
    entity.t_gt_50_tolerance = tolerance?.t_gt_50_Tolerance ?? 0;
    entity.max_tolerance = tolerance?.maxTolerance ?? 0;
    entity.actual_tolerance = tolerance?.actual ?? 0;

    entity.sound = tolerance?.sound ?? '';

    return entity;
  }

  // Edit Template
  @Transactional()
  async update(qcTemplateId: string, dto: UpdateQcTemplateDto, userId: string) {
    /* ======================================================
     STEP 1: CEK TEMPLATE
    ====================================================== */
    const template = await this.qcTemplateRepo.findOne({
      where: { qc_template_id: qcTemplateId },
    });

    if (!template) {
      throw new NotFoundException(
        `QC Template ${qcTemplateId} tidak ditemukan.`,
      );
    }

    /* ======================================================
     STEP 2: VALIDASI PRODUCT TYPE
    ====================================================== */
    const productType = await this.productTypeRepo.findOne({
      where: { prodtype_id: dto.template_prodtype_id },
    });

    if (!productType) {
      throw new BadRequestException(
        `template_prodtype_id ${dto.template_prodtype_id} tidak ditemukan.`,
      );
    }

    /* ======================================================
     STEP 3: UPDATE ALIAS MASTER (ALL SECTION)
   ====================================================== */
    const productTypeUpdates: {
      code: string;
      alias?: string;
      isTolerance?: boolean;
      isFormula?: boolean;
      formula?: string | null;
    }[] = [];

    // TABLE IN H/C/T
    for (const table of dto.table ?? []) {
      for (const field of table.fields ?? []) {
        productTypeUpdates.push({
          code: field.code,
          alias: field.alias ?? undefined,
          isTolerance: field.isTolerance,
          isFormula: field.isFormula,
          formula: field.formula ?? null,
        });
      }
    }

    // BASIC
    for (const field of dto.basic ?? []) {
      productTypeUpdates.push({
        code: field.code,
        alias: field.alias ?? undefined,
        isTolerance: field.isTolerance,
        isFormula: field.isFormula,
        formula: field.formula ?? null,
      });
    }

    // DEFAULT
    for (const field of dto.basic ?? []) {
      productTypeUpdates.push({
        code: field.code,
        alias: field.alias ?? undefined,
        isTolerance: field.isTolerance,
        isFormula: field.isFormula,
        formula: field.formula ?? null,
      });
    }

    // FORM RIGHT
    for (const formRight of dto.FormRight ?? []) {
      productTypeUpdates.push({
        code: formRight.code,
        alias: formRight.alias ?? undefined,
      });
    }

    // Execute alias updates
    for (const item of productTypeUpdates) {
      const updatePayload: any = {};

      if (item.alias !== undefined) updatePayload.alias = item.alias;
      if (item.isTolerance !== undefined)
        updatePayload.is_tolerance = item.isTolerance;
      if (item.isFormula !== undefined)
        updatePayload.is_formula = item.isFormula;
      if (item.formula !== undefined) updatePayload.formula = item.formula;

      if (Object.keys(updatePayload).length === 0) continue;

      await this.productTypeDataRepo.update(
        {
          code: item.code,
          prodtype_id: dto.template_prodtype_id,
        },
        updatePayload,
      );
    }

    /* ======================================================
     STEP 4: UPDATE HEADER TEMPLATE
    ====================================================== */
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });

    template.prodtype_id = dto.template_prodtype_id;
    template.name = dto.template_name;
    template.std_dimention = dto.template_std_dimention ?? '';
    template.brand_merek = dto.template_brand_merek ?? '';
    template.specification = dto.template_specification ?? '';
    template.status = dto.template_status;
    template.updated_by = user?.full_name ?? 'system';
    template.updated_dt = new Date();

    await this.qcTemplateRepo.save(template);

    /* ======================================================
     STEP 5: FULL REPLACE DATA
    ====================================================== */
    await this.qcTemplateDataRepo.delete({
      qc_template_id: qcTemplateId,
    });

    await this.qcTemplateMappingRepo.delete({
      qc_template_id: qcTemplateId,
    });

    /* ======================================================
     STEP 6: BUILD TEMPLATE DATA BARU
   ====================================================== */
    const dataEntities: QcTemplateData[] = [];

    // TABLE
    for (const table of dto.table ?? []) {
      for (const field of table.fields ?? []) {
        dataEntities.push(
          this.buildTemplateEntity(
            qcTemplateId,
            field.code,
            field.name,
            field.inputType,
            table.name,
            'table',
            field.enabled && table.enabled,
            field.orderNumb,
            {
              ...field,
              actual: field.actualTolerance,
            },
          ),
        );
      }
    }

    // BASIC
    for (const field of dto.basic ?? []) {
      dataEntities.push(
        this.buildTemplateEntity(
          qcTemplateId,
          field.code,
          field.name,
          field.inputType ?? field.type,
          'basic',
          'basic',
          field.enabled,
          field.orderNumb,
          {
            ...field,
            actual: field.actualTolerance,
          },
        ),
      );
    }

    // DEFAULT
    for (const field of dto.default ?? []) {
      dataEntities.push(
        this.buildTemplateEntity(
          qcTemplateId,
          field.code,
          field.name,
          field.inputType ?? field.type,
          'default',
          'default',
          field.enabled,
          field.orderNumb,
          {
            ...field,
            actual: field.actualTolerance,
          },
        ),
      );
    }

    // FORM RIGHT
    let formRightOrder = 0;
    for (const formRight of dto.FormRight ?? []) {
      dataEntities.push(
        this.buildTemplateEntity(
          qcTemplateId,
          formRight.code,
          formRight.name,
          'number',
          'FormRight',
          formRight.name,
          formRight.enabled,
          formRightOrder++,
          {
            minTolerance: formRight.tolerance?.min,
            t_lt_50_Tolerance: formRight.tolerance?.t_lt_50,
            nominalTolerance: formRight.tolerance?.nominal,
            t_gt_50_Tolerance: formRight.tolerance?.t_gt_50,
            maxTolerance: formRight.tolerance?.max,
            actual: formRight.tolerance?.actual,
          },
        ),
      );
    }

    await this.qcTemplateDataRepo.save(dataEntities);

    /* ======================================================
     STEP 7: BUILD MAPPING
    ====================================================== */
    const mappingEntities: QcTemplateMapping[] = [];
    let mappingOrder = 0;

    for (const formRight of dto.FormRight ?? []) {
      for (const position of formRight.relatedTablePositions ?? []) {
        const mapping = new QcTemplateMapping();

        mapping.mapping_id = await this.generateMappingId();
        mapping.qc_template_id = qcTemplateId;
        mapping.group_name = formRight.name;
        mapping.position = position;
        mapping.order_numb = mappingOrder++;

        mappingEntities.push(mapping);
      }
    }

    if (mappingEntities.length > 0) {
      await this.qcTemplateMappingRepo.save(mappingEntities);
    }

    this.messageService.setMessage(
      `Berhasil mengubah template ${qcTemplateId}.`,
    );

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
