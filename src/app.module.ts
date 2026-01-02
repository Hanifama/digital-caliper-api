import {
  Module,
  NestModule,
  MiddlewareConsumer,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { AppLoggerMiddleware } from './middleware/Logger.middleware';

import { ExceptionFilter } from './filter/exception.filter';
import { ResponseInterceptor } from './interceptor/response.interceptor';

import { datasourcePostgres } from './config/database.config';

import { MessageModule } from './app/message/message.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { MasterModule } from './app/master/master.module';
import { ProductModule } from './app/product/product.module';
import { QcTemplateModule } from './app/qc-template/qc-template.module';
import { UploadModule } from './app/upload/upload.module';
import { QcListModule } from './app/qc-list/qc-list.module';
import { DashboardModule } from './app/dashboard/dashboard.module';
import { LocationModule } from './app/location/location.module';
import { SizeModule } from './app/size/size.module';
import { QcRecordModule } from './app/qc-record/qc-record.module';
import { AppVersionModule } from './app/app-version/app-version.module';
import { LogModule } from './app/log-app/log.module';
import { NotificationModule } from './app/notification/notification.module';
import { GeneratorModule } from './app/generator/generator.module';

let transactionalDS: DataSource;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          ...datasourcePostgres.options,
          autoLoadEntities: true,
        };
      },
      async dataSourceFactory(options) {
        if (!options) throw new Error('Invalid options passed');

        const ds = new DataSource(options);

        if (!transactionalDS) {
          transactionalDS = addTransactionalDataSource(ds);
        }

        return transactionalDS;
      },
    }),
    MessageModule,
    AppVersionModule,
    LogModule,
    NotificationModule,
    GeneratorModule,
    UploadModule,
    MasterModule,
    SizeModule,
    AuthModule,
    DashboardModule,
    ProductModule,
    QcTemplateModule,
    QcListModule,
    QcRecordModule,
    LocationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
