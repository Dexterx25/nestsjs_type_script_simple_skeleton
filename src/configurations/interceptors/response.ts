import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoggerService, WinstomServiceLogger } from 'src/utils/logger';

export class ResponseFormat<T> {
  @ApiProperty()
  duration!: string;
  @ApiProperty()
  method!: string;
  @ApiProperty()
  status!: number;
  data!: T;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  constructor(
    public readonly logger: WinstomServiceLogger | LoggerService
  ){}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseFormat<T>> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const response = httpContext.getResponse();
    return next.handle().pipe(
      map((data) => {
        const res = {
          data,
          duration: `${Date.now() - now}ms`,
          method: request.method,
          status: response.statusCode,
        }
        this.logger.log("ResponseInterceptor", JSON.stringify(res))
        return res
      }),
    );
  }
}
