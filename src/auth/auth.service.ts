import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(
    private firebaseService: FirebaseService,
    private firebaseAdminService: FirebaseAdminService,
  ) {}

  async signUp(email: string, password: string) {
    const result = await this.firebaseService.createUserWithEmailAndPassword(
      email,
      password,
    );
    if (result) {
      console.log('Account Created');
    } else {
      console.log('Failed to create account');
    }
    return;
  }

  async login(email: string, password: string) {
    const result = await this.firebaseService.signInWithEmailAndPassword(
      email,
      password,
    );

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

  async verifyToken(token: string) {
    await this.firebaseAdminService.verifyToken(token);
  }
}
