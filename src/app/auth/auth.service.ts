import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entitities/user.entity';
import { Role } from './entitities/role.entity';

import { RegisterUserDto } from './dto/registerUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import {
  IRefreshTokenResponse,
  RefreshTokenDto,
  UserResponseDto,
} from './dto/token.dto';

import { PasswordService } from './password.service';
import { TokenManagerService } from './tokenManager.service';
import { MessageService } from '../message/message.service';

import { IJwtPayload } from 'src/types/interface/IJwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly passwordService: PasswordService,
    private readonly tokenManager: TokenManagerService,
    private readonly messageService: MessageService,
    private readonly tokenManagerService: TokenManagerService,
  ) {}

  /**
   * Refresh access token menggunakan refresh token yang valid.
   *
   * @param dto Data RefreshTokenDto berisi refreshToken
   * @returns Promise<IRefreshTokenResponse> - berisi accessToken baru
   * @throws BadRequestException jika refreshToken tidak valid atau expired
   *
   * Alur:
   * 1. Ambil refreshToken dari request DTO.
   * 2. Verifikasi refreshToken melalui service tokenManagerService.
   * 3. Jika valid, generate accessToken baru dan kembalikan.
   * 4. Pesan sukses diset melalui messageService.
   */
  public async refreshAccessToken({
    refreshToken,
  }: RefreshTokenDto): Promise<IRefreshTokenResponse> {
    this.messageService.setMessage('Berhasil refresh token!');

    return {
      accessToken:
        await this.tokenManagerService.verifyRefreshToken(refreshToken),
    };
  }

  /**
   * Login pengguna
   * @param dto Data LoginUserDto
   * @returns Object berisi accessToken dan refreshToken
   * @throws UnauthorizedException jika pengguna tidak ditemukan
   */
  async login(dto: LoginUserDto) {
    const user = await this.userRepo.findOne({
      where: [{ email: dto.identifier }, { NIK: dto.identifier }],
      relations: ['role'],
    });

    if (!user) throw new UnauthorizedException('Pengguna tidak ditemukan.');

    // Verifikasi password
    await this.passwordService.comparePassword(dto.password, user.password);

    // Update waktu login terakhir
    user.last_login = new Date();
    await this.userRepo.save(user);

    // Membuat payload JWT
    const payload: IJwtPayload = {
      id: user.user_id,
      name: user.name,
      email: user.email,
      role: user.role?.name,
    };

    // Generate token
    const accessToken = await this.tokenManager.generateAccessToken(payload);
    const refreshToken = await this.tokenManager.generateRefreshToken(payload);

    this.messageService.setMessage('Login berhasil.');

    return {
      accessToken,
      refreshToken,
    };
  }
}
