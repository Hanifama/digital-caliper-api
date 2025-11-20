import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiPropertyOptional({
    description: 'ID lokasi (opsional)',
    example: 'LOC001',
  })
  @IsString()
  @IsOptional()
  location_id?: string;

  @ApiProperty({ description: 'Nama lokasi', example: 'Gudang Pusat' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Longitude lokasi', example: '106.84513' })
  @IsString()
  @IsNotEmpty()
  longitude: string;

  @ApiProperty({ description: 'Latitude lokasi', example: '-6.21462' })
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @ApiPropertyOptional({
    description: 'Alamat lokasi',
    example: 'Jl. Sudirman No. 1, Jakarta',
  })
  @IsString()
  @IsOptional()
  addres?: string;
}
