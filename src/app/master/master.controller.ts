import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { Role } from '../auth/entitities/role.entity';
import { CurrentUser } from 'src/decorator/user.decorator';
import { JwtAuthGuard } from 'src/guard/jwtAuth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { AssignMenusDto } from './dto/assign-menus-dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Master')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('role')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  /**
   * Endpoint untuk mengambil semua role
   * @param search Kata kunci pencarian role
   * @returns Array berisi semua role
   */
  @Get()
  @ApiOperation({ summary: 'Ambil semua role' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Kata kunci pencarian role',
  })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil semua role' })
  async getAllRoles(@Query('search') search?: string): Promise<Role[]> {
    return this.masterService.getAllRoles(search);
  }

  /**
   * Endpoint untuk mengambil role dengan pagination
   * @param page Nomor halaman yang ingin diambil
   * @param limit Jumlah data per halaman
   * @param search Kata kunci pencarian role
   * @returns Array berisi role sesuai pagination
   */
  @Get('pagination')
  @ApiOperation({ summary: 'Ambil role dengan pagination' })
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
    description: 'Kata kunci pencarian role',
  })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil role dengan pagination',
  })
  async getRolesPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.masterService.getRolesPagination(page, limit, search);
  }

  /**
   * Endpoint untuk mengambil semua menu
   * @returns Array berisi semua menu
   */
  @Get('all-menus')
  @ApiOperation({ summary: 'Ambil semua menu' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil semua menu' })
  async getAllMenus() {
    return this.masterService.getAllMenus();
  }

  /**
   * Endpoint untuk mengambil menu berdasarkan user saat ini
   * @param userId ID user yang sedang login
   * @returns Array berisi menu user
   */
  @Get('menu')
  @ApiOperation({ summary: 'Ambil menu untuk user saat ini' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil menu user' })
  async getMenu(@CurrentUser('id') userId: string) {
    return this.masterService.getMenuByUserId(userId);
  }

  /**
   * Endpoint untuk membuat role baru
   * @param name Nama role yang akan dibuat
   * @param menuIds Daftar menu yang terkait dengan role (opsional)
   * @returns Role baru yang berhasil dibuat
   */
  @Post()
  @ApiOperation({ summary: 'Buat role baru' })
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({ status: 201, description: 'Berhasil membuat role baru' })
  async createRole(@Body() dto: CreateRoleDto) {
    const { name, menuIds } = dto;
    return this.masterService.createRole(name, menuIds);
  }

  /**
   * Endpoint untuk mengambil detail role berdasarkan ID
   * @param roleId ID role yang ingin diambil
   * @returns Detail role
   */
  @Get(':roleId')
  @ApiOperation({ summary: 'Ambil detail role berdasarkan ID' })
  @ApiParam({ name: 'roleId', description: 'ID role yang ingin diambil' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil detail role' })
  async getRoleDetail(@Param('roleId') roleId: string) {
    return this.masterService.getRoleDetail(roleId);
  }

  /**
   * Endpoint untuk memperbarui role berdasarkan ID
   * @param roleId ID role yang ingin diperbarui
   * @param name Nama role baru
   * @param menuIds Daftar menu baru untuk role (opsional)
   * @returns Role yang diperbarui
   */
  @Put(':roleId')
  @ApiOperation({ summary: 'Perbarui role berdasarkan ID' })
  @ApiParam({ name: 'roleId', description: 'ID role yang ingin diperbarui' })
  @ApiBody({ type: UpdateRoleDto })
  @ApiResponse({ status: 200, description: 'Berhasil memperbarui role' })
  async updateRole(
    @Param('roleId') roleId: string,
    @Body() dto: UpdateRoleDto,
  ) {
    const { name, menuIds } = dto;
    return this.masterService.updateRole(roleId, name, menuIds);
  }

  /**
   * Endpoint untuk menghapus role berdasarkan ID
   * @param roleId ID role yang ingin dihapus
   * @returns Pesan sukses penghapusan
   */
  @Delete(':roleId')
  @ApiOperation({ summary: 'Hapus role berdasarkan ID' })
  @ApiParam({ name: 'roleId', description: 'ID role yang ingin dihapus' })
  @ApiResponse({ status: 200, description: 'Berhasil menghapus role' })
  async deleteRole(@Param('roleId') roleId: string) {
    return this.masterService.deleteRole(roleId);
  }

  /**
   * Endpoint untuk menambahkan menu ke role
   * @param roleId ID role yang akan diberikan menu
   * @param menuIds Daftar ID menu yang akan ditambahkan
   * @returns Role dengan menu yang sudah ditambahkan
   */
  @Post(':roleId/menus')
  @ApiOperation({ summary: 'Assign menu ke role' })
  @ApiParam({
    name: 'roleId',
    description: 'ID role yang ingin diberikan menu',
  })
  @ApiBody({ type: AssignMenusDto })
  @ApiResponse({
    status: 200,
    description: 'Berhasil menambahkan menu ke role',
  })
  async assignMenus(
    @Param('roleId') roleId: string,
    @Body() dto: AssignMenusDto,
  ) {
    return this.masterService.assignMenusToRole(roleId, dto.menuIds);
  }
}
