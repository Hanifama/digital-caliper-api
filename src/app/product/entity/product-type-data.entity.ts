import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductType } from './product-type.entity';

@Entity('product_type_data')
export class ProductTypeData {
  @PrimaryColumn({ type: 'varchar', length: 25, collation: 'utf8mb4_bin' })
  code: string;

  @PrimaryColumn({ type: 'varchar', length: 25 })
  prodtype_id: string;

  @Column({ type: 'varchar', length: 100 })
  label: string;

  @Column({ type: 'varchar', length: 25 })
  type: string;

  @Column({ type: 'varchar', length: 250 })
  position: string;

  @Column({ type: 'varchar', length: 15 })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  formula: string | null;

  @Column({ type: 'boolean', default: false })
  is_formula: boolean;

  @Column({ type: 'boolean', default: false })
  is_tolerance: boolean;

  @Column({ type: 'boolean', default: false })
  is_readonly: boolean;

  // Relasi ke product_type
  @ManyToOne(() => ProductType, (pt) => pt.productTypeData)
  @JoinColumn({ name: 'prodtype_id' })
  productType: ProductType;
}
