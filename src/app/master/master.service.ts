import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';

import { Role } from '../auth/entitities/role.entity';
import { RoleMenu } from '../auth/entitities/role-menu.entity';
import { Menu } from '../auth/entitities/menu.entity';
import { User } from '../auth/entitities/user.entity';

import { v4 as uuidv4 } from 'uuid';

import { MessageService } from '../message/message.service';

@Injectable()
export class MasterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,

    @InjectRepository(RoleMenu)
    private readonly roleMenuRepo: Repository<RoleMenu>,

    @InjectRepository(Menu)
    private readonly menuRepo: Repository<Menu>,

    private readonly messageService: MessageService,
  ) {}

  // get role dengan pagination dan search (lengkap)
  async getRolesPagination(
    page: number = 1,
    limit: number = 10,
    search?: string,
  ) {
    const offset = (page - 1) * limit;

    // Query builder untuk data
    const query = this.roleRepo.createQueryBuilder('role');

    // Query builder untuk total data (count)
    const countQuery = this.roleRepo.createQueryBuilder('role');

    // Filter search
    if (search && search.trim() !== '' && search !== '{{search}}') {
      query.andWhere('role.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
      countQuery.andWhere('role.name LIKE :search', {
        search: `%${search.trim()}%`,
      });
    }

    // Select semua field + total_user
    query
      .select([
        'role.role_id AS role_id',
        'role.name AS name',
        'role.status AS status',
        'role.created_dt AS created_dt',
        'role.updated_dt AS updated_dt',
      ])
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(user.user_id)', 'total_user')
          .from(User, 'user')
          .where('user.role_id = role.role_id');
      }, 'total_user')
      .orderBy('role.created_dt', 'DESC')
      .offset(offset)
      .limit(limit);

    // Eksekusi query
    const [rolesRaw, totalData] = await Promise.all([
      query.getRawMany(),
      countQuery.getCount(),
    ]);

    // Hitung total halaman
    const totalPages = Math.ceil(totalData / limit);

    // Mapping hasil raw ke object yang rapi
    const result = rolesRaw.map((r) => ({
      role_id: r.role_id,
      name: r.name,
      status: r.status,
      created_dt: r.created_dt,
      updated_dt: r.updated_dt,
      total_user: parseInt(r.total_user, 10),
    }));

    this.messageService.setMessage('Berhasil memuat daftar role');

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

  // Ambil semua role
  async getAllRoles(search?: string): Promise<Role[]> {
    const query = this.roleRepo.createQueryBuilder('role');

    if (search && search.trim() !== '' && search !== '{{search}}') {
      query.where('role.name LIKE :search', { search: `%${search.trim()}%` });
    }

    const roles = await query.getMany();

    this.messageService.setMessage('Berhasil memuat daftar role');
    return roles;
  }

  // Ambil detail role
  async getRoleDetail(roleId: string) {
    const roleDetail = await this.roleRepo
      .createQueryBuilder('role')
      .leftJoinAndSelect(
        'role.roleMenus',
        'roleMenu',
        'roleMenu.status = :status',
        { status: 'active' },
      )
      .leftJoinAndSelect('roleMenu.menu', 'menu')
      .loadRelationCountAndMap('role.total_user', 'role.users')
      .where('role.role_id = :roleId', { roleId })
      .getOne();

    if (!roleDetail) throw new NotFoundException('Role tidak ditemukan');

    const menus = roleDetail.roleMenus
      .map((rm) => {
        if (!rm.menu) return null;
        return {
          menu_id: rm.menu.menu_id,
          name: rm.menu.name,
          status: rm.menu.status,
        };
      })
      .filter(Boolean);

    this.messageService.setMessage('Berhasil memuat detail role');

    return {
      role_id: roleDetail.role_id,
      name: roleDetail.name,
      status: roleDetail.status,
      created_dt: roleDetail.created_dt,
      updated_dt: roleDetail.updated_dt,
      total_user: roleDetail['total_user'] || 0,
      menus,
    };
  }

  // Ambil semua menu
  async getAllMenus(): Promise<Menu[]> {
    const menus = await this.menuRepo.find();
    if (!menus.length)
      throw new NotFoundException('Belum ada menu yang terdaftar');

    this.messageService.setMessage('Berhasil memuat semua menu');
    return menus;
  }

  // Ambil menu berdasarkan akses role
  async getMenuByUserId(userId: string): Promise<Menu[]> {
    // Cari user dan role-nya
    const user = await this.userRepo.findOne({
      where: { user_id: userId },
      relations: ['role'],
    });

    if (!user) throw new NotFoundException('User tidak ditemukan');
    if (!user.role) throw new NotFoundException('User tidak memiliki role');

    // Ambil menu berdasarkan role_id dengan status active
    const roleMenus = await this.roleMenuRepo.find({
      where: { role_id: user.role.role_id, status: 'active' },
      relations: ['menu'],
    });

    // Filter menu yang juga aktif
    const activeMenus = roleMenus
      .filter((rm) => rm.menu.status === 'active')
      .map((rm) => rm.menu);

    if (!activeMenus.length) {
      throw new NotFoundException('Role belum memiliki menu aktif');
    }

    this.messageService.setMessage('Berhasil memuat akses menu');
    return activeMenus;
  }

  // Create role + assign menu
  @Transactional()
  async createRole(name: string, menuIds?: string[]): Promise<Role> {
    const roleId = uuidv4().replace(/-/g, '').substring(0, 25);
    const role = this.roleRepo.create({
      role_id: roleId,
      name,
      status: 'active',
    });
    const savedRole = await this.roleRepo.save(role);

    if (menuIds && menuIds.length) {
      const roleMenus = menuIds.map((menuId) =>
        this.roleMenuRepo.create({
          role_id: roleId,
          menu_id: menuId,
          status: 'active',
        }),
      );
      await this.roleMenuRepo.save(roleMenus);
    }

    this.messageService.setMessage('Berhasil membuat role dan assign menu');
    return savedRole;
  }

  // Update role + assign menu
  @Transactional()
  async updateRole(
    roleId: string,
    name: string,
    menuIds?: string[],
  ): Promise<Role> {
    const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
    if (!role) throw new NotFoundException('Role tidak ditemukan');

    role.name = name;
    const updatedRole = await this.roleRepo.save(role);

    // assign menu kalau ada
    if (menuIds) {
      // hapus mapping lama
      await this.roleMenuRepo.delete({ role_id: roleId });

      // buat mapping baru
      const roleMenus = menuIds.map((menuId) =>
        this.roleMenuRepo.create({
          role_id: roleId,
          menu_id: menuId,
          status: 'active',
        }),
      );
      await this.roleMenuRepo.save(roleMenus);
    }

    this.messageService.setMessage('Berhasil update role dan assign menu');
    return updatedRole;
  }

  async deleteRole(roleId: string): Promise<void> {
    const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
    if (!role) throw new NotFoundException('Role tidak ditemukan');

    await this.roleMenuRepo.delete({ role_id: roleId });

    await this.roleRepo.delete({ role_id: roleId });

    this.messageService.setMessage('Role berhasil dihapus');
  }

  @Transactional()
  async assignMenusToRole(roleId: string, menuIds: string[]) {
    const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
    if (!role) throw new NotFoundException('Role tidak ditemukan');

    // hapus mapping lama dulu
    await this.roleMenuRepo.delete({ role_id: roleId });

    // buat mapping baru
    const roleMenus = menuIds.map((menuId) =>
      this.roleMenuRepo.create({
        role_id: roleId,
        menu_id: menuId,
        status: 'active',
      }),
    );

    const saved = await this.roleMenuRepo.save(roleMenus);

    this.messageService.setMessage('Menu berhasil di-assign ke role');
    return saved;
  }
}
