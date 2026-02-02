import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class DashboardDailyAnalysisQueryDto {
  @ApiPropertyOptional({ example: 'LOC001' })
  @IsOptional()
  @IsString()
  location_id?: string;

  @ApiPropertyOptional({ example: 1, description: 'Bulan (1-12)' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  month: number;

  @ApiPropertyOptional({ example: 2026 })
  @Type(() => Number)
  @IsInt()
  year: number;
}
