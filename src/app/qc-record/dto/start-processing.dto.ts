import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StartProcessingDto {
  @ApiProperty({
    description: 'ID QC Plan yang akan diproses',
    example: '08B2604AC',
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

  @ApiProperty({
    description: 'Nomor Potongan QC',
    example: 'p3',
  })
  @IsNotEmpty({ message: 'Potongan QC tidak boleh kosong' })
  piece_no: string;

  @ApiProperty({
    description: 'Location ID QC Plan',
    example: 'LOC002',
  })
  @IsNotEmpty()
  @IsString()
  location_id: string;

  @ApiPropertyOptional({
    description: 'Status awal (opsional)',
    example: 'Processing',
  })
  @IsOptional()
  @IsString({ message: 'status harus berupa string' })
  status?: string;
}
