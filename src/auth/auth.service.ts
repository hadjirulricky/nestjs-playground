import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp(): string {
    return 'You are registered';
  }

  login(): string {
    return 'You are logged in';
  }
}
