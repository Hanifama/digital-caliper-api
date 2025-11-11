import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Size } from './entity/size.entity';
import { ProductType } from '../product/entity/product-type.entity';
import { MessageService } from '../message/message.service';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepo: Repository<Size>,

    @InjectRepository(ProductType)
    private readonly productTypeRepo: Repository<ProductType>,

    private readonly messageService: MessageService,
  ) {}

  // Ambil data size (optional search by name)
  async getAllSizes(search?: string): Promise<any[]> {
    const query = this.sizeRepo
      .createQueryBuilder('size')
      .leftJoinAndSelect('size.productType', 'productType');

    if (search && search.trim() !== '' && search !== '{{search}}') {
      query.where('size.name LIKE :search', { search: `%${search.trim()}%` });
    }

    const sizes = await query.getMany();

    // mapping flat response + prodtype_name
    const result = sizes.map((s) => ({
      size_id: s.size_id,
      name: s.name,
      prodtype_id: s.prodtype_id,
      prodtype_name: s.productType?.name || null, // tambahan key
      status: s.status,
      created_dt: s.created_dt,
      updated_dt: s.updated_dt,
    }));

    this.messageService.setMessage('Berhasil memuat daftar size');
    return result;
  }

  // Ambil data size dengan pagination
  async getSizesPagination(
    page: number = 1,
    limit: number = 10,
    search?: string,
  ) {
    const offset = (page - 1) * limit;

    const query = this.sizeRepo
      .createQueryBuilder('size')
      .leftJoinAndSelect('size.productType', 'productType');

    const countQuery = this.sizeRepo.createQueryBuilder('size');

    if (search && search.trim() !== '' && search !== '{{search}}') {
      query.andWhere('size.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
      countQuery.andWhere('size.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
    }

    query.orderBy('size.created_dt', 'DESC').offset(offset).limit(limit);

    const [sizes, totalData] = await Promise.all([
      query.getMany(),
      countQuery.getCount(),
    ]);
    const totalPages = Math.ceil(totalData / limit);

    // mapping flat response + prodtype_name
    const result = sizes.map((s) => ({
      size_id: s.size_id,
      name: s.name,
      prodtype_id: s.prodtype_id,
      prodtype_name: s.productType?.name || null, // tambahan key
      status: s.status,
      created_dt: s.created_dt,
      updated_dt: s.updated_dt,
    }));

    this.messageService.setMessage('Berhasil memuat daftar size');

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

  // Ambil size berdasarkan prodtype_id
  async getSizesByProdType(prodtypeId: string): Promise<any[]> {
    const sizes = await this.sizeRepo
      .createQueryBuilder('size')
      .leftJoinAndSelect('size.productType', 'productType')
      .where('size.prodtype_id = :prodtypeId', { prodtypeId })
      .getMany();

    if (!sizes.length) {
      this.messageService.setMessage(
        `Tidak ada size untuk Product Type ID: ${prodtypeId}`,
      );
      return [];
    }

    // mapping flat response + prodtype_name
    const result = sizes.map((s) => ({
      size_id: s.size_id,
      name: s.name,
      prodtype_id: s.prodtype_id,
      prodtype_name: s.productType?.name || null,
      status: s.status,
      created_dt: s.created_dt,
      updated_dt: s.updated_dt,
    }));

    this.messageService.setMessage(
      `Berhasil memuat size untuk Product Type ID ${prodtypeId}`,
    );
    return result;
  }

  // Ambil detail size
  async getSizeDetail(sizeId: string) {
    const size = await this.sizeRepo.findOne({
      where: { size_id: sizeId },
      relations: ['productType'],
    });

    if (!size) throw new NotFoundException('Size tidak ditemukan');

    // mapping response + prodtype_name
    const result = {
      size_id: size.size_id,
      name: size.name,
      prodtype_id: size.prodtype_id,
      prodtype_name: size.productType?.name || null,
      status: size.status,
      created_dt: size.created_dt,
      updated_dt: size.updated_dt,
    };

    this.messageService.setMessage('Berhasil memuat detail size');
    return result;
  }
}
