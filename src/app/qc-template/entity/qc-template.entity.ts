import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { QcTemplateData } from './qc-template-data.entity';
import { QcPlan } from './qc-plan.entity';
import { QcRecord } from './qc-record.entity';
import { QcTemplateMapping } from './qc-template-data-mapping';
import { Size } from 'src/app/size/entity/size.entity';

@Entity('qc_template')
export class QcTemplate {
  @PrimaryColumn({ length: 25 })
  qc_template_id: string;

  @Column({ length: 25 })
  prodtype_id: string;

  @Column({ length: 25, nullable: true })
  size_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  profile: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  std_dimention: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  brand_merek: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  specification: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 25 })
  status: string;

  @Column({ length: 25 })
  created_by: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  created_dt: Date;

  @Column({ length: 25, nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  updated_dt: Date;

  // relations
  @OneToMany(() => QcTemplateData, (data) => data.qc_template)
  datas: QcTemplateData[];

  @OneToMany(() => QcTemplateMapping, (mapping) => mapping.qc_template)
  mappings: QcTemplateMapping[];

  @OneToMany(() => QcPlan, (plan) => plan.qc_template)
  plans: QcPlan[];

  @OneToMany(() => QcRecord, (record) => record.qc_template)
  records: QcRecord[];

  @ManyToOne(() => Size)
  @JoinColumn({ name: 'size_id' })
  size: Size;
}
