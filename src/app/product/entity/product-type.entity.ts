import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ProductTypeData } from './product-type-data.entity';
import { Size } from 'src/app/size/entity/size.entity';

@Entity('product_type')
export class ProductType {
  @PrimaryColumn({ type: 'varchar', length: 25 })
  prodtype_id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  status: string;

  // Relasi ke product_type_data
  @OneToMany(() => ProductTypeData, (ptd) => ptd.productType)
  productTypeData: ProductTypeData[];

  // Relasi ke Size
  @OneToMany(() => Size, (size) => size.productType)
  sizes: Size[];
}
