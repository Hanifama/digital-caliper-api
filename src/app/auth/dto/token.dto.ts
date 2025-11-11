import { IsNotEmpty, IsString } from 'class-validator';

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}

export class RefreshTokenDto {
  @IsNotEmpty({ message: 'Refresh token wajib diisi' })
  @IsString()
  refreshToken: string;
}

export class UserResponseDto {
  id: string;
  username?: string;
  full_name?: string;
  name: string;
  email: string;
  role: string;
  departement?: string;
  image?: string;
  last_login?: Date;
  status: number;
}
