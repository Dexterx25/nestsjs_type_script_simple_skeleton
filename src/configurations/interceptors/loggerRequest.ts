import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService, WinstomServiceLogger } from '../../utils/logger';

@Injectable()
export class LoggingRequetInterceptor implements NestInterceptor {
  constructor(private readonly logger:WinstomServiceLogger|LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const response = httpContext.getResponse();
    const ip = this.getIP(request);
    this.logger.log(
      `body=${JSON.stringify(request.body)}`,
      `Incoming Request on ${request.path} method=${request.method} ip=${ip}`,
    );

    return next.handle().pipe(
      tap(({data}) => {
        const res = {
          data,
          duration: `${Date.now() - now}ms`,
          method: request.method,
          status: response.statusCode,
        }
        this.logger.log(
          `response=${JSON.stringify(res)}`,
          `Incoming Request on ${request.path} method=${request.method} ip=${ip}`,
        );
      }),
    );
  }

  private getIP(request: any): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.connection.remoteAddress;
    }
    return ip.replace('::ffff:', '');
  }
}
