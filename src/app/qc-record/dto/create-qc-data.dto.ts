import {
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsObject,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class QcFieldDto {
  @ApiProperty({ description: 'Kode field', example: 'H.b1' })
  @IsString({ message: 'Kode field harus diisi!' })
  code: string;

  @ApiPropertyOptional({ description: 'Nilai input field', example: 61 })
  @IsOptional()
  @IsNumber(
    {},
    { message: 'Periksa kembali, input value harus angka jika ada!' },
  )
  input_value?: number;
}

export class QcTableDto {
  @ApiProperty({ description: 'Posisi tabel', example: 'b1' })
  @IsString()
  position: string;

  @ApiProperty({ description: 'Daftar fields', type: [QcFieldDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcFieldDto)
  fields: QcFieldDto[];
}

export class BasicQcRecordDto {
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  nominal?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  radius?: number;

  @ApiPropertyOptional({ example: 3 })
  @IsOptional()
  @IsNumber()
  os?: number;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  cow?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  length?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  weight?: number;

  @ApiPropertyOptional({ example: 0.001 })
  @IsOptional()
  @IsNumber()
  actual?: number;

  @ApiPropertyOptional({ example: -0.999 })
  @IsOptional()
  @IsNumber()
  percentDeviasi?: number;
}

export class DefaultQcRecordDto {
  @ApiPropertyOptional({
    example: 'manajer-550e8400-e29b-41d4-a716-446655440000',
  })
  @IsOptional()
  @IsString()
  pic?: string;

  @ApiPropertyOptional({ example: '2025-11-05T09:16:25.070Z' })
  @IsOptional()
  @IsDateString()
  start?: string;

  @ApiPropertyOptional({ example: '2025-11-05T09:16:25.070Z' })
  @IsOptional()
  @IsDateString()
  finish?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  lot?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  bloom?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  heat?: number;

  @ApiPropertyOptional({ example: 'LOC001' })
  @IsOptional()
  @IsString()
  location?: string;
}

export class AddQcRecordTablesDto {
  @ApiPropertyOptional({ example: '1234567CP' })
  @IsOptional()
  @IsString()
  qc_id?: string;

  @ApiProperty({
    description: 'Nomor sequence QC',
    example: 2,
  })
  @IsNotEmpty()
  no_seq: number;

  @ApiPropertyOptional({ example: 'TMP-rtxtuyp' })
  @IsOptional()
  @IsString()
  qc_template_id?: string;

  @ApiPropertyOptional({ example: 'HB 100X100X6X8' })
  @IsOptional()
  @IsString()
  profile?: string;

  @ApiPropertyOptional({ example: '100X100X6X8' })
  @IsOptional()
  @IsString()
  std_dimention?: string;

  @ApiPropertyOptional({ example: 'H-BEAM 100X100X6X8' })
  @IsOptional()
  @IsString()
  brand_merek?: string;

  @ApiPropertyOptional({ example: 'HB 100X100X6X8' })
  @IsOptional()
  @IsString()
  specifications?: string;

  @ApiPropertyOptional({ type: BasicQcRecordDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => BasicQcRecordDto)
  basic?: BasicQcRecordDto;

  @ApiPropertyOptional({ type: DefaultQcRecordDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => DefaultQcRecordDto)
  default?: DefaultQcRecordDto;

  @ApiProperty({ type: [QcTableDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcTableDto)
  data: QcTableDto[];
}
