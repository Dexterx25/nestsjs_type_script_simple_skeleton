import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Log del cuerpo de la solicitud
    console.log('Request Body:', req.body);

    // Usar Morgan para registrar el resto de la solicitud
    morgan('combined')(req, res, next);
  }
}
