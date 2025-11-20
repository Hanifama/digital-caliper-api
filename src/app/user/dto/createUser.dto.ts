import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Length,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Dani123', description: 'Username user' })
  @IsNotEmpty({ message: 'Username wajib diisi' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'Dani Fadlilah', description: 'Full name user' })
  @IsNotEmpty({ message: 'Full name wajib diisi' })
  @IsString()
  full_name: string;

  @ApiProperty({ example: 'Dani', description: 'Nama panggilan / nama user' })
  @IsNotEmpty({ message: 'Name wajib diisi' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Dani@mail.com', description: 'Email user' })
  @IsEmail({}, { message: 'Email tidak valid' })
  @IsNotEmpty({ message: 'Email wajib diisi' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Password user, minimal 6 karakter',
  })
  @IsNotEmpty({ message: 'Password wajib diisi' })
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @ApiPropertyOptional({
    example: '1234567890123456',
    description: 'NIK user, 16 karakter',
  })
  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;

  @ApiPropertyOptional({ example: 'IT', description: 'Departemen user' })
  @IsOptional()
  @IsString()
  departement?: string;

  @ApiProperty({ example: 'role123', description: 'ID role user' })
  @IsNotEmpty({ message: 'RoleId wajib diisi' })
  roleId?: string;

  @ApiProperty({ example: 'loc001', description: 'ID lokasi user' })
  @IsNotEmpty({ message: 'LocationId wajib diisi' })
  @IsString()
  locationId: string;

  @ApiPropertyOptional({
    example: 'https://example.com/avatar.png',
    description: 'URL gambar user',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Image harus berupa URL yang valid' })
  image?: string;
}
