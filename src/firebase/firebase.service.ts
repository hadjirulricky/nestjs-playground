import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable()
export class FirebaseService {
  private instance: FirebaseApp;

  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'AIzaSyAOKq1UUgtShdIxsyy6-7rTh2NDwe_xies',
      authDomain: 'sankana-4c6dc.firebaseapp.com',
      projectId: 'sankana-4c6dc',
      storageBucket: 'sankana-4c6dc.appspot.com',
      messagingSenderId: '554048979666',
      appId: '1:554048979666:web:8a01df8841ddfd4e0c230b',
    };

    // Initialize Firebase
    this.instance = initializeApp(firebaseConfig);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const auth = getAuth(this.instance);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      const auth = getAuth(this.instance);
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
