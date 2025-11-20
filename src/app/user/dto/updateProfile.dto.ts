import { IsOptional, IsString, IsEmail, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional({
    example: 'Dani Fadlilah',
    description: 'Full name user',
  })
  @IsOptional()
  @IsString()
  full_name?: string;

  @ApiPropertyOptional({
    example: 'Dani',
    description: 'Nama panggilan / nama user',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Dani@mail.com', description: 'Email user' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'IT', description: 'Departemen user' })
  @IsOptional()
  @IsString()
  departement?: string;

  @ApiPropertyOptional({
    example: '1234567890123456',
    description: 'NIK user, 16 karakter',
  })
  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;
}
