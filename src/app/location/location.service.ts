import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entity/location.entity';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from '../message/message.service';
import { Transactional } from 'typeorm-transactional';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,

    private readonly messageService: MessageService,
  ) {}

  async getAllLocations(
    page: number = 1,
    limit: number = 10,
    search?: string,
  ): Promise<any> {
    const offset = (page - 1) * limit;

    const query = this.locationRepo.createQueryBuilder('location');
    const countQuery = this.locationRepo.createQueryBuilder('location');

    if (search && search.trim() !== '' && search !== '{{search}}') {
      query.andWhere('location.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
      countQuery.andWhere('location.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
    }

    query
      .leftJoinAndSelect('location.creator', 'creator')
      .loadRelationCountAndMap('location.total_user', 'location.users')
      .orderBy('location.created_at', 'DESC')
      .offset(offset)
      .limit(limit);

    const [locations, totalData] = await Promise.all([
      query.getMany(),
      countQuery.getCount(),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    this.messageService.setMessage('Berhasil memuat daftar lokasi');

    // mapping: buang field creator
    const mapped = locations.map(({ creator, ...loc }) => ({
      ...loc,
      created_by: creator?.name || loc.created_by,
    }));

    return {
      meta: {
        page,
        limit,
        totalPages,
        totalData,
        totalDataPerPage: mapped.length,
      },
      data: mapped,
    };
  }

  async getDetailLocation(locationId: string): Promise<any> {
    const location = await this.locationRepo
      .createQueryBuilder('location')
      .leftJoinAndSelect('location.creator', 'creator')
      .leftJoin('location.users', 'user')
      .addSelect(['user.user_id', 'user.image'])
      .loadRelationCountAndMap('location.total_user', 'location.users')
      .where('location.location_id = :locationId', { locationId })
      .getOne();

    if (!location) {
      throw new NotFoundException(
        `Location dengan id ${locationId} tidak ditemukan`,
      );
    }

    this.messageService.setMessage('Berhasil memuat detail lokasi');

    // destructuring: hilangin creator
    const { creator, ...loc } = location;

    return {
      ...loc,
      created_by: creator?.name || loc.created_by,
    };
  }

  @Transactional()
  async create(dto: CreateLocationDto, userId: string): Promise<Location> {
    const locationId = dto.location_id ?? `LOC-${uuidv4()}`;

    const existing = await this.locationRepo.findOne({
      where: { location_id: locationId },
    });

    if (existing) {
      throw new ConflictException(`Location dengan id ${locationId} sudah ada`);
    }

    const newLocation = this.locationRepo.create({
      ...dto,
      location_id: locationId,
      detail: dto.addres,
      created_by: userId,
    });

    const saved = await this.locationRepo.save(newLocation);
    this.messageService.setMessage('Berhasil membuat lokasi');
    return saved;
  }

  @Transactional()
  async update(locationId: string, dto: UpdateLocationDto): Promise<void> {
    const location = await this.locationRepo.findOne({
      where: { location_id: locationId },
    });

    if (!location) {
      throw new NotFoundException(
        `Location dengan id ${locationId} tidak ditemukan`,
      );
    }

    Object.assign(location, {
      ...dto,
      detail: dto.addres ?? location.detail,
    });
    await this.locationRepo.save(location);

    this.messageService.setMessage('Berhasil memperbarui lokasi');
  }

  @Transactional()
  async remove(locationId: string): Promise<void> {
    const location = await this.locationRepo.findOne({
      where: { location_id: locationId },
    });

    if (!location) {
      throw new NotFoundException(
        `Location dengan id ${locationId} tidak ditemukan`,
      );
    }

    await this.locationRepo.remove(location);
    this.messageService.setMessage('Berhasil menghapus lokasi');
  }
}
