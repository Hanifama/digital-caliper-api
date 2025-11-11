import { Controller, Post, Body, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { IRefreshTokenResponse, RefreshTokenDto } from './dto/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint untuk mendaftarkan pengguna baru
   * @param dto Data registrasi berupa RegisterUserDto
   * @returns UserResponseDto dengan informasi user yang baru dibuat
   */
  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    return this.authService.register(dto);
  }

  /**
   * Endpoint untuk login pengguna
   * @param dto Data login berupa LoginUserDto (email & password)
   * @returns Objek berisi accessToken dan refreshToken
   * @throws UnauthorizedException jika user tidak ditemukan
   */
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  /**
   * Endpoint untuk refresh access token
   * @param refreshTokenDto Berisi refreshToken yang valid
   * @returns IRefreshTokenResponse dengan accessToken baru
   * @throws BadRequestException jika refresh token tidak valid atau expired
   */
  @Put('refresh-token')
  protected refreshAccessTokenHandler(
    @Body() refreshTokenDto: RefreshTokenDto,
  ): Promise<IRefreshTokenResponse> {
    return this.authService.refreshAccessToken(refreshTokenDto);
  }
}
