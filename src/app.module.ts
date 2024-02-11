import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/dataAccess/databases";
import { GenericModule } from "./modules/payments/generic.module";
import { ImplementationsModules } from "./dataAccess/implementations/implementations.module";
import { ExceptionsModule } from "./configurations/exceptions";

import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    GenericModule,
    ImplementationsModules,
    ExceptionsModule,
  ],
})
export class AppModule {}
 