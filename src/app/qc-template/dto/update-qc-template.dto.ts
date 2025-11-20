import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
  IsOptional,
  Min,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class UpdateQcTemplateTableFieldDto {
  @ApiProperty({ example: 'H.t1' })
  @IsString()
  @IsNotEmpty()
  input_code: string;

  @ApiProperty({ example: 'Height' })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiProperty({ example: 'number' })
  @IsString()
  input_type: string;

  @ApiPropertyOptional({ example: 6 })
  @IsNumber()
  @IsOptional()
  min_tolerance?: number;

  @ApiPropertyOptional({ example: 6.5 })
  @IsNumber()
  @IsOptional()
  t_lt_50_tolerance?: number;

  @ApiPropertyOptional({ example: 7 })
  @IsNumber()
  @IsOptional()
  nominal_tolerance?: number;

  @ApiPropertyOptional({ example: 7.5 })
  @IsNumber()
  @IsOptional()
  t_gt_50_tolerance?: number;

  @ApiPropertyOptional({ example: 8 })
  @IsNumber()
  @IsOptional()
  max_tolerance?: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(1)
  order_numb: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiPropertyOptional({ example: 'beep.mp3' })
  @IsString()
  @IsOptional()
  sound?: string;
}

export class UpdateQcTemplateFormRightFieldDto extends UpdateQcTemplateTableFieldDto {}

export class UpdateQcTemplateFormRightDto {
  @ApiProperty({ example: 'Flange Thickness' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ type: [String], example: ['t1', 't2'] })
  @IsArray()
  @IsString({ each: true })
  related_positions: string[];

  @ApiProperty({ type: [UpdateQcTemplateFormRightFieldDto] })
  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateFormRightFieldDto)
  fields: UpdateQcTemplateFormRightFieldDto[];
}

export class UpdateQcTemplateTableDto {
  @ApiProperty({ example: 't1' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ type: [UpdateQcTemplateTableFieldDto] })
  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateTableFieldDto)
  fields: UpdateQcTemplateTableFieldDto[];
}

export class UpdateQcTemplateDto {
  @ApiProperty({ example: 'H-BEAM' })
  @IsString()
  @IsNotEmpty()
  prodtype_id: string;

  @ApiProperty({ example: 'H-Beam API Template' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'active' })
  @IsString()
  status: string;

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

  @ApiProperty({ type: [UpdateQcTemplateTableDto] })
  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateTableDto)
  tables: UpdateQcTemplateTableDto[];

  @ApiProperty({ type: [UpdateQcTemplateFormRightDto] })
  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateFormRightDto)
  form_rights: UpdateQcTemplateFormRightDto[];
}
