import { GuardsService } from './guards.service';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import {
  UnauthorizedException,
  ForbiddenException,
  ExecutionContext,
  CanActivate,
  Injectable,
} from '@nestjs/common';
import { ISign } from '../jwt';

@Injectable()
export class SignGuard implements CanActivate {
  constructor(
    private readonly guardService: GuardsService,
    private readonly config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) throw new UnauthorizedException('Null Sign Token'); //Null token

    try {
      const user = verify(
        token,
        `${this.config.get<string>('JWT_SIGN_KEY')}`,
      ) as ISign;
      req.session = user; //User Session
      await this.guardService.validateSignToken(token, user.member);
    } catch (error) {
      throw new ForbiddenException('Invalid Sign Token');
    }
    return true;
  }
}
