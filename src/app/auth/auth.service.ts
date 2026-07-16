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

  /**
   * Login pengguna
   * @param dto Data LoginUserDto
   * @returns Object berisi accessToken dan refreshToken
   * @throws mencari ke LDAP jika pengguna tidak ditemukan di database postgre
   */
  async authenticaton(dto: LoginUserDto) {
    try {
      // ==========================
      // Cari User Lokal
      // ==========================
      let user = await this.userRepo.findOne({
        where: [
          { email: dto.identifier },
          { username: dto.identifier },
          { NIK: dto.identifier },
        ],
        relations: ['role'],
      });

      // ==========================
      // Jika user belum ada -> LDAP
      // ==========================
      if (!user) {
        const ldapUser = await this.ldapService.authenticate(
          dto.identifier,
          dto.password,
        );

        // LDAP gagal
        if (!ldapUser) {
          await this.logService.createLog(undefined, {
            data_1: 'LOGIN-FAILED',
            data_2: `identifier:${dto.identifier}`,
            data_3: 'reason:USER_NOT_FOUND',
            data_4: 'source:LDAP',
          });

          throw new UnauthorizedException('Username atau password tidak valid');
        }

        // LDAP berhasil
        await this.logService.createLog(undefined, {
          data_1: 'LDAP-AUTH-SUCCESS',
          data_2: `username:${ldapUser.username}`,
          data_3: `email:${ldapUser.email ?? '-'}`,
        });

        const roleId = '2';

        const fullName =
          ldapUser.displayName ??
          (`${ldapUser.firstName ?? ''} ${ldapUser.lastName ?? ''}`.trim() ||
            ldapUser.username);

        const defaultPassword = await bcrypt.hash(dto.password, 10);

        user = this.userRepo.create({
          user_id: randomUUID(),
          username: ldapUser.username,
          email: ldapUser.email ?? ldapUser.username,
          full_name: fullName,
          name: fullName,
          password: defaultPassword,
          status: 1,
          role: roleId,
          locationId: 'LOC004',
          nik: null,
        } as DeepPartial<User>);

        await this.userRepo.save(user);

        // User otomatis dibuat
        await this.logService.createLog(user, {
          data_1: 'AUTO-CREATE-USER',
          data_2: `user_id:${user.user_id}`,
          data_3: `username:${user.username}`,
          data_4: `email:${user.email}`,
          data_5: 'source:LDAP',
        });

        // Reload user + role relation
        user = await this.userRepo.findOne({
          where: {
            user_id: user.user_id,
          },
          relations: ['role'],
        });
      }

      // ==========================
      // Safety Check
      // ==========================
      if (!user) {
        throw new UnauthorizedException('User tidak ditemukan');
      }

      // ==========================
      // Update Last Login
      // ==========================
      user.last_login = new Date();

      await this.userRepo.save(user);

      // ==========================
      // Login Success Log
      // ==========================
      await this.logService.createLog(user, {
        data_1: 'LOGIN-SUCCESS',
        data_2: `user_id:${user.user_id}`,
        data_3: `email:${user.email}`,
        data_4: `role:${user.role?.name ?? '-'}`,
        data_5: `login_at:${user.last_login.toISOString()}`,
      });

      // ==========================
      // JWT Payload
      // ==========================
      const payload: IJwtPayload = {
        id: user.user_id,
        name: user.full_name,
        email: user.email,
        role: user.role?.name ?? '1',
      };

      const accessToken = await this.tokenManager.generateAccessToken(payload);

      const refreshToken =
        await this.tokenManager.generateRefreshToken(payload);

      this.messageService.setMessage('Berhasil Login. Silahkan Masuk!');

      return {
        accessToken,
        refreshToken,
      };
    } catch (error: unknown) {
      const err = error as Error;

      await this.logService.createLog(undefined, {
        data_1: 'LOGIN-ERROR',
        data_2: `identifier:${dto.identifier}`,
        data_3: err.message,
        data_4: err.name,
      });

      throw error;
    }
  }
}
