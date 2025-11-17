import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IJwtPayload } from '../../types/interface/IJwtPayload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenManagerService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async generateAccessToken(jwtPayload: IJwtPayload): Promise<string> {
    return await this.jwtService.signAsync(jwtPayload, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: '365d', // token berlaku 1 tahun
    });
  }

  public async generateRefreshToken(jwtPayload: IJwtPayload): Promise<string> {
    return await this.jwtService.signAsync(jwtPayload, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn: '7d',
    });
  }

  public async verifyRefreshToken(refreshToken: string): Promise<string> {
    const { id, name, email, role }: IJwtPayload =
      await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      });

    if (!id || !name || !email || !role) throw new Error('Invalid token');

    return await this.generateAccessToken({ id, name, email, role });
  }
}
