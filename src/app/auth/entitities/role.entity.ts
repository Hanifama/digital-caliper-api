import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { RoleMenu } from './role-menu.entity';

@Entity('role')
export class Role {
  @PrimaryColumn({ type: 'varchar', length: 25 })
  role_id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 15, default: '1' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_dt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_dt: Date;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @OneToMany(() => RoleMenu, (rm) => rm.role)
  roleMenus: RoleMenu[];
}
