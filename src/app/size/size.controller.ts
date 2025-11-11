import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { SizeService } from './size.service';

import { Size } from './entity/size.entity';

import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';

@Controller('size')
@UseGuards(JwtAuthGuard)
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  async getAllSizes(@Query('search') search?: string): Promise<Size[]> {
    return this.sizeService.getAllSizes(search);
  }

  @Get('pagination')
  async getSizesPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.sizeService.getSizesPagination(page, limit, search);
  }

  @Get('by-product-type/:prodtypeId')
  async getSizesByProdType(
    @Param('prodtypeId') prodtypeId: string,
  ): Promise<any> {
    return this.sizeService.getSizesByProdType(prodtypeId);
  }

  @Get(':sizeId')
  async getSizeDetail(@Param('sizeId') sizeId: string): Promise<any> {
    return this.sizeService.getSizeDetail(sizeId);
  }
}
