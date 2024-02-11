import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
  GatewayTimeoutException,
} from '@nestjs/common';
import { config } from '../config/envs';
import { EnumErrorCodes } from './constants';

export interface IFormatExceptionMessage {
  statusCode?: number;
  message?: string;
  error?: boolean;
  details?: string[]
}

export class ExceptionsService {
  notFoundException(data?: IFormatExceptionMessage): void {
    throw new NotFoundException({...data, error: true});
  }
  badRequestException(data: IFormatExceptionMessage): void {
    throw new BadRequestException({...data, error: true});
  }
  internalServerErrorException(data?: IFormatExceptionMessage): void {
    throw new InternalServerErrorException({...data, error: true});
  }
  forbiddenException(data?: IFormatExceptionMessage): void {
    throw new ForbiddenException({...data, error: true});
  }
  unauthorizedException(data?: IFormatExceptionMessage): void {
    throw new UnauthorizedException({...data, error: true});
  }
  conflicException(data?: IFormatExceptionMessage): void {
    throw new ConflictException({...data, error: true});
  }
  invalidCoreBusiness(data?: IFormatExceptionMessage): void {
    throw new UnprocessableEntityException({...data, error: true});
  }
  timeOutError(data?: IFormatExceptionMessage): void {
    throw new GatewayTimeoutException({...data, error: true})
  }
}
const managerErrorsByCode = {
  [EnumErrorCodes.NOT_FOUND]: (data: IFormatExceptionMessage) => new ExceptionsService().notFoundException(data),
  [EnumErrorCodes.BAD_REQUEST]: (data: IFormatExceptionMessage) => new ExceptionsService().badRequestException(data),
  [EnumErrorCodes.INVALID_BUSINESS_RULE]: (data: IFormatExceptionMessage) => new ExceptionsService().invalidCoreBusiness(data),
  [EnumErrorCodes.SYSTEM_ERROR]: (data: IFormatExceptionMessage) => new ExceptionsService().internalServerErrorException(data),
  [EnumErrorCodes.FORBIDDEN_ERROR]: (data: IFormatExceptionMessage) => new ExceptionsService().forbiddenException(data),
  [EnumErrorCodes.UNAUTHORIZED_ERROR]: (data: IFormatExceptionMessage) => new ExceptionsService().unauthorizedException(data),
  [EnumErrorCodes.CONFLICT_ERROR]: (data: IFormatExceptionMessage) => new ExceptionsService().conflicException(data),
}
export class HandleErrorservice {
  handleError(error: IFormatExceptionMessage) {
    if((config.environment !== 'dev' && error.statusCode === EnumErrorCodes.DEFAULT_ERROR) || !error?.message) {
      managerErrorsByCode[EnumErrorCodes.DEFAULT_ERROR](error)
    }
    return managerErrorsByCode[error.statusCode!](error)
  }
}
