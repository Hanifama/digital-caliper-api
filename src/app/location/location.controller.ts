import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import { CurrentUser } from 'src/decorator/user.decorator';
import { LocationService } from './location.service';
import { Location } from './entity/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Locations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  /**
   * Endpoint untuk mengambil semua lokasi
   * @param page Halaman yang ingin diambil
   * @param limit Jumlah data per halaman
   * @param search Kata kunci untuk pencarian
   * @returns Array berisi lokasi
   */
  @Get()
  @ApiOperation({ summary: 'Ambil semua lokasi' })
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
    type: String,
    description: 'Kata kunci pencarian lokasi',
  })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil semua lokasi' })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.locationService.getAllLocations(page, limit, search);
  }

  /**
   * Endpoint untuk mengambil detail lokasi berdasarkan ID
   * @param locationId ID lokasi
   * @returns Detail lokasi
   */
  @Get(':locationId')
  @ApiOperation({ summary: 'Ambil detail lokasi berdasarkan ID' })
  @ApiParam({ name: 'locationId', description: 'ID lokasi yang ingin diambil' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil detail lokasi' })
  async findOne(@Param('locationId') locationId: string): Promise<Location> {
    return this.locationService.getDetailLocation(locationId);
  }

  /**
   * Endpoint untuk membuat lokasi baru
   * @param dto Data lokasi baru
   * @param userId ID pengguna yang membuat lokasi
   * @returns Lokasi yang baru dibuat
   */
  @Post()
  @ApiOperation({ summary: 'Buat lokasi baru' })
  @ApiResponse({ status: 201, description: 'Berhasil membuat lokasi baru' })
  async create(
    @Body() dto: CreateLocationDto,
    @CurrentUser('id') userId: string,
  ): Promise<Location> {
    return this.locationService.create(dto, userId);
  }

  /**
   * Endpoint untuk memperbarui data lokasi
   * @param locationId ID lokasi yang ingin diperbarui
   * @param dto Data yang akan diperbarui
   */
  @Put(':locationId')
  @ApiOperation({ summary: 'Perbarui data lokasi berdasarkan ID' })
  @ApiParam({
    name: 'locationId',
    description: 'ID lokasi yang ingin diperbarui',
  })
  @ApiResponse({ status: 200, description: 'Berhasil memperbarui lokasi' })
  async update(
    @Param('locationId') locationId: string,
    @Body() dto: UpdateLocationDto,
  ): Promise<void> {
    return this.locationService.update(locationId, dto);
  }

  /**
   * Endpoint untuk menghapus lokasi berdasarkan ID
   * @param locationId ID lokasi yang ingin dihapus
   */
  @Delete(':locationId')
  @ApiOperation({ summary: 'Hapus lokasi berdasarkan ID' })
  @ApiParam({ name: 'locationId', description: 'ID lokasi yang ingin dihapus' })
  @ApiResponse({ status: 200, description: 'Berhasil menghapus lokasi' })
  async remove(@Param('locationId') locationId: string): Promise<void> {
    return this.locationService.remove(locationId);
  }
}
