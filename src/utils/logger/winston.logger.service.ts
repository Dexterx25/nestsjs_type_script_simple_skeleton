import { WinstonLogger } from "nest-winston";
import { NewRelicService } from "./newrelic.service";
import { Injectable } from "@nestjs/common";
import { createLogger } from "winston";
import * as winston from 'winston';

@Injectable()
export class WinstomServiceLogger extends WinstonLogger {
    constructor(
    ){super(createLogger({
        level: 'debug',
        format: winston.format.combine(
          new NewRelicService().newRelicFormater(winston)(),
          winston.format.label({label: 'test'}),
          winston.format.json(),
          winston.format.colorize({ all: true }),
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          winston.format.printf(({ level, timestamp, message, ...info }) => {
              return `${timestamp} [${level}] - ${message} - ${info.context}`;
          })
         ),
        transports: [new winston.transports.Console()],
    }))}
}