import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity('log')
export class Log {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  log_id: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  data_1: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  data_2: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  data_3: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  data_4: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  data_5: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  created_dt: Date;

  @BeforeInsert()
  generateId() {
    this.log_id = uuidv4();
  }
}
