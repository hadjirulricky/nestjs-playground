import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private firebaseAdminService: FirebaseAdminService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers.authorization;

    if (!accessToken) {
      return false;
    }

    return this.validateRequest(accessToken.replace('Bearer', '').trim());
  }

  private async validateRequest(token: string) {
    const validAccount = await this.firebaseAdminService.verifyToken(token);

    if (!validAccount) {
      return false;
    }

    return true;
  }
}
