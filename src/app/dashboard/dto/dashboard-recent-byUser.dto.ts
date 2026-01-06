import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class DashboardRecentQcByUserParamsDto {
  @ApiPropertyOptional({ example: 1, description: 'Halaman saat ini' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ example: 10, description: 'Jumlah data per halaman' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @ApiPropertyOptional({
    description: 'Tanggal mulai filter (YYYY-MM-DD)',
    example: '2025-11-01',
  })
  @IsOptional()
  @IsDateString()
  from_date?: string;

  @ApiPropertyOptional({
    description: 'Tanggal akhir filter (YYYY-MM-DD)',
    example: '2025-11-20',
  })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiPropertyOptional({
    description: 'Filter lokasi (hanya untuk superadmin)',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  locationId?: number;
}
