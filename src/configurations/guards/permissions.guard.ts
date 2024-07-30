import { ExecutionContext, CanActivate, Injectable } from '@nestjs/common';
import { GuardsService } from './guards.service';
import { ICustomReq } from './interface/guards.interface';
import { IAccess } from '../jwt';
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly guardService: GuardsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest() as ICustomReq;
    const permissions = req.headers['tasks-scheduler-permissions'] as string;
    if (!permissions) return true;
    const permissionsArray = permissions.split(';');
    if (!permissionsArray.length) return true;
    const payload = req.session as IAccess;
    await this.guardService.validatePermissions(payload.id, permissionsArray);
    return true;
  }
}
