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

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { initializeTransactionalContext } from 'typeorm-transactional';

import helmet from 'helmet';

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
      const allowedOrigins = [
        'http://localhost:5173', // dev frontend
        'http://localhost:4173', // staging frontend
        'https://digitalcaliper.webview.cloud', // staging
        'http://172.16.22.170', // prod ip
        'http://cims.gyssteel.com/', // prod domain
        'http://localhost:8085', // Swagger UI
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn('Blocked by CORS:', origin);
        callback(null, false);
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
      crossOriginOpenerPolicy: false,
      hidePoweredBy: true,
      contentSecurityPolicy: false,
    }),
  );

  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Dokumentasi API untuk Project Digital Caliper')
    .setVersion('1.0')
    .addBearerAuth()

    .addServer('http://localhost:8085', 'Development Server')
    .addServer('https://api-digitalcaliper.webview.cloud/', 'Staging Server')
    .addServer('http://172.16.22.170/api', 'Production IP Server')
    .addServer('http://cims.gyssteel.com/api', 'Production Domain Server')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-api', app, document);

  await app.listen(port, '0.0.0.0');
  Logger.log(`✅ Application is running on: http://0.0.0.0:${port}`);
})();
