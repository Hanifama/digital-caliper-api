import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

import { PasswordService } from '../auth/password.service';
import { MessageService } from '../message/message.service';
import { Transactional } from 'typeorm-transactional';

import { User } from '../auth/entitities/user.entity';
import { Role } from '../auth/entitities/role.entity';

import { UpdateUserDto } from './dto/updateUser.dto';
import { ERole } from 'src/types/enum/ERole.enum';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { SheetService } from '../sheet/sheet.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseDto } from './interface/userResponse';
import { Location } from '../location/entity/location.entity';
import { UpdateProfileDto } from './dto/updateProfile.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,

    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,

    private readonly passwordService: PasswordService,
    private readonly messageService: MessageService,

    private readonly sheetService: SheetService,
  ) {}

  /**
   * Generate user_id pakai nama role sebagai prefix
   */
  private generateUserId(roleName: string): string {
    if (!roleName)
      throw new Error('Role name harus diisi untuk generate user_id');
    // replace spasi & uppercase lowercase
    const prefix = roleName.toLowerCase().replace(/\s+/g, '');
    return `${prefix}-${uuidv4()}`;
  }

  private safeUser(user: User) {
    const { password, role, location, ...rest } = user;
    return {
      ...rest,
      role_id: role?.role_id,
      role_name: role?.name,
      role_status: role?.status,
      location_id: location?.location_id,
      location_name: location?.name,
      NIK: rest.NIK,
    };
  }

  /**
   * Membuat pengguna baru
   */
  private async createUser(dto: CreateUserDto): Promise<User> {
    if (!dto.roleId) {
      throw new BadRequestException('Role harus dipilih sebelum register.');
    }

    const role = await this.userRepo.manager.findOne(Role, {
      where: { role_id: dto.roleId },
    });
    if (!role) throw new BadRequestException('Role tidak ditemukan.');

    const location = await this.locationRepo.manager.findOne(Location, {
      where: { location_id: dto.locationId },
    });
    if (!location) throw new BadRequestException('Location tidak ditemukan.');

    const hashedPassword = await this.passwordService.hashPassword(
      dto.password,
    );

    const user = this.userRepo.create({
      user_id: this.generateUserId(role.name),
      username: dto.username,
      full_name: dto.full_name,
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      NIK: dto.NIK,
      departement: dto.departement,
      role,
      location,
      image: dto.image,
    });

    return await this.userRepo.save(user);
  }

  /**
   * Mendapatkan list pengguna
   */
  public async getAllUser(
    page: number = 1,
    limit: number = 10,
    role?: ERole,
    search?: string,
    status?: number,
  ): Promise<IResponsePageWrapper<any>> {
    const offset = (page - 1) * limit;

    // Query utama: ambil user + role + location
    const usersQuery = this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role') // ambil semua field role
      .leftJoinAndSelect('user.location', 'location'); // ambil semua field location

    // Filter role
    if (role) usersQuery.andWhere('role.name = :role', { role });

    // Filter search
    if (search) {
      const searchLower = `%${search.toLowerCase()}%`;
      usersQuery.andWhere(
        '(LOWER(user.name) LIKE :search OR LOWER(user.email) LIKE :search OR LOWER(user.departement) LIKE :search)',
        { search: searchLower },
      );
    }

    // Filter status
    if (status !== undefined)
      usersQuery.andWhere('user.status = :status', { status });

    // Sorting + paging
    usersQuery.orderBy('user.user_id', 'DESC').offset(offset).limit(limit);

    // Ambil data user + total count
    const [users, totalData] = await usersQuery.getManyAndCount();
    const totalPages = Math.ceil(totalData / limit);

    // Mapping hasil user + role + location langsung di root object
    const result = users.map((user) => {
      const safeUserData = this.safeUser(user);

      return {
        ...safeUserData,
        role_id: user.role?.role_id,
        role_name: user.role?.name,
        role_status: user.role?.status,
        location_id: user.location?.location_id || null,
        location_name: user.location?.name || null,
      };
    });

    this.messageService.setMessage('Berhasil memuat daftar user');

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

  /**
   * Export XLSX list pengguna
   */
  public async exportUser(): Promise<{ filename: string; buffer: Buffer }> {
    // ambil semua user
    const users: User[] = await this.userRepo.find({
      relations: ['role'],
    });

    // mapping ke format Excel
    const formatedData = users.map((user) => ({
      'User ID': user.user_id,
      'Nama Lengkap': user.name,
      Email: user.email,
      Departemen: user.departement,
      'Last Login': user.last_login ? user.last_login.toISOString() : '',
      Status: user.status,
      'Role Name': user.role?.name,
    }));

    const filename = `data-user-${Date.now()}.xlsx`;
    const buffer: Buffer = this.sheetService.exportDataToExcel(
      formatedData,
      filename,
    );

    this.messageService.setMessage('Berhasil export user!');

    return { filename, buffer };
  }

  /**
   * Mendapatkan list pengguna by userId
   */
  public async getUser(userId: string): Promise<any> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role', 'location'],
    });

    if (!user) throw new NotFoundException('User tidak ditemukan');

    this.messageService.setMessage('Berhasil memuat detail user.');

    return {
      user_id: user.user_id,
      username: user.username,
      full_name: user.full_name,
      name: user.name,
      email: user.email,
      departement: user.departement,
      image: user.image,
      last_login: user.last_login,
      status: user.status,
      role_id: user.role?.role_id,
      role_name: user.role?.name,
      location_id: user.location?.location_id,
      location_name: user.location?.name,
    };
  }

  /**
   * Mendapatkan Profile pengguna
   */
  public async getProfile(userId: string) {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role', 'role.roleMenus', 'role.roleMenus.menu'],
    });

    if (!user) throw new NotFoundException('User tidak ditemukan');

    // Ambil menu yang bisa diakses dari role
    const accessibleMenus = user.role.roleMenus
      .filter((rm) => rm.status === 'active' && rm.menu.status === 'active')
      .map((rm) => ({
        menu_id: rm.menu.menu_id,
        name: rm.menu.name,
        status: rm.menu.status,
      }));

    const safeUser = this.safeUser(user);

    this.messageService.setMessage('Berhasil mengambil profil user');

    return {
      ...safeUser,
      menus: accessibleMenus,
    };
  }

  /**
   * Update Profile pengguna
   */
  @Transactional()
  public async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
    });
    if (!user) throw new NotFoundException('User tidak ditemukan');

    if (dto.full_name !== undefined) user.full_name = dto.full_name;
    if (dto.name !== undefined) user.name = dto.name;

    if (dto.email !== undefined && dto.email !== user.email) {
      const existing = await this.userRepo.findOne({
        where: { email: dto.email },
      });
      if (existing && existing.user_id !== userId)
        throw new BadRequestException('Email sudah digunakan');
      user.email = dto.email;
    }

    if (dto.departement !== undefined) user.departement = dto.departement;

    // Update NIK
    if (dto.NIK !== undefined && dto.NIK !== user.NIK) {
      const existing = await this.userRepo.findOne({
        where: { NIK: dto.NIK },
      });
      if (existing && existing.user_id !== userId)
        throw new BadRequestException('NIK sudah digunakan');
      user.NIK = dto.NIK;
    }

    await this.userRepo.save(user);
    this.messageService.setMessage('Profile berhasil diperbarui');
  }

  /**
   * Mengedit list pengguna
   */
  @Transactional()
  public async updateUser(userId: string, dto: UpdateUserDto): Promise<void> {
    // Ambil user beserta relasi role dan location
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role', 'location'],
    });
    if (!user) throw new NotFoundException('User tidak ditemukan');

    // Update name
    if (dto.name !== undefined) user.name = dto.name;

    // Update full_name
    if (dto.full_name !== undefined) user.full_name = dto.full_name;

    // Update email dengan validasi uniqueness
    if (dto.email !== undefined && dto.email !== user.email) {
      const existing = await this.userRepo.findOne({
        where: { email: dto.email },
      });
      if (existing && existing.user_id !== userId)
        throw new BadRequestException('Email sudah digunakan');
      user.email = dto.email;
    }

    // Update departement
    if (dto.departement !== undefined) user.departement = dto.departement;

    // Update NIK
    if (dto.NIK !== undefined && dto.NIK !== user.NIK) {
      const existing = await this.userRepo.findOne({
        where: { NIK: dto.NIK },
      });
      if (existing && existing.user_id !== userId)
        throw new BadRequestException('NIK sudah digunakan');
      user.NIK = dto.NIK;
    }

    // Update role
    if (dto.roleId !== undefined && dto.roleId !== user.role.role_id) {
      const role = await this.roleRepo.findOne({
        where: { role_id: dto.roleId },
      });
      if (!role) throw new BadRequestException('Role tidak ditemukan.');
      user.role = role;
    }

    // Update location
    if (
      dto.locationId !== undefined &&
      dto.locationId !== user.location?.location_id
    ) {
      const location = await this.locationRepo.findOne({
        where: { location_id: dto.locationId },
      });
      if (!location) throw new BadRequestException('Location tidak ditemukan.');
      user.location = location;
    }

    // Update status
    if (dto.status !== undefined) user.status = dto.status;

    // Simpan perubahan
    await this.userRepo.save(user);
    this.messageService.setMessage('User berhasil diperbarui.');
  }

  /**
   * Membuat pengguna baru
   */
  @Transactional()
  async register(dto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const savedUser = await this.createUser(dto);

      this.messageService.setMessage('Register akun berhasil.');

      return {
        id: savedUser.user_id,
        username: savedUser.username,
        full_name: savedUser.full_name,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role?.name,
        departement: savedUser.departement,
        NIK: savedUser.NIK,
        image: savedUser.image,
        status: savedUser.status,
      };
    } catch (error) {
      // Tangani error duplicate email (MySQL)
      if (error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException(
          'Email sudah terdaftar, silakan gunakan email lain.',
        );
      }
      // Tangani error unique violation (Postgres)
      if (error.code === '23505') {
        throw new BadRequestException(
          'Email sudah terdaftar, silakan gunakan email lain.',
        );
      }
      throw error;
    }
  }

  /**
   * Menghapus pengguna
   */
  @Transactional()
  public async deleteUser(userId: string): Promise<void> {
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) {
      throw new NotFoundException('User tidak ditemukan.');
    }

    await this.userRepo.remove(user);

    this.messageService.setMessage('User berhasil dihapus.');
  }

  /**
   * Update Password pengguna
   */
  public async updatePassword(
    userId: string,
    newPassword: string,
  ): Promise<void> {
    const user = await this.userRepo.findOne({ where: { user_id: userId } });
    if (!user) throw new NotFoundException('User tidak ditemukan.');

    user.password = await this.passwordService.hashPassword(newPassword);
    await this.userRepo.save(user);
    this.messageService.setMessage('Password berhasil diperbarui.');
  }
}
