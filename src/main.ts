import * as express from 'express';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ConsoleLogger,
  INestApplication,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';

import { initializeTransactionalContext } from 'typeorm-transactional';

import helmet, { frameguard, noSniff, xssFilter } from 'helmet';

import compression from 'compression';

(async (): Promise<void> => {
  const port: number | string = process.env.PORT ?? 3000;

  initializeTransactionalContext();

  const app: INestApplication = await NestFactory.create<INestApplication>(
    AppModule,
    {
      logger: new ConsoleLogger({
        colors: true,
        prefix: 'QCMS CALIPER',
        timestamp: true,
      }),
    },
  );

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        'http://localhost:5173', // dev
        'http://localhost:4173', // staging
        'https://digitalcaliper.webview.cloud', // dev prod
        'https://www.digitalcaliper.webview.cloud', // prod www
      ];

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(
    compression({
      threshold: 1024,
    }),
  );

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      hidePoweredBy: true,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [`'self'`],
          frameSrc: [`'self'`],
        },
      },
    }),
    noSniff(),
    xssFilter(),
    frameguard(),
  );

  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}`);
})();
