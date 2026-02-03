import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import * as ldap from 'ldapjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LdapService {
  constructor(private readonly config: ConfigService) {}

  private createClient() {
    return ldap.createClient({
      url: this.config.get<string>('LDAP_URL'),
      timeout: 5000,
      connectTimeout: 5000,
    });
  }

  async authenticate(username: string, password: string) {
    const client = this.createClient();

    const bindDN = this.config.get<string>('LDAP_BIND_DN');
    const bindPassword = this.config.get<string>('LDAP_BIND_PASSWORD');
    const searchBase = this.config.get<string>('LDAP_SEARCH_BASE');
    const rawFilter = this.config.get<string>('LDAP_SEARCH_FILTER');

    if (!bindDN || !bindPassword || !searchBase || !rawFilter) {
      throw new Error('LDAP config is incomplete');
    }

    const searchFilter = rawFilter.replace('{{username}}', username);

    // Debug LDAP config (komentar, bisa diaktifkan jika perlu)
    // console.log('\n================ LDAP CONFIG DEBUG ================');
    // console.log('LDAP_URL           :', this.config.get('LDAP_URL'));
    // console.log('LDAP_BIND_DN       :', bindDN);
    // console.log('LDAP_SEARCH_BASE   :', searchBase);
    // console.log('LDAP_SEARCH_FILTER :', searchFilter);
    // console.log('===================================================\n');

    // 1. Bind service account
    await new Promise<void>((resolve, reject) => {
      client.bind(bindDN, bindPassword, (err) => {
        if (err) {
          // console.log('❌ LDAP SERVICE BIND FAILED', err.message);
          return reject(new UnauthorizedException('LDAP service bind failed'));
        }
        // console.log('✅ LDAP SERVICE BIND SUCCESS');
        resolve();
      });
    });

    // 2. Search user
    const user = await new Promise<any>((resolve, reject) => {
      const opts: ldap.SearchOptions = {
        filter: searchFilter,
        scope: 'sub',
        attributes: ['*'], // ambil semua attribute
      };

      let total = 0;
      let foundUser: any = null;

      // console.log('🔎 LDAP SEARCH STARTED...');
      // console.log('SEARCH BASE:', searchBase);

      client.search(searchBase, opts, (err, res) => {
        if (err) return reject(err);

        res.on('searchEntry', (entry) => {
          total++;
          // console.log('\n================ LDAP ENTRY FOUND ================');
          // console.log('ENTRY NUMBER:', total);
          // console.log('DN:', entry.dn?.toString());
          // console.log('OBJECT:', JSON.stringify(entry.object, null, 2));
          // console.log('ATTRIBUTES:', JSON.stringify(entry.attributes, null, 2));
          // console.log('=================================================\n');

          foundUser = { dn: entry.dn?.toString(), raw: {} };
          entry.attributes.forEach((attr) => {
            foundUser.raw[attr.type] =
              attr.values.length === 1 ? attr.values[0] : attr.values;
          });
        });

        res.on('error', (err) => {
          // console.log('❌ LDAP SEARCH STREAM ERROR', err);
          reject(err);
        });

        res.on('end', (result) => {
          // console.log('🔚 LDAP SEARCH FINISHED');
          // console.log('STATUS CODE:', result?.status);
          // console.log('TOTAL ENTRY FOUND:', total);

          if (!foundUser) {
            reject(new UnauthorizedException('User LDAP tidak ditemukan'));
          } else {
            resolve(foundUser);
          }
        });
      });
    });

    // 3. Bind user to validate password
    // console.log('\n🔐 LDAP USER AUTHENTICATION');
    // console.log('USER DN:', user.dn);

    if (!user.dn) {
      throw new UnauthorizedException('User ditemukan tapi DN tidak terbaca');
    }

    await new Promise<void>((resolve, reject) => {
      client.bind(user.dn, password, (err) => {
        if (err) {
          // console.log('❌ LDAP USER PASSWORD INVALID');
          return reject(new UnauthorizedException('Password LDAP salah'));
        }
        // console.log('✅ LDAP USER BIND SUCCESS');
        resolve();
      });
    });

    client.unbind();

    // console.log('\n🎉 LDAP AUTH SUCCESS');
    // console.log('USERNAME:', username);
    // console.log('===================================================\n');

    // 4. Return mapped user data
    return {
      dn: user.dn,
      username: user.raw?.sAMAccountName ?? username,
      email: user.raw?.userPrincipalName ?? null,
      displayName: user.raw?.displayName ?? null,
      firstName: user.raw?.givenName ?? null,
      lastName: user.raw?.sn ?? null,
      roles: Array.isArray(user.raw?.memberOf)
        ? user.raw.memberOf
        : user.raw?.memberOf
          ? [user.raw.memberOf]
          : [],
    };
  }
}
