import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

@Injectable()
export class FirebaseAdminService {
  constructor() {
    initializeApp();
  }

  async verifyToken(token: string) {
    const decodedIdToken = await auth().verifyIdToken(token);
    if (decodedIdToken) {
      console.log(decodedIdToken.email);
      console.log('Verify token Success');
    } else {
      console.log('Invalid token');
    }

    return decodedIdToken;
  }
}
