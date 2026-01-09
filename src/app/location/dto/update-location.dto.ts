import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLocationDto {
  @ApiPropertyOptional({ description: 'Nama lokasi', example: 'Gudang Pusat' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Longitude lokasi',
    example: '106.84513',
  })
  @IsString()
  @IsOptional()
  longitude?: string;

  @ApiPropertyOptional({ description: 'Latitude lokasi', example: '-6.21462' })
  @IsString()
  @IsOptional()
  latitude?: string;

  @ApiPropertyOptional({
    description: 'Alamat lokasi',
    example: 'Gedung Lokasi A',
  })
  @IsString()
  @IsOptional()
  addres?: string;

  @ApiPropertyOptional({
    description: 'Nama grup WhatsApp lokasi',
    example: 'WA QC Gudang Pusat',
  })
  @IsString()
  @IsOptional()
  wa_group?: string;
}
