import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductType } from './entity/product-type.entity';
import { ProductTypeData } from './entity/product-type-data.entity';
import { MessageModule } from 'src/app/message/message.module';
import { SheetModule } from '../sheet/sheet.module';
import { ProductTypeDataMapping } from './entity/product-type-data-mapping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductType,
      ProductTypeData,
      ProductTypeDataMapping,
    ]),
    MessageModule,
    SheetModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
