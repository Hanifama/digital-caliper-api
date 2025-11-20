import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';
import { QcTemplate } from './qc-template.entity';
import { Location } from 'src/app/location/entity/location.entity';

@Entity('qc_plan')
export class QcPlan {
  @PrimaryColumn({ length: 50 })
  qc_id: string;

  @Column({ length: 25 })
  qc_template_id: string;

  @Column({ length: 25, nullable: true })
  location_id: string;

  @Column({ length: 25, nullable: true })
  size: string;

  @Column({ length: 50, nullable: true })
  product: string;

  @Column({ length: 50, nullable: true })
  profile: string;

  @Column({ length: 50, nullable: true })
  brand_merek: string;

  @Column({ length: 50, nullable: true })
  specifications: string;

  @Column({ length: 50, nullable: true })
  dimension: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ length: 150, nullable: true })
  file_name: string;

  @Column({ length: 25, nullable: true })
  std_grad: string;

  @Column('float', { nullable: true })
  kgm_nominal: number;

  @Column({ length: 25, nullable: true })
  campaign_no: string;

  @Column('int', { nullable: true })
  sequence_no: number;

  @Column({ length: 25, nullable: true })
  pattern: string;

  @Column('float', { nullable: true })
  heat_number: number;

  @Column('int', { nullable: true })
  bloom_number: number;

  @Column({ length: 15, nullable: true })
  type_material: string;

  @Column('float', { nullable: true })
  thick: number;

  @Column('float', { nullable: true })
  width: number;

  @Column('float', { nullable: true })
  length: number;

  @Column('float', { nullable: true })
  kg_m: number;

  @Column('float', { nullable: true })
  weight: number;

  @Column('int', { nullable: true })
  order_number: number;

  @Column('int', { nullable: true })
  item_number: number;

  @Column('float', { nullable: true })
  h: number;

  @Column('float', { nullable: true })
  b: number;

  @Column('float', { nullable: true })
  thicknees_web: number;

  @Column('float', { nullable: true })
  thicknes_flange: number;

  @Column('int', { nullable: true })
  pcs: number;

  @Column({ length: 25, nullable: true })
  spec: string;

  @Column('float', { nullable: true })
  ce: number;

  @Column('float', { nullable: true })
  finish_temp: number;

  @Column({ nullable: true })
  charging_time: Date;

  @Column({ nullable: true })
  discharging_time: Date;

  @Column('float', { nullable: true })
  process_time: number;

  @Column({ length: 150, nullable: true })
  remarks: string;

  @Column({ length: 20, nullable: true })
  status: string;

  @Column({ length: 50 })
  created_by: string;

  @Column()
  created_dt: Date;

  @Column({ length: 50, nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  updated_dt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @ManyToOne(() => QcTemplate, (qc) => qc.plans)
  @JoinColumn({ name: 'qc_template_id' })
  qc_template: QcTemplate;

  @ManyToOne(() => Location, { eager: false })
  @JoinColumn({ name: 'location_id', referencedColumnName: 'location_id' })
  location: Location;
}
