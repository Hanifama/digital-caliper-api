import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DashboardAnalysisQueryDto {
  @ApiPropertyOptional({
    description: 'Filter berdasarkan lokasi',
    example: 'LOC001',
  })
  @IsOptional()
  @IsString()
  location_id?: string;
}
