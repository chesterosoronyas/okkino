/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet, { contentSecurityPolicy } from 'helmet';
import { AppModule } from './app/app.module';
//import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );*/
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(helmet({contentSecurityPolicy:false}));
  app.enableCors();
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application playground is running on: http://localhost:${port}/graphql`
  );
}

bootstrap();
