import { Injectable } from '@nestjs/common';
import { auth, credential, firestore } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import * as serviceAccount from '../../google_cred.json';

@Injectable()
export class FirebaseAdminService {
  constructor() {
    const firebaseServiceAccount: object = serviceAccount;
    initializeApp({
      credential: credential.cert(firebaseServiceAccount),
    });
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
