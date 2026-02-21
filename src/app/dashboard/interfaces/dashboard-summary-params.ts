import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsString } from 'class-validator';

export class DashboardSummaryParams {
  @ApiPropertyOptional({
    description: 'Tanggal mulai filter (YYYY-MM-DD)',
    example: '2026-01-01',
  })
  @IsOptional()
  @IsDateString()
  from_date?: string;

  @ApiPropertyOptional({
    description: 'Tanggal akhir filter (YYYY-MM-DD)',
    example: '2026-01-31',
  })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiPropertyOptional({
    description: 'Filter berdasarkan lokasi',
    example: 'LOC002',
  })
  @IsOptional()
  @IsString()
  location_id?: string;

  @ApiPropertyOptional({
    description: 'Filter berdasarkan product type',
    example: 'H-BEAM',
  })
  @IsOptional()
  @IsString()
  prodtype_id?: string;

  @ApiPropertyOptional({
    description: 'Filter berdasarkan size tertentu',
    example: 'HB 200X200X8X12',
  })
  @IsOptional()
  @IsString()
  size?: string;
}
