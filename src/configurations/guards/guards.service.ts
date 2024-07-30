import { ForbiddenException, Injectable } from "@nestjs/common";
import { RedisService } from "../../configurations/redis/redis.service";
import { IUserPermission } from "./interface/guards.interface";
import { UserRepository } from "src/dataAccess/databases/repositories";


@Injectable()
export class GuardsService {
    
  constructor(
    private readonly redis: RedisService,
    private readonly userRepository: UserRepository,
  ) {}

  validateAccess = async (token: string, user: string): Promise<Boolean> => {
    const storedToken = await this.redis.getSessionValue('access', user);
    if (storedToken !== token)
      throw new ForbiddenException('This access token is not longer valid');
    return true;
  };

  validateRefresh = async (token: string, user: string): Promise<Boolean> => {
    const storedToken = await this.redis.getSessionValue('refresh', user);
    if (storedToken !== token)
      throw new ForbiddenException('This refresh token is not longer valid');
    return true;
  };

  validateSignToken = async (token: string, member: string) => {
    const storedToken = await this.redis.getSessionValue('sign', member);
    if (storedToken !== token)
      throw new ForbiddenException('This sign token is not longer valid');
    return true;
  };

  validatePermissions = async (
    userId: string,
    functionPermissions: string[],
  ) => {
    const permissions: IUserPermission[] = await this.userRepository
      .createQueryBuilder('u')
      .select(['p.name AS name', 'm.name as module'])
      .where('u.user_id = :user_id')
      .andWhere('u.deletedAt IS NULL')
      .leftJoin('pos.role', 'role')
      .setParameter('user_id', userId)
      .getRawMany();
    if (!permissions.length)
      throw new ForbiddenException('Invalid User or Invalid Permissions');
    console.dir({
      permissions: permissions.map(
        (val) =>
          `${val.module}-${val.name} -> ${functionPermissions[0]} = ${
            functionPermissions[0] === val.module + '-' + val.name
          }`,
      ),
    });
    const permissionsName = permissions.map(
      (val) => `${val.module}-${val.name}`,
    );
    const found = functionPermissions.every((v) => permissionsName.includes(v));
    if (!found) throw new ForbiddenException('Bad Permissions');
    return true;
  };
}
