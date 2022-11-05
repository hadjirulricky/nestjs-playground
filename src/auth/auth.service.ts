import { Injectable } from '@nestjs/common';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Firebase } from 'src/firebase';

@Injectable()
export class AuthService {
  async signUp(email: string, password: string) {
    const auth = Firebase.getFirebaseAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (!result) {
      console.log('Account Created');
    } else {
      console.log('Failed to create account');
    }
    return;
  }

  login(): string {
    return 'You are logged in';
  }
}
