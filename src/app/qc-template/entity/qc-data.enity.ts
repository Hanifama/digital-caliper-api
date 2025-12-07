import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { QcRecord } from './qc-record.entity';

@Entity('qc_data')
export class QcData {
  @PrimaryColumn({ length: 25 })
  qc_data_id: string;

  @Column({ length: 25 })
  qc_id: string;

  @Column()
  sequence_no: number;

  @Column({ length: 25 })
  location_id: string;

  @Column({ length: 10 })
  piece_no: string;

  @Column({ length: 25 })
  input_code: string;

  @Column('float')
  input_value: number;

  @Column('float')
  err_tolerance: number;

  @Column({ length: 15 })
  status: string;

  @Column({ length: 15 })
  notified: string;

  @Column({ length: 250 })
  position: string;

  // relation
  @ManyToOne(() => QcRecord, (qc) => qc.datas)
  @JoinColumn([
    { name: 'qc_id', referencedColumnName: 'qc_id' },
    { name: 'sequence_no', referencedColumnName: 'sequence_no' },
    { name: 'piece_no', referencedColumnName: 'piece_no' },
    { name: 'location_id', referencedColumnName: 'location_id' },
  ])
  qc_record: QcRecord;
}
