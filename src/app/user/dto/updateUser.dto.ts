import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsInt,
  Length,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Dani', description: 'Nama user' })
  @IsOptional()
  @IsString({ message: 'Nama harus berupa teks' })
  name?: string;

  @ApiPropertyOptional({
    example: 'Dani Fadlilah',
    description: 'Nama lengkap user',
  })
  @IsOptional()
  @IsString({ message: 'Nama lengkap harus berupa teks' })
  full_name?: string;

  @ApiPropertyOptional({ example: 'Dani@mail.com', description: 'Email user' })
  @IsOptional()
  @IsEmail({}, { message: 'Email tidak valid' })
  email?: string;

  @ApiPropertyOptional({ example: 'IT', description: 'Departemen user' })
  @IsOptional()
  @IsString({ message: 'Departement harus berupa teks' })
  departement?: string;

  @ApiPropertyOptional({
    example: '1234567890123456',
    description: 'NIK user, 16 karakter',
  })
  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;

  @ApiPropertyOptional({ example: 'role-001', description: 'Role ID user' })
  @IsOptional()
  @IsString({ message: 'RoleId harus berupa teks' })
  roleId?: string;

  @ApiPropertyOptional({ example: 'loc-001', description: 'Location ID user' })
  @IsOptional()
  @IsString({ message: 'LocationId harus berupa teks' })
  locationId?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Status user, 1 aktif / 0 nonaktif',
  })
  @IsOptional()
  @IsInt({ message: 'Status harus berupa angka' })
  status?: number;
}

export class UpdatePasswordDto {
  @ApiProperty({ example: 'passwordBaru123', description: 'Password baru' })
  @IsNotEmpty({ message: 'Password baru wajib diisi' })
  @IsString()
  newPassword: string;

  @ApiProperty({
    example: 'passwordBaru123',
    description: 'Konfirmasi password baru',
  })
  @IsNotEmpty({ message: 'Konfirmasi password wajib diisi' })
  @IsString()
  confirmPassword: string;
}
