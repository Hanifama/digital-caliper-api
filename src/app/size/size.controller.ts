import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

import { SizeService } from './size.service';
import { Size } from './entity/size.entity';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';

@ApiTags('Sizes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  /**
   * Ambil semua ukuran
   * @param search Kata kunci pencarian ukuran (opsional)
   * @returns Array berisi semua ukuran
   */
  @Get()
  @ApiOperation({ summary: 'Ambil semua ukuran' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Kata kunci pencarian ukuran',
  })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil semua ukuran' })
  async getAllSizes(@Query('search') search?: string): Promise<Size[]> {
    return this.sizeService.getAllSizes(search);
  }

  /**
   * Ambil ukuran dengan pagination
   * @param page Nomor halaman, default 1
   * @param limit Jumlah data per halaman, default 10
   * @param search Kata kunci pencarian ukuran (opsional)
   * @returns Array berisi ukuran sesuai pagination
   */
  @Get('pagination')
  @ApiOperation({ summary: 'Ambil ukuran dengan pagination' })
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
    name: 'search',
    required: false,
    description: 'Kata kunci pencarian ukuran',
  })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil ukuran dengan pagination',
  })
  async getSizesPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.sizeService.getSizesPagination(page, limit, search);
  }

  /**
   * Ambil ukuran berdasarkan product type
   * @param prodtypeId ID product type
   * @returns Array berisi ukuran yang terkait dengan product type
   */
  @Get('by-product-type/:prodtypeId')
  @ApiOperation({ summary: 'Ambil ukuran berdasarkan product type' })
  @ApiParam({ name: 'prodtypeId', description: 'ID product type' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil ukuran berdasarkan product type',
  })
  async getSizesByProdType(
    @Param('prodtypeId') prodtypeId: string,
  ): Promise<any> {
    return this.sizeService.getSizesByProdType(prodtypeId);
  }

  /**
   * Ambil detail ukuran berdasarkan ID
   * @param sizeId ID ukuran
   * @returns Detail ukuran
   */
  @Get(':sizeId')
  @ApiOperation({ summary: 'Ambil detail ukuran berdasarkan ID' })
  @ApiParam({ name: 'sizeId', description: 'ID ukuran' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil detail ukuran' })
  async getSizeDetail(@Param('sizeId') sizeId: string): Promise<any> {
    return this.sizeService.getSizeDetail(sizeId);
  }
}
