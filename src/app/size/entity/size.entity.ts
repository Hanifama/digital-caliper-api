import { ProductType } from 'src/app/product/entity/product-type.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('size')
export class Size {
  @PrimaryColumn({ length: 25 })
  size_id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 25 })
  prodtype_id: string;

  @ManyToOne(() => ProductType, (pt) => pt.sizes)
  @JoinColumn({ name: 'prodtype_id' })
  productType: ProductType;

  @Column({ length: 15, default: 'active' })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_dt' })
  created_dt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_dt' })
  updated_dt: Date;
}
