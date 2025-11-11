import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Menu } from './menu.entity';

@Entity('role_menu')
export class RoleMenu {
  @PrimaryColumn({ type: 'varchar', length: 25 })
  menu_id: string;

  @PrimaryColumn({ type: 'varchar', length: 25 })
  role_id: string;

  @ManyToOne(() => Role, (role) => role.roleMenus)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Menu, (menu) => menu.roleMenus)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @Column({ type: 'varchar', length: 25, default: 'active' })
  status: string;
}
