import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class StartProcessingDto {
  @IsNotEmpty({ message: 'qc_id tidak boleh kosong' })
  @IsString({ message: 'qc_id harus berupa string' })
  qc_id: string;

  @IsOptional()
  @IsString({ message: 'status harus berupa string' })
  status?: string;
}
