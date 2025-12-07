import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FinishProcessingDto {
  @ApiProperty({
    description: 'ID QC yang akan diselesaikan',
    example: 'QC123',
  })
  @IsNotEmpty()
  @IsString()
  qc_id: string;

  @ApiProperty({
    description: 'Nomor sequence QC',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  no_seq: number;
}
