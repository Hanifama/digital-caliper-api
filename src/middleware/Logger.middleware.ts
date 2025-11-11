import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent: string = request.get('user-agent') || '';

    response.on('finish', (): void => {
      const { statusCode } = response;

      const logMessage: string = `${method} ${originalUrl} ${statusCode} - ${userAgent} ${ip}`;

      if (statusCode >= 500) {
        this.logger.error(logMessage);
      } else if (statusCode >= 400) {
        this.logger.warn(logMessage);
      } else {
        this.logger.log(logMessage);
      }
    });

    next();
  }
}
