import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

import { User } from './entity/user.entity';

import { LoginUserDto } from './dto/loginUser.dto';
import { IRefreshTokenResponse, RefreshTokenDto } from './dto/token.dto';

import { PasswordService } from './password.service';
import { TokenManagerService } from './tokenManager.service';
import { MessageService } from '../message/message.service';

import { IJwtPayload } from 'src/types/interface/IJwtPayload.interface';
import { LogService } from '../log-app/log.service';
import { LdapService } from './ldap.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly passwordService: PasswordService,
    private readonly tokenManager: TokenManagerService,
    private readonly messageService: MessageService,
    private readonly tokenManagerService: TokenManagerService,
    private readonly logService: LogService,
    private readonly ldapService: LdapService,
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
      name: user.full_name,
      email: user.email,
      role: user.role?.name,
    };

    // Generate token
    const accessToken = await this.tokenManager.generateAccessToken(payload);
    const refreshToken = await this.tokenManager.generateRefreshToken(payload);

    this.messageService.setMessage('Login berhasil.');

    await this.logService.createLog(user, {
      data_1: 'LOGIN-USER',
      data_2: `user_id:${user.user_id}`,
      data_3: `email:${user.email}`,
      data_4: `role:${user.role?.name || '-'}`,
      data_5: `last_login:${user.last_login.toISOString()}`,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async loginLdap(dto: LoginUserDto) {
    // 1. Autentikasi user ke LDAP
    const ldapUser = await this.ldapService.authenticate(
      dto.identifier,
      dto.password,
    );

    // DEBUG: cetak data LDAP (bisa diaktifkan jika perlu)
    // console.log('LDAP USER DATA:', JSON.stringify(ldapUser, null, 2));

    // 2. Cari user di database berdasarkan email (fallback ke username jika email null)
    let user = await this.userRepo.findOne({
      where: { email: ldapUser.email ?? ldapUser.username },
      relations: ['role'],
    });

    // 3. Jika user belum ada, buat baru
    if (!user) {
      const defaultPassword = await bcrypt.hash(dto.password, 10);

      // Mapping role LDAP ke role internal
      const mapRole = (ldapRoles: string[]) => {
        if (!ldapRoles || ldapRoles.length === 0) return '1';
        if (ldapRoles.some((r) => r.includes('Admin'))) return '2';
        if (ldapRoles.some((r) => r.includes('Manager'))) return '3';
        return '1';
      };

      const roleId = mapRole(
        Array.isArray(ldapUser.roles) ? ldapUser.roles : [],
      );

      // Full name fallback ke firstName + lastName jika displayName kosong
      const fullName =
        ldapUser.displayName ??
        (`${ldapUser.firstName ?? ''} ${ldapUser.lastName ?? ''}`.trim() ||
          ldapUser.username);

      // Buat user baru
      user = this.userRepo.create({
        user_id: randomUUID(),
        username: ldapUser.username,
        email: ldapUser.email ?? ldapUser.username,
        full_name: fullName,
        name: fullName,
        password: defaultPassword,
        status: 1,
        role: roleId,
        locationId: 'LOC001',
      } as DeepPartial<User>);

      await this.userRepo.save(user);
    }

    // 4. Update last login
    user.last_login = new Date();
    await this.userRepo.save(user);

    // 5. Generate JWT
    const payload: IJwtPayload = {
      id: user.user_id,
      name: user.full_name,
      email: user.email,
      role: user.role?.name ?? '1',
    };

    return {
      accessToken: await this.tokenManager.generateAccessToken(payload),
      refreshToken: await this.tokenManager.generateRefreshToken(payload),
    };
  }
}
