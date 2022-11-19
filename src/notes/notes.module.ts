import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { FirestoreModule } from 'src/firestore/firestore.module';
import { FirebaseAdminModule } from 'src/firebase-admin/firebase-admin.module';

@Module({
  imports: [FirestoreModule, FirebaseAdminModule],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
