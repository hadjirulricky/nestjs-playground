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
    return await this.firebaseService.createUserWithEmailAndPassword(
      signupDto.email,
      signupDto.password,
    );
  }

  async login(loginDto: LoginDto) {
    return await this.firebaseService.signInWithEmailAndPassword(
      loginDto.email,
      loginDto.password,
    );
  }
}
