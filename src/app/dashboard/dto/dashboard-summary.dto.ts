import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsString } from 'class-validator';

export class DashboardSummaryParamsDto {
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
}
