import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as Process from 'process';

async function bootstrap() {
  const microserviceOptions: any = {
    transport: Transport.TCP,
    options: {
      host: Process.env.MICROSERVICES_HOST,
      port: process.env.MICROSERVICE_PORT,
    },
  };
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

bootstrap().then();
