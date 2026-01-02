import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString } from 'class-validator';

export class DashboardSummaryParamsDto {
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
}
