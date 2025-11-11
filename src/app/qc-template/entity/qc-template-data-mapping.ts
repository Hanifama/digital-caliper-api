import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { QcTemplate } from './qc-template.entity';

@Entity('qc_template_mapping')
export class QcTemplateMapping {
  @PrimaryColumn({ length: 25 })
  mapping_id: string;

  @Column({ length: 25 })
  qc_template_id: string;

  @Column({ length: 100 })
  group_name: string; // "Flange Thickness", "Web Thickness", dll

  @Column({ length: 50 })
  position: string; // "t1", "t2", "B1", "H-Top", dll

  @Column('int', { default: 0 })
  order_numb: number;

  // relation
  @ManyToOne(() => QcTemplate, (qc) => qc.mappings)
  @JoinColumn({ name: 'qc_template_id' })
  qc_template: QcTemplate;
}
