import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Firebase } from './firebase';

async function bootstrap() {
  Firebase.init();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
