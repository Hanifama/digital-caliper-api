import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsInt,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Nama harus berupa teks' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Nama lengkap harus berupa teks' })
  full_name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email tidak valid' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Departement harus berupa teks' })
  departement?: string;

  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;

  @IsOptional()
  @IsString({ message: 'RoleId harus berupa teks' })
  roleId?: string;

  @IsOptional()
  @IsString({ message: 'LocationId harus berupa teks' })
  locationId?: string;

  @IsOptional()
  @IsInt({ message: 'Status harus berupa angka' })
  status?: number;
}

export class UpdatePasswordDto {
  @IsNotEmpty({ message: 'Password baru wajib diisi' })
  @IsString()
  newPassword: string;

  @IsNotEmpty({ message: 'Konfirmasi password wajib diisi' })
  @IsString()
  confirmPassword: string;
}
