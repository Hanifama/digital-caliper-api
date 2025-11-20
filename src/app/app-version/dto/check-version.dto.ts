import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CheckVersionDto {
  @ApiProperty({
    description: 'Platform aplikasi (android / ios)',
    example: 'android',
  })
  @IsString()
  platform: string;

  @ApiProperty({ description: 'Kode versi aplikasi', example: '1.0.2' })
  @IsString()
  version_code: string;
}
