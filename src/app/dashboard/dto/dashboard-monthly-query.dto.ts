import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class DashboardMonthlyQueryDto {
  @ApiPropertyOptional({
    example: 2026,
    description: 'Tahun target (default: tahun sekarang)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  year?: number;

  @ApiPropertyOptional({
    example: 1,
    description: 'Bulan (1-12). Jika tidak diisi, ambil 12 bulan',
    minimum: 1,
    maximum: 12,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  month?: number;

  @ApiPropertyOptional({
    description: 'Filter berdasarkan lokasi',
    example: 'LOC002',
  })
  @IsOptional()
  @IsString()
  location_id?: string;
}
