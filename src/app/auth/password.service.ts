import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  /**
   * Hash password menggunakan bcrypt
   * @param password Password asli dari user
   * @returns Password yang sudah di-hash
   */
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10); // saltRounds = 10
  }

  /**
   * Membandingkan password yang diinput user dengan password tersimpan di database
   * @param passwordPayload Password yang dikirim user saat login
   * @param userPassword Password hash dari database
   * @throws BadRequestException jika password tidak cocok
   */
  async comparePassword(
    passwordPayload: string,
    userPassword: string,
  ): Promise<void> {
    const isMatch: boolean = await bcrypt.compare(
      passwordPayload,
      userPassword,
    );

    if (!isMatch) throw new BadRequestException('Maaf, password anda salah!');
  }
}
