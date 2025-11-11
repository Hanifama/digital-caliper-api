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

@Controller('user')
@UseGuards(JwtAuthGuard, RoleGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(ERole.MANAJER)
  getAllUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('role') role?: ERole,
    @Query('search') search?: string,
    @Query('status') status?: number,
  ): Promise<IResponsePageWrapper<User>> {
    return this.userService.getAllUser(page, limit, role, search, status);
  }

  @Post('create')
  @Roles(ERole.MANAJER)
  async register(@Body() dto: CreateUserDto) {
    return this.userService.register(dto);
  }

  @Get('export/xlsx')
  @Roles(ERole.MANAJER)
  protected async exportUserHandler(@Res() res: Response): Promise<void> {
    const { buffer, filename } = await this.userService.exportUser();

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  @Get('profile')
  @Roles(ERole.MANAJER, ERole.OPERATOR)
  getProfile(@CurrentUser('id') userId: string) {
    return this.userService.getProfile(userId);
  }

  @Put('profile')
  @Roles(ERole.MANAJER, ERole.OPERATOR)
  updateProfile(
    @CurrentUser('id') userId: string,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(userId, dto);
  }

  @Get(':userId')
  @Roles(ERole.MANAJER)
  getUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUser(userId);
  }

  @Put(':userId')
  @Roles(ERole.MANAJER)
  updateUser(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(userId, dto);
  }

  @Put('password/:userId')
  @Roles(ERole.MANAJER)
  updatePassword(
    @Param('userId') userId: string,
    @Body() dto: UpdatePasswordDto,
  ): Promise<void> {
    return this.userService.updatePassword(userId, dto.newPassword);
  }

  @Delete(':userId')
  @Roles(ERole.MANAJER)
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
  }
}
