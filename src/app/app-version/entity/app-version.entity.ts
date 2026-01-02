import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'app_versions' })
@Unique(['versionCode', 'platform'])
export class AppVersion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'version_code', type: 'varchar', length: 50 })
  versionCode: string;

  @Column({ type: 'varchar', length: 50 })
  platform: string;

  @Column({
    name: 'version_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  versionName?: string;

  @Column({ name: 'version_description', type: 'text' })
  versionDescription: string;

  @Column({ name: 'is_latest', type: 'boolean', default: false })
  isLatest: boolean;

  @Column({ name: 'is_allowed', type: 'boolean', default: true })
  isAllowed: boolean;

  @Column({ name: 'released_date', type: 'timestamp' })
  releasedDate: Date;

  @Column({ name: 'created_by', type: 'varchar', length: 100 })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'varchar', length: 100 })
  updatedBy: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'now()',
  })
  updatedAt: Date;
}
