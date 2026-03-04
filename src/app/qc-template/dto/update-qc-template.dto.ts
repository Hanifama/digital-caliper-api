import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class QcTemplateFormRightToleranceDto {
  @ApiPropertyOptional({ example: 4.5 })
  @IsNumber()
  @IsOptional()
  min?: number;

  @ApiPropertyOptional({ example: 5.15 })
  @IsNumber()
  @IsOptional()
  t_lt_50?: number;

  @ApiPropertyOptional({ example: 5.8 })
  @IsNumber()
  @IsOptional()
  nominal?: number;

  @ApiPropertyOptional({ example: 6.45 })
  @IsNumber()
  @IsOptional()
  t_gt_50?: number;

  @ApiPropertyOptional({ example: 7.1 })
  @IsNumber()
  @IsOptional()
  max?: number;

  @ApiPropertyOptional({ example: 0 })
  @IsNumber()
  @IsOptional()
  actual?: number;
}

export class QcTemplateFormRightDto {
  @ApiProperty({ example: 'Web Thickness' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Tebal Web' })
  @IsOptional()
  @IsString()
  alias?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ type: QcTemplateFormRightToleranceDto })
  @ValidateNested()
  @Type(() => QcTemplateFormRightToleranceDto)
  tolerance: QcTemplateFormRightToleranceDto;

  @ApiProperty({ example: ['t5', 't6'], type: [String] })
  @IsArray()
  @IsString({ each: true })
  relatedTablePositions: string[];
}

export class QcTemplateTableFieldDto {
  @ApiProperty({ example: 'H.b1' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'H(b1)' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  alias?: string | null;

  @ApiProperty({ example: 'number' })
  @IsString()
  type: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isTable: boolean;

  @ApiProperty({ example: 'WF-BEAM' })
  @IsString()
  productType: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  selected: boolean;

  @ApiPropertyOptional({ example: 6.5 })
  @IsOptional()
  @IsNumber()
  minTolerance?: number;

  @ApiPropertyOptional({ example: 7.25 })
  @IsOptional()
  @IsNumber()
  t_lt_50_Tolerance?: number;

  @ApiPropertyOptional({ example: 8 })
  @IsOptional()
  @IsNumber()
  nominalTolerance?: number;

  @ApiPropertyOptional({ example: 8.75 })
  @IsOptional()
  @IsNumber()
  t_gt_50_Tolerance?: number;

  @ApiPropertyOptional({ example: 9.5 })
  @IsOptional()
  @IsNumber()
  maxTolerance?: number;

  @ApiPropertyOptional({ example: 9.5 })
  @IsOptional()
  @IsNumber()
  actualTolerance?: number;

  @ApiPropertyOptional({ example: '', nullable: true })
  @IsOptional()
  @IsString()
  sound?: string | null;

  @ApiProperty({ example: 'number' })
  @IsString()
  inputType: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isReadonly: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  isFormula: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  formula?: string | null;

  @ApiProperty({ example: false })
  @IsBoolean()
  isTolerance: boolean;

  @ApiProperty({ example: 13 })
  @IsNumber()
  orderNumb: number;
}

export class QcTemplateTableDto {
  @ApiProperty({ example: 'b1' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'b1', nullable: true })
  @IsOptional()
  @IsString()
  alias?: string | null;

  @ApiProperty({ type: [QcTemplateTableFieldDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTemplateTableFieldDto)
  fields: QcTemplateTableFieldDto[];

  @ApiProperty({ example: true })
  @IsBoolean()
  enabled: boolean;
}

export class QcTemplateBasicFieldDto {
  @ApiProperty({ example: 'kgm.nominal' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Kg/m Nominal' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  alias?: string | null;

  @ApiProperty({ example: 'number' })
  @IsString()
  type: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isTable: boolean;

  @ApiProperty({ example: 'WF-BEAM' })
  @IsString()
  productType: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  selected: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  minTolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  t_lt_50_Tolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  nominalTolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  t_gt_50_Tolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  maxTolerance?: number | null;

  @ApiPropertyOptional({ example: 9.5 })
  @IsOptional()
  @IsNumber()
  actualTolerance?: number;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  sound?: string | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  inputType?: string | null;

  @ApiProperty({ example: false })
  @IsBoolean()
  isReadonly: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  isFormula: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  formula?: string | null;

  @ApiProperty({ example: true })
  @IsBoolean()
  isTolerance: boolean;

  @ApiProperty({ example: 0 })
  @IsNumber()
  orderNumb: number;
}

export class QcTemplateDefaultFieldDto {
  @ApiProperty({ example: 'pic.user' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'PIC/User' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  alias?: string | null;

  @ApiProperty({ example: 'text' })
  @IsString()
  type: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isTable: boolean;

  @ApiProperty({ example: 'WF-BEAM' })
  @IsString()
  productType: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  enabled: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  selected: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  minTolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  t_lt_50_Tolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  nominalTolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  t_gt_50_Tolerance?: number | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsNumber()
  maxTolerance?: number | null;

  @ApiPropertyOptional({ example: 9.5 })
  @IsOptional()
  @IsNumber()
  actualTolerance?: number;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  sound?: string | null;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  inputType?: string | null;

  @ApiProperty({ example: false })
  @IsBoolean()
  isReadonly: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  isFormula: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  @IsOptional()
  @IsString()
  formula?: string | null;

  @ApiProperty({ example: true })
  @IsBoolean()
  isTolerance: boolean;

  @ApiProperty({ example: 0 })
  @IsNumber()
  orderNumb: number;
}

export class UpdateQcTemplateDto {
  @ApiPropertyOptional({ example: 'TMP-wffjtxwe' })
  @IsOptional()
  @IsString()
  qc_template_id?: string;

  @ApiProperty({ example: 'Template WF-BEAM 200X100X5.5X8' })
  @IsString()
  template_name: string;

  @ApiProperty({ example: 'WF-BEAM' })
  @IsString()
  template_prodtype_id: string;

  @ApiPropertyOptional({ example: 'WF 200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_prodtype_name?: string;

  @ApiPropertyOptional({ example: 'WF 200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_size_id?: string;

  @ApiPropertyOptional({ example: 'WF 200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_size_name?: string;

  @ApiPropertyOptional({ example: '200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_std_dimention?: string;

  @ApiPropertyOptional({ example: 'WF-BEAM 200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_brand_merek?: string;

  @ApiPropertyOptional({ example: 'WF 200X100X5.5X8' })
  @IsOptional()
  @IsString()
  template_specification?: string;

  @ApiProperty({ example: 'active' })
  @IsString()
  template_status: string;

  @ApiProperty({ type: [QcTemplateTableDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTemplateTableDto)
  table: QcTemplateTableDto[];

  @ApiProperty({ type: [QcTemplateBasicFieldDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTemplateBasicFieldDto)
  basic: QcTemplateBasicFieldDto[];

  @ApiProperty({ type: [QcTemplateDefaultFieldDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTemplateDefaultFieldDto)
  default: QcTemplateDefaultFieldDto[];

  @ApiProperty({ type: [QcTemplateFormRightDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTemplateFormRightDto)
  FormRight: QcTemplateFormRightDto[];
}
