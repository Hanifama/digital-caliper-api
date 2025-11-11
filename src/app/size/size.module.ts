import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';

import { SizeService } from './size.service';
import { SizeController } from './size.controller';

import { Size } from './entity/size.entity';
import { ProductType } from '../product/entity/product-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Size, ProductType]), MessageModule],
  controllers: [SizeController],
  providers: [SizeService],
  exports: [SizeService],
})
export class SizeModule {}
