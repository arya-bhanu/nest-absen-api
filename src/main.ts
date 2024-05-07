import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  Logger.log(`Running at port [${port}]`);
  await app.listen(port);
}

bootstrap();
