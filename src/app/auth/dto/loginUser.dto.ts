import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Email atau NIK wajib diisi' })
  @IsString()
  identifier: string; // bisa email atau NIK

  @IsNotEmpty({ message: 'Password harus diisi' })
  password: string;
}
