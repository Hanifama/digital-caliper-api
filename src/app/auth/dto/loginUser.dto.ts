import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'Email atau NIK pengguna',
    example: 'user@example.com',
  })
  @IsNotEmpty({ message: 'Email atau NIK wajib diisi' })
  @IsString()
  identifier: string;

  @ApiProperty({
    description: 'Password pengguna',
    example: 'password123',
  })
  @IsNotEmpty({ message: 'Password harus diisi' })
  password: string;
}
