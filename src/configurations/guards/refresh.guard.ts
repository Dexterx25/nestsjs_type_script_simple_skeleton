import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { GuardsService } from './guards.service';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { IAccess } from './interface/guards.interface';

@Injectable()
export class RefreshGuard implements CanActivate {
  constructor(
    private readonly guardService: GuardsService,
    private readonly config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) throw new UnauthorizedException('Null Refresh Token'); //Null token

    try {
      const user = verify(
        token,
        `${this.config.get<string>('JWT_REFRESH_KEY')}`,
      ) as IAccess;
      req.session = user; //User Session
      await this.guardService.validateRefresh(token, user.id);
    } catch (error) {
      throw new ForbiddenException('Invalid Refresh Token');
    }
    return true;
  }
}
