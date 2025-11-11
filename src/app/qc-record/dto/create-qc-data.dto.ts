import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsArray,
  IsNumber,
  IsOptional,
  IsObject,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class QcFieldDto {
  @IsString({ message: 'Kode field harus diisi!' })
  code: string;

  @IsOptional()
  @IsNumber(
    {},
    { message: 'Periksa kembali, mohon input value diisi angka jika ada!' },
  )
  input_value?: number;
}

export class QcTableDto {
  @IsString()
  position: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcFieldDto)
  fields: QcFieldDto[];
}

/** Bagian Basic Data */
export class BasicQcRecordDto {
  @IsOptional()
  @IsNumber()
  nominal?: number;

  @IsOptional()
  @IsNumber()
  radius?: number;

  @IsOptional()
  @IsNumber()
  os?: number;

  @IsOptional()
  @IsNumber()
  cow?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  actual?: number;

  @IsOptional()
  @IsNumber()
  percentDeviasi?: number;
}

/** Bagian Default Data */
export class DefaultQcRecordDto {
  @IsOptional()
  @IsString()
  pic?: string;

  @IsOptional()
  @IsDateString()
  start?: string;

  @IsOptional()
  @IsDateString()
  finish?: string;

  @IsOptional()
  @IsNumber()
  lot?: number;

  @IsOptional()
  @IsNumber()
  bloom?: number;

  @IsOptional()
  @IsNumber()
  heat?: number;

  @IsOptional()
  @IsString()
  location?: string;
}

/** DTO Utama */
export class AddQcRecordTablesDto {
  @IsOptional()
  @IsString()
  qc_id?: string;

  @IsOptional()
  @IsString()
  qc_template_id?: string;

  @IsString()
  @IsOptional()
  profile?: string;

  @IsString()
  @IsOptional()
  std_dimention?: string;

  @IsString()
  @IsOptional()
  brand_merek?: string;

  @IsString()
  @IsOptional()
  specifications?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => BasicQcRecordDto)
  basic?: BasicQcRecordDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => DefaultQcRecordDto)
  default?: DefaultQcRecordDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTableDto)
  data: QcTableDto[];
}
