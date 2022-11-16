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
      apiKey: 'AIzaSyBUlMHliSgqlooFLO5kZaS6_X5vbtmulh0',
      authDomain: 'playground-47eb5.firebaseapp.com',
      projectId: 'playground-47eb5',
      storageBucket: 'playground-47eb5.appspot.com',
      messagingSenderId: '492755707078',
      appId: '1:492755707078:web:8fa4f95ba13a88735023c7',
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
