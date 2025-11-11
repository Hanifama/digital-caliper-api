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
import { Type } from 'class-transformer';

export class UpdateQcTemplateTableFieldDto {
  @IsString()
  @IsNotEmpty()
  input_code: string;

  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  input_type: string;

  // 5 TOLERANCE VALUES
  @IsNumber()
  @IsOptional()
  min_tolerance?: number;

  @IsNumber()
  @IsOptional()
  t_lt_50_tolerance?: number;

  @IsNumber()
  @IsOptional()
  nominal_tolerance?: number;

  @IsNumber()
  @IsOptional()
  t_gt_50_tolerance?: number;

  @IsNumber()
  @IsOptional()
  max_tolerance?: number;

  @IsNumber()
  @Min(1)
  order_numb: number;

  @IsBoolean()
  enabled: boolean;

  @IsString()
  @IsOptional()
  sound?: string;
}

export class UpdateQcTemplateFormRightFieldDto {
  @IsString()
  @IsNotEmpty()
  input_code: string;

  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  input_type: string;

  // 5 TOLERANCE VALUES
  @IsNumber()
  @IsOptional()
  min_tolerance?: number;

  @IsNumber()
  @IsOptional()
  t_lt_50_tolerance?: number;

  @IsNumber()
  @IsOptional()
  nominal_tolerance?: number;

  @IsNumber()
  @IsOptional()
  t_gt_50_tolerance?: number;

  @IsNumber()
  @IsOptional()
  max_tolerance?: number;

  @IsNumber()
  @Min(1)
  order_numb: number;

  @IsBoolean()
  enabled: boolean;

  @IsString()
  @IsOptional()
  sound?: string;
}

export class UpdateQcTemplateFormRightDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  enabled: boolean;

  @IsArray()
  @IsString({ each: true })
  related_positions: string[];

  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateFormRightFieldDto)
  fields: UpdateQcTemplateFormRightFieldDto[];
}

export class UpdateQcTemplateTableDto {
  @IsString()
  @IsNotEmpty()
  position: string;

  @IsBoolean()
  enabled: boolean;

  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateTableFieldDto)
  fields: UpdateQcTemplateTableFieldDto[];
}

export class UpdateQcTemplateDto {
  @IsString()
  @IsNotEmpty()
  prodtype_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  profile: string; // renamed from product_name

  @IsString()
  @IsOptional()
  std_dimention: string; // renamed from std_grade

  @IsString()
  @IsOptional()
  brand_merek: string; // new field

  @IsString()
  @IsOptional()
  specification: string; // new field

  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateTableDto)
  tables: UpdateQcTemplateTableDto[];

  @ValidateNested({ each: true })
  @Type(() => UpdateQcTemplateFormRightDto)
  form_rights: UpdateQcTemplateFormRightDto[];
}
