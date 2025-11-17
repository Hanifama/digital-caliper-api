import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username wajib diisi' })
  @IsString()
  username: string;

  @IsNotEmpty({ message: 'Full name wajib diisi' })
  @IsString()
  full_name: string;

  @IsNotEmpty({ message: 'Name wajib diisi' })
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Email tidak valid' })
  @IsNotEmpty({ message: 'Email wajib diisi' })
  email: string;

  @IsNotEmpty({ message: 'Password wajib diisi' })
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;

  @IsOptional()
  @IsString()
  departement?: string;

  @IsNotEmpty({ message: 'RoleId wajib diisi' })
  roleId?: string;

  @IsNotEmpty({ message: 'LocationId wajib diisi' })
  @IsString()
  locationId: string;

  @IsOptional()
  @IsUrl({}, { message: 'Image harus berupa URL yang valid' })
  image?: string;
}
