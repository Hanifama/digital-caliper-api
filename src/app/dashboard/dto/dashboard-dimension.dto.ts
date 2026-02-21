import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsString } from 'class-validator';

export class DashboardDimensionParamsDto {
  @ApiPropertyOptional({ example: '2026-01-01' })
  @IsOptional()
  @IsDateString()
  from_date?: string;

  @ApiPropertyOptional({ example: '2026-01-31' })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiPropertyOptional({ example: 'LOC002' })
  @IsOptional()
  @IsString()
  location_id?: string;

  @ApiPropertyOptional({ example: 'H-BEAM' })
  @IsOptional()
  @IsString()
  prodtype_id?: string;

  @ApiPropertyOptional({ example: 'HB 200X200X8X12' })
  @IsOptional()
  @IsString()
  size?: string;
}
