import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductType } from './entity/product-type.entity';
import { ProductTypeData } from './entity/product-type-data.entity';

import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { GroupedData, ProductField } from './interfaces/GroupedProductTypeData';

import { MessageService } from 'src/app/message/message.service';
import { SheetService } from '../sheet/sheet.service';
import { ProductTypeDataMapping } from './entity/product-type-data-mapping.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductType)
    private readonly productTypeRepo: Repository<ProductType>,

    @InjectRepository(ProductTypeData)
    private readonly productTypeDataRepo: Repository<ProductTypeData>,

    @InjectRepository(ProductTypeDataMapping)
    private readonly productTypeDataMappingRepo: Repository<ProductTypeDataMapping>,

    private readonly messageService: MessageService,

    private readonly sheetService: SheetService,
  ) {}

  // Ambil product type
  async getAllProductTypes(): Promise<ProductType[]> {
    this.messageService.setMessage('Berhasil memuat tipe produk.');

    return this.productTypeRepo.find({
      select: ['prodtype_id', 'name', 'status'],
    });
  }

  // Ambil semua product type data (dengan pagination)
  async getAllProductTypeData(
    page?: number,
    limit?: number,
    status?: string,
    search?: string,
  ): Promise<IResponsePageWrapper<ProductTypeData>> {
    page = page ?? 1;
    limit = limit ?? 10;
    const qb = this.productTypeDataRepo
      .createQueryBuilder('ptd')
      .leftJoinAndSelect('ptd.productType', 'pt');

    if (status) {
      qb.andWhere('ptd.status = :status', { status });
    }

    if (search) {
      qb.andWhere(
        '(ptd.code LIKE :search OR ptd.label LIKE :search OR ptd.type LIKE :search)',
        { search: `%${search}%` },
      );
    }

    qb.orderBy('ptd.code', 'DESC')
      .offset((page - 1) * limit)
      .limit(limit);

    const [data, totalData] = await Promise.all([qb.getMany(), qb.getCount()]);
    const totalPages = limit ? Math.ceil(totalData / limit) : 1;

    this.messageService.setMessage('Berhasil memuat produk.');

    return {
      meta: {
        totalPages,
        totalData,
        totalDataPerPage: data.length,
        page,
        limit,
      },
      data,
    };
  }

  // Ambil product type data berdasarkan product type id
  async getProductTypeDataByTypeId(prodtypeId: string): Promise<GroupedData> {
    // Step 1: Ambil data product type dari database
    const data = await this.productTypeDataRepo.find({
      where: { prodtype_id: prodtypeId },
      relations: ['productType'],
    });

    if (!data.length) {
      throw new NotFoundException(
        `Tidak ada data untuk prodtype_id: ${prodtypeId}`,
      );
    }

    // Inisialisasi struktur response
    const grouped: GroupedData = { table: [] };
    const tempTable: Record<string, ProductField[]> = {};
    const formRight: {
      name: string;
      fields: (ProductField & { enabled?: boolean })[];
      relatedTablePositions?: string[];
    }[] = [];

    // Step 2: Ambil data mapping untuk field FormRight
    const mapping = await this.productTypeDataMappingRepo.find({
      where: { prodtype_id: prodtypeId },
    });

    // Step 3: Group mapping berdasarkan code dan kumpulkan positions yang unik
    const mappingByCode: Record<string, typeof mapping> = {};
    const positionsByFormRightCode: Record<string, Set<string>> = {};

    mapping.forEach((m) => {
      const keyMapping = m.code.trim().toLowerCase();

      // Group mapping berdasarkan kode FormRight
      if (!mappingByCode[keyMapping]) mappingByCode[keyMapping] = [];
      mappingByCode[keyMapping].push(m);

      // Kumpulkan positions unik untuk setiap kode FormRight
      if (!positionsByFormRightCode[keyMapping]) {
        positionsByFormRightCode[keyMapping] = new Set();
      }
      positionsByFormRightCode[keyMapping].add(m.position);
    });

    // Step 4: Proses setiap data item dan kategorikan berdasarkan position
    data.forEach((item) => {
      const position = item.position || 'default';
      const isHCT = ['H', 'C', 'T'].includes(item.code[0]);

      const entry: ProductField = {
        code: item.code,
        name: item.label,
        type: item.type,
        isTable: isHCT,
        isReadonly: item.is_readonly,
        productType: item.productType?.name,
      };

      // Kategorikan data berdasarkan position dan type
      if (isHCT) {
        // Data H/C/T masuk ke section table
        if (!tempTable[position]) tempTable[position] = [];
        tempTable[position].push(entry);
      } else if (position === 'FormRight') {
        // Data FormRight butuh lookup mapping
        const key = item.code.trim().toLowerCase();
        const groupMapping = mappingByCode[key] || [];

        // Hanya proses FormRight jika ada mapping-nya
        if (groupMapping.length > 0) {
          // Ambil related table positions yang unik untuk group FormRight ini
          const relatedTablePositions = Array.from(
            positionsByFormRightCode[key] || [],
          );

          // Buat map fields unik untuk hindari duplikat
          const uniqueFieldsMap: Record<
            string,
            ProductField & { isEnabled?: boolean }
          > = {};

          groupMapping.forEach((m) => {
            if (!uniqueFieldsMap[m.input_code]) {
              uniqueFieldsMap[m.input_code] = {
                code: m.input_code,
                name: m.input_label,
                type: item.type,
                isTable: false,
                isReadonly: item.is_readonly,
                productType: item.productType?.name,
                isEnabled: m.enabled,
              };
            }
          });

          // Tambahkan group FormRight ke response
          formRight.push({
            name: item.label,
            fields: Object.values(uniqueFieldsMap),
            relatedTablePositions:
              relatedTablePositions.length > 0
                ? relatedTablePositions
                : undefined,
          });
        }
        // Catatan: FormRight tanpa mapping sengaja di-skip
      } else {
        // Field biasa (basic, default, dll)
        if (!grouped[position]) grouped[position] = [];
        (grouped[position] as ProductField[]).push(entry);
      }
    });

    // Step 5: Urutkan data table H/C/T berdasarkan urutan H->C->T
    for (const pos in tempTable) {
      tempTable[pos].sort(
        (a, b) =>
          ['H', 'C', 'T'].indexOf(a.code[0]) -
          ['H', 'C', 'T'].indexOf(b.code[0]),
      );
      grouped.table.push({ name: pos, fields: tempTable[pos] });
    }

    // Step 6: Urutkan group FormRight secara alfabetis berdasarkan nama
    formRight.sort((a, b) => a.name.localeCompare(b.name));

    this.messageService.setMessage('Berhasil memuat produk.');
    return { ...grouped, FormRight: formRight };
  }

  public async exportProduct(): Promise<{ filename: string; buffer: Buffer }> {
    // ambil semua product type data beserta tipe produknya
    const products: ProductTypeData[] = await this.productTypeDataRepo.find({
      relations: ['productType'],
    });

    // mapping ke format Excel
    const formatedData = products.map((prod) => ({
      Kode: prod.code,
      'Tipe Produk': prod.productType?.name,
      'ProdType ID': prod.prodtype_id,
      Label: prod.label,
      Type: prod.type,
      Position: prod.position,
      Status: prod.status,
    }));

    const filename = `Product-${Date.now()}.xlsx`;
    const buffer: Buffer = this.sheetService.exportDataToExcel(
      formatedData,
      filename,
    );

    this.messageService.setMessage('Berhasil export product!');

    return { filename, buffer };
  }
}
