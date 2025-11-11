import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { IJwtPayload } from '../types/interface/IJwtPayload.interface';

export const UserDecorator: (...dataOrPipes: unknown[]) => ParameterDecorator =
  createParamDecorator(
    (data: unknown, context: ExecutionContext): IJwtPayload => {
      const req = context.switchToHttp().getRequest();
      return req.user as IJwtPayload;
    },
  );

export const CurrentUser = createParamDecorator(
  (field: keyof IJwtPayload | undefined, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user as IJwtPayload;
    return field ? user[field] : user;
  },
);
