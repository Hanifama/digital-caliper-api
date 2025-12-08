import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Put,
  UseGuards,
  ParseIntPipe,
  DefaultValuePipe,
  Res,
  Post,
  Delete,
} from '@nestjs/common';
import type { Response } from 'express';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../guard/jwtAuth.guard';
import { RoleGuard } from '../../guard/role.guard';
import { Roles } from '../../decorator/roles.decorator';
import { ERole } from '../../types/enum/ERole.enum';
import { User } from '../auth/entitities/user.entity';
import { UpdatePasswordDto, UpdateUserDto } from './dto/updateUser.dto';
import { IResponsePageWrapper } from 'src/types/interface/IResPageWrapper.interface';
import { CurrentUser } from 'src/decorator/user.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Ambil semua user (Hanya untuk Manajer)
   * @param page Nomor halaman
   * @param limit Jumlah data per halaman
   * @param role Filter berdasarkan role
   * @param search Kata kunci pencarian
   * @param status Filter status user
   * @returns Data user dalam format paginasi
   */
  @Get()
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Ambil semua user (Hanya Manajer)' })
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
    name: 'role',
    required: false,
    enum: ERole,
    description: 'Filter berdasarkan role',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Kata kunci pencarian',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    type: Number,
    description: 'Status user',
  })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil semua user' })
  getAllUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('role') role?: ERole,
    @Query('search') search?: string,
    @Query('status') status?: number,
  ): Promise<IResponsePageWrapper<User>> {
    return this.userService.getAllUser(page, limit, role, search, status);
  }

  /**
   * Buat user baru (Hanya untuk Manajer)
   * @param dto Data user baru
   * @returns User baru yang berhasil dibuat
   */
  @Post('create')
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Buat user baru (Hanya Manajer)' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Berhasil membuat user baru' })
  async register(@Body() dto: CreateUserDto) {
    return this.userService.register(dto);
  }

  /**
   * Export user ke XLSX (Hanya untuk Manajer)
   * @param res Response untuk mengirim file XLSX
   */
  @Get('export/xlsx')
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Export user ke XLSX (Hanya Manajer)' })
  @ApiResponse({ status: 200, description: 'Berhasil mengekspor data user' })
  protected async exportUserHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.userService.exportUser();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  /**
   * Ambil profile user saat ini
   * @param userId ID user yang sedang login
   * @returns Detail profile user
   */
  @Get('profile')
  // @Roles(ERole.MANAJER, ERole.OPERATOR)
  @ApiOperation({ summary: 'Ambil profile user saat ini' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil profile user' })
  getProfile(@CurrentUser('id') userId: string) {
    return this.userService.getProfile(userId);
  }

  /**
   * Update profile user saat ini
   * @param userId ID user yang sedang login
   * @param dto Data update profile
   * @returns Profile user yang sudah diperbarui
   */
  @Put('profile')
  // @Roles(ERole.MANAJER, ERole.OPERATOR)
  @ApiOperation({ summary: 'Update profile user saat ini' })
  @ApiBody({ type: UpdateProfileDto })
  @ApiResponse({
    status: 200,
    description: 'Berhasil memperbarui profile user',
  })
  updateProfile(
    @CurrentUser('id') userId: string,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(userId, dto);
  }

  /**
   * Ambil detail user berdasarkan ID (Hanya Manajer)
   * @param userId ID user
   * @returns Detail user
   */
  @Get(':userId')
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Ambil detail user berdasarkan ID' })
  @ApiParam({ name: 'userId', description: 'ID user yang ingin diambil' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil detail user' })
  getUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUser(userId);
  }

  /**
   * Update user berdasarkan ID (Hanya Manajer)
   * @param userId ID user
   * @param dto Data update user
   * @returns User yang sudah diperbarui
   */
  @Put(':userId')
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Update user berdasarkan ID (Hanya Manajer)' })
  @ApiParam({ name: 'userId', description: 'ID user yang ingin diperbarui' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Berhasil memperbarui user' })
  updateUser(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(userId, dto);
  }

  /**
   * Update password user berdasarkan ID (Hanya Manajer)
   * @param userId ID user
   * @param dto Data password baru
   */
  @Put('password/:userId')
  // @Roles(ERole.MANAJER)
  @ApiOperation({
    summary: 'Update password user berdasarkan ID (Hanya Manajer)',
  })
  @ApiParam({
    name: 'userId',
    description: 'ID user yang password-nya ingin diperbarui',
  })
  @ApiBody({ type: UpdatePasswordDto })
  @ApiResponse({
    status: 200,
    description: 'Berhasil memperbarui password user',
  })
  updatePassword(
    @Param('userId') userId: string,
    @Body() dto: UpdatePasswordDto,
  ): Promise<void> {
    return this.userService.updatePassword(userId, dto.newPassword);
  }

  /**
   * Hapus user berdasarkan ID (Hanya Manajer)
   * @param userId ID user
   */
  @Delete(':userId')
  // @Roles(ERole.MANAJER)
  @ApiOperation({ summary: 'Hapus user berdasarkan ID (Hanya Manajer)' })
  @ApiParam({ name: 'userId', description: 'ID user yang ingin dihapus' })
  @ApiResponse({ status: 200, description: 'Berhasil menghapus user' })
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
  }
}
