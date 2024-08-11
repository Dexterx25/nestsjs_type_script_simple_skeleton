import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  debug(message: string, context: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(message: string, context: string) {
    super.log(`[INFO] ${message}`, context);
  }
  error(message: string, context: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace, context);
  }
  warn(message: string, context: string) {
    super.warn(`[WARN] ${message}`, context);
  }
  verbose(message: string, context: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
