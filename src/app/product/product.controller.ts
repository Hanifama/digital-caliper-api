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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Product')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Endpoint untuk mengambil semua tipe produk
   * @returns Array berisi semua product type
   */
  @Get('type')
  @ApiOperation({ summary: 'Ambil semua tipe produk' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil semua product type',
  })
  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productService.getAllProductTypes();
  }

  /**
   * Endpoint untuk export data produk ke file XLSX
   * @param res Response Express untuk mengirim file
   */
  @Get('export/xlsx')
  @ApiOperation({ summary: 'Export data produk ke XLSX' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengekspor data produk ke XLSX',
  })
  async exportUserHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.productService.exportProduct();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  /**
   * Endpoint untuk mengambil semua data tipe produk dengan pagination
   * @param page Nomor halaman yang ingin diambil
   * @param limit Jumlah data per halaman
   * @param status Filter status (opsional)
   * @param search Kata kunci pencarian (opsional)
   * @returns Wrapper berisi data ProductTypeData sesuai pagination
   */
  @Get('type-data')
  @ApiOperation({ summary: 'Ambil data tipe produk dengan pagination' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Nomor halaman, default 1',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Jumlah data per halaman, default 10',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filter status produk',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Kata kunci pencarian',
  })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data tipe produk',
  })
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
   * Endpoint untuk mengambil data tipe produk berdasarkan ID tipe produk
   * @param prodtypeId ID tipe produk yang ingin diambil
   * @returns Data product type beserta detailnya (GroupedData)
   */
  @Get('type-data/:prodtypeId')
  @ApiOperation({ summary: 'Ambil data tipe produk berdasarkan ID' })
  @ApiParam({
    name: 'prodtypeId',
    description: 'ID tipe produk yang ingin diambil',
  })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data tipe produk berdasarkan ID',
  })
  async getProductTypeDataByTypeId(
    @Param('prodtypeId') prodtypeId: string,
  ): Promise<GroupedData> {
    return this.productService.getProductTypeDataByTypeId(prodtypeId);
  }
}
