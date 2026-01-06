import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsString } from 'class-validator';

export class DashboardSummaryBySizeParamsDto {
  @ApiPropertyOptional({
    description: 'Tanggal mulai filter (format YYYY-MM-DD)',
    example: '2025-11-01',
  })
  @IsOptional()
  @IsDateString()
  from_date?: string;

  @ApiPropertyOptional({
    description: 'Tanggal akhir filter (format YYYY-MM-DD)',
    example: '2025-11-20',
  })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiPropertyOptional({
    description: 'Filter berdasarkan size tertentu',
    example: 'S',
  })
  @IsOptional()
  @IsString()
  size?: string;
}
