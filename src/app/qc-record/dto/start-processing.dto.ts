import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StartProcessingDto {
  @ApiProperty({
    description: 'ID QC Plan yang akan diproses',
    example: 'QC123',
  })
  @IsNotEmpty({ message: 'qc_id tidak boleh kosong' })
  @IsString({ message: 'qc_id harus berupa string' })
  qc_id: string;

  @ApiProperty({
    description: 'Nomor sequence QC',
    example: 2,
  })
  @IsNotEmpty()
  no_seq: number;

  @ApiPropertyOptional({
    description: 'Status awal (opsional)',
    example: 'Processing',
  })
  @IsOptional()
  @IsString({ message: 'status harus berupa string' })
  status?: string;
}
