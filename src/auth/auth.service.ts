import { Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Firebase } from 'src/firebase';

@Injectable()
export class AuthService {
  async signUp(email: string, password: string) {
    const auth = Firebase.getFirebaseAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result) {
      console.log('Account Created');
    } else {
      console.log('Failed to create account');
    }
    return;
  }

  async login(email: string, password: string) {
    const auth = Firebase.getFirebaseAuth();
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (result) {
      const accesstoken = await result.user.getIdToken();
      console.log(accesstoken);
      console.log(result.user);
      console.log('Login success');
    } else {
      console.log('Login Failed');
    }
    return;
  }
}
