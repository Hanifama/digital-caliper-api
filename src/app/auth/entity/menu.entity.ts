import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { RoleMenu } from './role-menu.entity';

@Entity('menu')
export class Menu {
  @PrimaryColumn({ type: 'varchar', length: 25 })
  menu_id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 15, default: 'active' })
  status: string;

  @OneToMany(() => RoleMenu, (rm) => rm.menu)
  roleMenus: RoleMenu[];
}
