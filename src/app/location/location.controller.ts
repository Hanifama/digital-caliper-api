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

@Controller('locations')
@UseGuards(JwtAuthGuard)
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.locationService.getAllLocations(page, limit, search);
  }

  @Get(':locationId')
  async findOne(@Param('locationId') locationId: string): Promise<Location> {
    return this.locationService.getDetailLocation(locationId);
  }

  @Post()
  async create(
    @Body() dto: CreateLocationDto,
    @CurrentUser('id') userId: string,
  ): Promise<Location> {
    return this.locationService.create(dto, userId);
  }

  @Put(':locationId')
  async update(
    @Param('locationId') locationId: string,
    @Body() dto: UpdateLocationDto,
  ): Promise<void> {
    return this.locationService.update(locationId, dto);
  }

  @Delete(':locationId')
  async remove(@Param('locationId') locationId: string): Promise<void> {
    return this.locationService.remove(locationId);
  }
}
