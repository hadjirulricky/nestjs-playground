import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from 'src/firebase-admin/firebase-admin.module';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [FirebaseModule, FirebaseAdminModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
