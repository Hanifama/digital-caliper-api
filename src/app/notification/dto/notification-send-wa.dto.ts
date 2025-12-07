import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendWaQcDto {
  @ApiProperty({ example: '20I2513DE' })
  @IsNotEmpty()
  @IsString()
  qc_id: string;

  @ApiProperty({ example: 4 })
  @IsNotEmpty()
  @IsNumber()
  no_seq: number;

  @ApiProperty({ example: 'p2' })
  @IsNotEmpty()
  @IsString()
  piece_no: string;

  @ApiProperty({
    example:
      'https://api-digitalcaliper.webview.cloud/uploads/2196f3cd-054b-4f78-a7b7-57d0836e291c.png',
  })
  @IsNotEmpty()
  @IsString()
  image: string;
}
