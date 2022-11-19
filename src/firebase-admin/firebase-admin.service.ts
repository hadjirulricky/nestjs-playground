import { Injectable } from '@nestjs/common';
import { auth, firestore } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

@Injectable()
export class FirebaseAdminService {
  constructor() {
    initializeApp();
  }

  getFirestore() {
    return firestore();
  }

  async verifyToken(token: string) {
    try {
      const decodedIdToken = await auth().verifyIdToken(token);
      return decodedIdToken.uid;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(userId: string) {
    try {
      const user = await auth().getUser(userId);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
