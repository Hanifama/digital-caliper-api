import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsBoolean,
  Min,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ToleranceDto {
  @IsNumber()
  @IsOptional()
  min?: number;

  @IsNumber()
  @IsOptional()
  t_lt_50?: number;

  @IsNumber()
  @IsOptional()
  nominal?: number;

  @IsNumber()
  @IsOptional()
  t_gt_50?: number;

  @IsNumber()
  @IsOptional()
  max?: number;

  @IsNumber()
  @IsOptional()
  actual?: number;
}

export class CreateQcTemplateTableFieldDto {
  @IsString()
  @IsNotEmpty()
  code: string; // H.t1, C.t1, T.t1

  @IsNumber()
  @Min(1)
  order_numb: number; // 1, 2, 3, dst

  @IsBoolean()
  enabled: boolean;
}

export class CreateQcTemplateTableDto {
  @IsString()
  @IsNotEmpty()
  position: string;

  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateTableFieldDto)
  fields: CreateQcTemplateTableFieldDto[];
}

export class CreateQcTemplateFormRightDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  enabled: boolean;

  @ValidateNested()
  @Type(() => ToleranceDto)
  tolerance: ToleranceDto;

  @IsArray()
  @IsString({ each: true })
  relatedTablePositions: string[];
}

export class CreateQcTemplateDto {
  @IsString()
  @IsNotEmpty()
  qc_template_id?: string;

  @IsString()
  @IsNotEmpty()
  prodtype_id: string;

  @IsString()
  @IsNotEmpty()
  size_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  profile?: string; // renamed from product_name

  @IsString()
  @IsOptional()
  std_dimention?: string; // renamed from std_grade

  @IsString()
  @IsOptional()
  brand_merek?: string; // new field

  @IsString()
  @IsOptional()
  specification?: string; // new field

  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateTableDto)
  tables: CreateQcTemplateTableDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateQcTemplateFormRightDto)
  form_rights: CreateQcTemplateFormRightDto[];
}
