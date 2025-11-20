import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsArray,
  IsNumber,
  Min,
} from 'class-validator';

export class ToleranceDto {
  @ApiPropertyOptional({ example: 6 })
  @IsNumber()
  @IsOptional()
  min?: number;

  @ApiPropertyOptional({ example: 6.5 })
  @IsNumber()
  @IsOptional()
  t_lt_50?: number;

  @ApiPropertyOptional({ example: 7 })
  @IsNumber()
  @IsOptional()
  nominal?: number;

  @ApiPropertyOptional({ example: 7.5 })
  @IsNumber()
  @IsOptional()
  t_gt_50?: number;

  @ApiPropertyOptional({ example: 8 })
  @IsNumber()
  @IsOptional()
  max?: number;

  @ApiPropertyOptional({ example: 0 })
  @IsNumber()
  @IsOptional()
  actual?: number;
}

export class CreateQcTemplateTableFieldDto {
  @ApiProperty({ example: 'H.t1' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(1)
  order_numb: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;
}

export class CreateQcTemplateTableDto {
  @ApiProperty({ example: 't1' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ type: [CreateQcTemplateTableFieldDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateTableFieldDto)
  fields: CreateQcTemplateTableFieldDto[];
}

export class CreateQcTemplateFormRightDto {
  @ApiProperty({ example: 'Flange Thickness' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ type: ToleranceDto })
  @ValidateNested()
  @Type(() => ToleranceDto)
  tolerance: ToleranceDto;

  @ApiProperty({ type: [String], example: ['t1', 't2', 't3', 't4'] })
  @IsArray()
  @IsString({ each: true })
  relatedTablePositions: string[];
}

export class CreateQcTemplateDto {
  @ApiProperty({ example: 'TMP01' })
  @IsString()
  @IsNotEmpty()
  qc_template_id?: string;

  @ApiProperty({ example: 'H-BEAM' })
  @IsString()
  @IsNotEmpty()
  prodtype_id: string;

  @ApiProperty({ example: 'HB 100X100X6X8' })
  @IsString()
  @IsNotEmpty()
  size_id: string;

  @ApiProperty({ example: 'H-Beam dari API Template' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'H-beam 130t' })
  @IsString()
  @IsOptional()
  profile?: string;

  @ApiPropertyOptional({ example: '200x200x8x12' })
  @IsString()
  @IsOptional()
  std_dimention?: string;

  @ApiPropertyOptional({ example: 'Brand X' })
  @IsString()
  @IsOptional()
  brand_merek?: string;

  @ApiPropertyOptional({ example: 'Spesifikasi tambahan' })
  @IsString()
  @IsOptional()
  specification?: string;

  @ApiProperty({ type: [CreateQcTemplateTableDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateTableDto)
  tables: CreateQcTemplateTableDto[];

  @ApiProperty({ type: [CreateQcTemplateFormRightDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateFormRightDto)
  form_rights: CreateQcTemplateFormRightDto[];
}
