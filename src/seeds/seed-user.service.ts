import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/app/auth/entitities/role.entity';
import { Menu } from 'src/app/auth/entitities/menu.entity';
import { RoleMenu } from 'src/app/auth/entitities/role-menu.entity';
import { User } from 'src/app/auth/entitities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SeederUser {
  constructor(private dataSource: DataSource) {}

  async run() {
    const roleRepo = this.dataSource.getRepository(Role);
    const menuRepo = this.dataSource.getRepository(Menu);
    const roleMenuRepo = this.dataSource.getRepository(RoleMenu);
    const userRepo = this.dataSource.getRepository(User);

    // --- Seed Roles ---
    const roles = [
      { role_id: uuidv4(), name: 'Manajer', status: 'Active' },
      { role_id: uuidv4(), name: 'Operator', status: 'Active' },
    ];
    const savedRoles = await roleRepo.save(roles);

    // --- Seed Menus ---
    const menus = [
      { menu_id: uuidv4(), name: 'Dashboard', status: 'Active' },
      { menu_id: uuidv4(), name: 'Users', status: 'Active' },
      { menu_id: uuidv4(), name: 'Settings', status: 'Active' },
    ];
    const savedMenus = await menuRepo.save(menus);

    // --- Seed RoleMenu ---
    const roleMenuMap = [
      { roleName: 'Manajer', menuNames: ['Dashboard', 'Users', 'Settings'] },
      { roleName: 'Operator', menuNames: ['Dashboard'] },
    ];

    for (const rm of roleMenuMap) {
      const role = savedRoles.find((r) => r.name === rm.roleName)!; // non-null assertion
      for (const menuName of rm.menuNames) {
        const menu = savedMenus.find((m) => m.name === menuName)!; // non-null assertion

        const entity = roleMenuRepo.create({
          role_id: role.role_id,
          menu_id: menu.menu_id,
          status: 'Active',
        });
        await roleMenuRepo.save(entity);
      }
    }

    // --- Seed Users ---
    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = [
      {
        username: 'admin',
        full_name: 'Admin User',
        name: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: savedRoles.find((r) => r.name === 'Manajer'),
      },
      {
        username: 'operator1',
        full_name: 'Operator User',
        name: 'Operator1',
        email: 'operator1@example.com',
        password: hashedPassword,
        role: savedRoles.find((r) => r.name === 'Operator'),
      },
    ];

    for (const user of users) {
      const entity = userRepo.create(user);
      await userRepo.save(entity);
    }

    console.log('✅ Seeder selesai dijalankan!');
  }
}
