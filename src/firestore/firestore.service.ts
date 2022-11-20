import { BadRequestException, Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';

@Injectable()
export class FirestoreService {
  constructor(private firebaseAdminService: FirebaseAdminService) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  async add(collection: string, object: Object) {
    try {
      const db = this.firebaseAdminService.getFirestore();
      return await db.collection(collection).add(object);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(userId: string, collection: string, documentId: string) {
    try {
      const db = this.firebaseAdminService.getFirestore();
      const data = await db
        .collection(collection)
        .where('user.id', '==', userId)
        .get();

      return await data.docs.find((doc) => doc.id == documentId)?.ref.delete();
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
