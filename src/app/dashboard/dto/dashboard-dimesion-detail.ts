import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class DashboardDimensionDetailDto {
  @ApiProperty({ example: 't1' })
  @IsString()
  position: string;

  @ApiProperty({ example: '2026-01-01', required: false })
  @IsOptional()
  @IsDateString()
  from_date?: string;

  @ApiProperty({ example: '2026-01-31', required: false })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiProperty({ example: 'LOC002', required: false })
  @IsOptional()
  @IsString()
  location_id?: string;

  @ApiProperty({ example: 'H-BEAM', required: false })
  @IsOptional()
  @IsString()
  prodtype_id?: string;

  @ApiProperty({ example: 'HB 200X200X8X12', required: false })
  @IsOptional()
  @IsString()
  size?: string;
}
