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

    const userId = await this.firebaseAdminService.verifyToken(
      accessToken.replace('Bearer', '').trim(),
    );

    if (!userId) {
      return false;
    }

    request.headers.userId = userId;

    return true;
  }
}
