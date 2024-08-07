import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorservice } from './exceptions.service';
import { EnumErrorCodes } from './constants';
import { LoggerService, WinstomServiceLogger } from 'src/utils/logger';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  constructor(
    private readonly handleErrorService: HandleErrorservice,
    private readonly logger: LoggerService | WinstomServiceLogger
    ){}
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
          this.logger.error('Error intercepted', JSON.stringify(error));
          switch(error.code?.toString()){
            case '23505':
             throw this.handleErrorService.handleError({
                details: ['Este registro ya se encuentra en el sistema'],
                error,
                message: 'Registro duplicado',
                statusCode: EnumErrorCodes.INVALID_BUSINESS_RULE,
              })
            default:
            throw new BadGatewayException('Error inesperado')
          }
      }),
    );
  }
}
