import { NestFactory, } from '@nestjs/core';
import helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { INestApplication, NestApplicationOptions, } from '@nestjs/common';
import { appConfig, } from './app/config/config';
import { AppModule, } from './app/app.module';

async function bootstrap() {
  const opts: NestApplicationOptions = {};
  const app: INestApplication = await NestFactory.create<INestApplication>(
    AppModule,
    opts
  );
  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());
  app.enableCors();

  await app.listen(appConfig().port);
}
bootstrap();
