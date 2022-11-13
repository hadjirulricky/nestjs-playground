import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { LoginDto, SignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private firebaseService: FirebaseService,
    private firebaseAdminService: FirebaseAdminService,
  ) {}

  async signUp(signupDto: SignupDto) {
    const result = await this.firebaseService.createUserWithEmailAndPassword(
      signupDto.email,
      signupDto.password,
    );
    if (result) {
      console.log('Account Created');
    } else {
      console.log('Failed to create account');
    }
    return;
  }

  async login(loginDto: LoginDto) {
    const result = await this.firebaseService.signInWithEmailAndPassword(
      loginDto.email,
      loginDto.password,
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
