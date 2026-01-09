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
import { LogService } from '../log-app/log.service';
import { User } from '../auth/entitities/user.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly messageService: MessageService,
    private readonly logService: LogService,
  ) {}

  async getAllLocations(
    userId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
  ): Promise<any> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
      select: ['user_id'],
    });
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

    await this.logService.createLog(user ?? undefined, {
      data_1: 'GET-LOCATION-LIST',
      data_2: `page:${page}, limit:${limit}`,
      data_3: `search:${search?.trim() || '-'}`,
      data_4: `totalData:${totalData}`,
      data_5: `totalPage:${totalPages}`,
    });

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

  async getDetailLocation(userId: string, locationId: string): Promise<any> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
      select: ['user_id'],
    });

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

    await this.logService.createLog(user ?? undefined, {
      data_1: 'GET-LOCATION-DETAIL',
      data_2: `locationId:${locationId}`,
      data_3: `locationName:${location.name}`,
      data_4: `totalUser:${(location as any).total_user ?? 0}`,
      data_5: `requestedBy:${user?.user_id || '-'}`,
    });

    return {
      ...loc,
      created_by: creator?.name || loc.created_by,
    };
  }

  @Transactional()
  async create(dto: CreateLocationDto, userId: string): Promise<Location> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
      select: ['user_id'],
    });

    const locationId = dto.location_id ?? `LOC-${uuidv4()}`;

    const existing = await this.locationRepo.findOne({
      where: { location_id: locationId },
    });

    if (existing) {
      throw new ConflictException(`Location dengan id ${locationId} sudah ada`);
    }

    const newLocation = this.locationRepo.create({
      location_id: locationId,
      name: dto.name,
      longitude: dto.longitude,
      latitude: dto.latitude,
      detail: dto.addres,
      wa_group: dto.wa_group,
      created_by: userId,
    });

    const saved = await this.locationRepo.save(newLocation);

    await this.logService.createLog(user ?? undefined, {
      data_1: 'CREATE-LOCATION',
      data_2: `locationId:${saved.location_id}`,
      data_3: `locationName:${saved.name}`,
      data_4: `waGroup:${saved.wa_group || '-'}`,
      data_5: `createdBy:${user?.user_id || '-'}`,
    });

    this.messageService.setMessage('Berhasil membuat lokasi');
    return saved;
  }

  @Transactional()
  async update(
    userId: string,
    locationId: string,
    dto: UpdateLocationDto,
  ): Promise<void> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
      select: ['user_id'],
    });

    const location = await this.locationRepo.findOne({
      where: { location_id: locationId },
    });

    if (!location) {
      throw new NotFoundException(
        `Location dengan id ${locationId} tidak ditemukan`,
      );
    }

    // simpan data lama (untuk log)
    const before = {
      name: location.name,
      longitude: location.longitude,
      latitude: location.latitude,
      wa_group: location.wa_group,
      detail: location.detail,
    };

    Object.assign(location, {
      name: dto.name ?? location.name,
      longitude: dto.longitude ?? location.longitude,
      latitude: dto.latitude ?? location.latitude,
      wa_group: dto.wa_group ?? location.wa_group,
      detail: dto.addres ?? location.detail,
    });

    await this.locationRepo.save(location);

    // susun perubahan (ringkas tapi informatif)
    const changes: string[] = [];

    if (dto.name && dto.name !== before.name) {
      changes.push(`name:${before.name}→${dto.name}`);
    }
    if (dto.longitude && dto.longitude !== before.longitude) {
      changes.push(`longitude:${before.longitude}→${dto.longitude}`);
    }
    if (dto.latitude && dto.latitude !== before.latitude) {
      changes.push(`latitude:${before.latitude}→${dto.latitude}`);
    }
    if (dto.wa_group && dto.wa_group !== before.wa_group) {
      changes.push(`wa_group:${before.wa_group || '-'}→${dto.wa_group}`);
    }
    if (dto.addres && dto.addres !== before.detail) {
      changes.push(`detail:updated`);
    }

    await this.logService.createLog(user ?? undefined, {
      data_1: 'UPDATE-LOCATION',
      data_2: `locationId:${locationId}`,
      data_3: `locationName:${location.name}`,
      data_4: `changedField:${changes.join(', ') || '-'}`,
      data_5: `updatedBy:${user?.user_id || '-'}`,
    });

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
