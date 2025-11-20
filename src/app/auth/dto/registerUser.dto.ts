import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ description: 'Username', example: 'johndoe' })
  @IsNotEmpty({ message: 'Username wajib diisi' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Full name', example: 'John Doe' })
  @IsNotEmpty({ message: 'Full name wajib diisi' })
  @IsString()
  full_name: string;

  @ApiProperty({ description: 'Name', example: 'John' })
  @IsNotEmpty({ message: 'Name wajib diisi' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email', example: 'johndoe@example.com' })
  @IsEmail({}, { message: 'Email tidak valid' })
  @IsNotEmpty({ message: 'Email wajib diisi' })
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'password123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'Password wajib diisi' })
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @ApiPropertyOptional({ description: 'Departement', example: 'IT' })
  @IsOptional()
  @IsString()
  departement?: string;

  @ApiProperty({ description: 'Role ID', example: '1' })
  @IsNotEmpty({ message: 'RoleId wajib diisi' })
  roleId?: string;

  @ApiPropertyOptional({
    description: 'Image URL',
    example: 'https://example.com/avatar.jpg',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Image harus berupa URL yang valid' })
  image?: string;
}
