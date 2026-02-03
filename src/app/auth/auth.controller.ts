import { Controller, Post, Body, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUser.dto';
import { IRefreshTokenResponse, RefreshTokenDto } from './dto/token.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint untuk login pengguna
   * @param dto Data login berupa email/NIK & password
   * @returns Objek berisi accessToken dan refreshToken
   */
  @Post('login')
  @ApiOperation({ summary: 'Login pengguna' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil login, mengembalikan accessToken & refreshToken',
  })
  async login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @Post('login-ldap')
  @ApiOperation({ summary: 'Login pengguna via LDAP (Testing)' })
  async loginLdap(@Body() dto: LoginUserDto) {
    return this.authService.loginLdap(dto);
  }

  /**
   * Endpoint untuk refresh access token
   * @param refreshTokenDto Berisi refreshToken yang valid
   * @returns IRefreshTokenResponse dengan accessToken baru
   */
  @Put('refresh-token')
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil membuat accessToken baru',
  })
  async refreshAccessTokenHandler(
    @Body() refreshTokenDto: RefreshTokenDto,
  ): Promise<IRefreshTokenResponse> {
    return this.authService.refreshAccessToken(refreshTokenDto);
  }
}
