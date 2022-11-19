import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from 'src/firebase-admin/firebase-admin.module';
import { FirestoreService } from './firestore.service';

@Module({
  imports: [FirebaseAdminModule],
  providers: [FirestoreService],
  exports: [FirestoreService],
})
export class FirestoreModule {}
