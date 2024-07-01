import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './config/data-source';

async function bootstrap() {
  await AppDataSource.initialize();
  console.log("inicou")
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("rodando na porta quatrunmil")
}
bootstrap();
