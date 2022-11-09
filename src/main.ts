import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Firebase } from './firebase';
import { FirebaseAdmin } from './firebase.admin';

async function bootstrap() {
  Firebase.init();
  FirebaseAdmin.init();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
