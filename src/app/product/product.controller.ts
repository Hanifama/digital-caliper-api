import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';

import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';

import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';

import { ProductType } from './entity/product-type.entity';
import { ProductTypeData } from './entity/product-type-data.entity';
import { ProductService } from './product.service';
import { GroupedData } from './interfaces/GroupedProductTypeData';

@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Ambil semua product type
   */
  @Get('type')
  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productService.getAllProductTypes();
  }

  /**
   * Export Product
   */
  @Get('export/xlsx')
  protected async exportUserHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.productService.exportProduct();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  /**
   * Ambil semua product type data dengan pagination
   */
  @Get('type-data')
  async getAllProductTypeData(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('status') status?: string,
    @Query('search') search?: string,
  ): Promise<IResponsePageWrapper<ProductTypeData>> {
    return this.productService.getAllProductTypeData(
      page,
      limit,
      status,
      search,
    );
  }

  /**
   * Ambil product type data berdasarkan prodtype_id
   */
  @Get('type-data/:prodtypeId')
  async getProductTypeDataByTypeId(
    @Param('prodtypeId') prodtypeId: string,
  ): Promise<GroupedData> {
    return this.productService.getProductTypeDataByTypeId(prodtypeId);
  }
}
