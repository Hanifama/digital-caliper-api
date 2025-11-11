import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('product_type_data_mapping')
export class ProductTypeDataMapping {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 25 })
  prodtype_id: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'varchar', length: 100 })
  group_name: string;

  @Column({ type: 'varchar', length: 50 })
  input_code: string;

  @Column({ type: 'varchar', length: 50 })
  input_label: string;

  @Column({ type: 'varchar', length: 50 })
  position: string;

  @Column({ type: 'boolean', default: false })
  enabled: boolean;
}
