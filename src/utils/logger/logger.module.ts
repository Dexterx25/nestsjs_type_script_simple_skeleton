import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { NewRelicService } from './newrelic.service';
import { WinstomServiceLogger } from './winston.logger.service';
@Module({
  providers: [LoggerService, NewRelicService, WinstomServiceLogger],
  exports: [LoggerService, NewRelicService, WinstomServiceLogger],
})
export class LoggerModule {}
