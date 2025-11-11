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

@Controller('role')
@UseGuards(JwtAuthGuard)
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get()
  async getAllRoles(@Query('search') search?: string): Promise<Role[]> {
    return this.masterService.getAllRoles(search);
  }

  @Get('pagination')
  async getRolesPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.masterService.getRolesPagination(page, limit, search);
  }

  @Get('all-menus')
  async getAllMenus() {
    return this.masterService.getAllMenus();
  }

  @Get('menu')
  async getMenu(@CurrentUser('id') userId: string) {
    return this.masterService.getMenuByUserId(userId);
  }

  @Post()
  async createRole(
    @Body('name') name: string,
    @Body('menuIds') menuIds?: string[],
  ) {
    return this.masterService.createRole(name, menuIds);
  }

  @Get(':roleId')
  async getRoleDetail(@Param('roleId') roleId: string) {
    return this.masterService.getRoleDetail(roleId);
  }

  @Put(':roleId')
  async updateRole(
    @Param('roleId') roleId: string,
    @Body('name') name: string,
    @Body('menuIds') menuIds?: string[],
  ) {
    return this.masterService.updateRole(roleId, name, menuIds);
  }

  @Delete(':roleId')
  async deleteRole(@Param('roleId') roleId: string) {
    return this.masterService.deleteRole(roleId);
  }

  @Post(':roleId/menus')
  async assignMenus(
    @Param('roleId') roleId: string,
    @Body('menuIds') menuIds: string[],
  ) {
    return this.masterService.assignMenusToRole(roleId, menuIds);
  }
}
