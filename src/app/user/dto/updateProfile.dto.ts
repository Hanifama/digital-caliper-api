import { IsOptional, IsString, IsEmail, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  full_name?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  departement?: string;

  @IsOptional()
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus 16 karakter' })
  NIK?: string;
}
