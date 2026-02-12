import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQcPlanDto {
  @ApiProperty({ description: 'Batch ID', example: '04L2506DE' })
  @IsNotEmpty()
  @IsString()
  qc_id: string;

  @ApiPropertyOptional({
    description: 'Sequence number for ordering',
    type: Number,
    example: 40,
  })
  @IsOptional()
  @IsNumber()
  sequence_no?: number;

  @ApiProperty({
    description: 'Reference QC Template ID',
    example: 'TMP-rtxtuyv',
  })
  @IsNotEmpty()
  @IsString()
  qc_template_id: string;

  @ApiPropertyOptional({
    description: 'File name related to QC plan',
    example: 'S-IV HB 250x250.xlsx',
  })
  @IsOptional()
  @IsString()
  file_name?: string;

  @ApiPropertyOptional({ description: 'Product name', example: 'H-BEAM' })
  @IsOptional()
  @IsString()
  product?: string;

  @ApiPropertyOptional({
    description: 'Profile name',
    example: 'HB 250X250X9X14',
  })
  @IsOptional()
  @IsString()
  profile?: string;

  @ApiPropertyOptional({
    description: 'Size of the product',
    example: 'HB 250X250X9X14',
  })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiPropertyOptional({
    description: 'Specifications of the product',
    example: 'SNI BjP 490 / JIS G3101 SS490',
  })
  @IsOptional()
  @IsString()
  specifications?: string;

  @ApiPropertyOptional({
    description: 'Dimension of the product',
    example: 'HB 250X250X9X14',
  })
  @IsOptional()
  @IsString()
  dimension?: string;

  @ApiPropertyOptional({ description: 'Standard grade', example: 'SN 490B' })
  @IsOptional()
  @IsString()
  std_grad?: string;

  @ApiPropertyOptional({
    description: 'Nominal KGM value',
    type: Number,
    example: 49.4,
  })
  @IsOptional()
  @IsNumber()
  kgm_nominal?: number;

  @ApiPropertyOptional({
    description: 'Brand or merek',
    example: 'Tahan Gempa Plus',
  })
  @IsOptional()
  @IsString()
  brand_merek?: string;
}
