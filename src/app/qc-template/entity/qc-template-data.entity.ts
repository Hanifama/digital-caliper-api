import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { QcTemplate } from './qc-template.entity';

@Entity('qc_template_data')
export class QcTemplateData {
  @PrimaryColumn({ length: 25 })
  input_code: string;

  @PrimaryColumn({ length: 25 })
  qc_template_id: string;

  @Column({ length: 25 })
  label: string;

  @Column({ length: 25 })
  input_type: string;

  // 5 TOLERANCE VALUES
  @Column('float', { nullable: true })
  min_tolerance: number;

  @Column('float', { nullable: true })
  t_lt_50_tolerance: number;

  @Column('float', { nullable: true })
  nominal_tolerance: number;

  @Column('float', { nullable: true })
  t_gt_50_tolerance: number;

  @Column('float', { nullable: true })
  max_tolerance: number;

  @Column('float', { nullable: true })
  actual_tolerance: number;

  @Column('int', { nullable: true })
  order_numb: number;

  @Column({ type: 'boolean', default: true })
  enabled: boolean;

  @Column({ length: 90, nullable: true })
  sound: string;

  // SIMPLIFY: Hanya position dan group_name
  @Column({ length: 50, nullable: true })
  position: string;

  @Column({ length: 100, nullable: true })
  group_name: string;

  // relation
  @ManyToOne(() => QcTemplate, (qc) => qc.datas)
  @JoinColumn({ name: 'qc_template_id' })
  qc_template: QcTemplate;
}
