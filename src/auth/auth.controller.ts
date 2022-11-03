import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(): string {
    return this.authService.signUp();
  }

  @Post('login')
  login(): string {
    return this.authService.login();
  }
}
