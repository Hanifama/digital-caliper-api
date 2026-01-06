import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class DashboardMonthlyQueryDto {
  @ApiPropertyOptional({
    example: 2025,
    description: 'Tahun target (default: tahun sekarang)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  year?: number;

  @ApiPropertyOptional({
    example: 2,
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
}
