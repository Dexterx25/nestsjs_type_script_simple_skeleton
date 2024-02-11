import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { GenericServiceImplementation } from 'src/dataAccess/implementations/generic_implementation';

@Injectable()
export class GenericMiddleware implements NestMiddleware {
     constructor(
          private readonly genericServiceImplementation: GenericServiceImplementation
          // you can add more services by the current module or another services complementation
      ) {}
   async use(_req: Request, _res: Response, next: NextFunction) {
     await this.genericServiceImplementation.loginToGenericImpl()
     next()
  }
}
