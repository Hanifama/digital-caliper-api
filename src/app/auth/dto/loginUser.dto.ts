import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Email wajib diisi' })
  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  password: string;
}
