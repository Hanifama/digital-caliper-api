import { User } from 'src/app/auth/entitities/user.entity';
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryColumn({ length: 25 })
  location_id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 30, nullable: true })
  longitude: string;

  @Column({ length: 30, nullable: true })
  latitude: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column({ length: 100, nullable: true })
  wa_group: string;

  @Column({ length: 10, default: 'active' })
  status: string;

  @Column({ length: 50, nullable: true })
  created_by: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => User, (user) => user.location)
  users: User[];

  @ManyToOne(() => User, { eager: false })
  @JoinColumn({ name: 'created_by', referencedColumnName: 'user_id' })
  creator: User;
}
