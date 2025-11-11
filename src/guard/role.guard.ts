import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ERole } from '../types/enum/ERole.enum';
import { IJwtPayload } from '../types/interface/IJwtPayload.interface';
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic: boolean = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (isPublic) return true;

    const roles: ERole[] = this.reflector.get<ERole[]>(
      'roles',
      context.getHandler(),
    );

    if (!roles) throw new ForbiddenException('Anda tidak memiliki akses role!');

    const request = context.switchToHttp().getRequest();
    const user: IJwtPayload = request.user;

    if (!this.matchRoles(roles, user.role as any)) {
      throw new ForbiddenException(
        'Anda tidak memiliki akses pada service ini!',
      );
    }

    return this.matchRoles(roles, user.role as any);
  }

  private matchRoles(allowedRoles: ERole[], userRole: ERole): boolean {
    return allowedRoles.includes(userRole);
  }
}
