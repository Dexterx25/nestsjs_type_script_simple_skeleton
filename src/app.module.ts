import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/dataAccess/databases";
import { GenericModule } from "./modules/payments/generic.module";
import { ImplementationsModules } from "./dataAccess/implementations/implementations.module";
import { ExceptionsModule } from "./configurations/exceptions";
// import { APP_INTERCEPTOR } from "@nestjs/core";
import * as dotenv from 'dotenv';
// import { ErrorInterceptor } from "./configurations/exceptions/interceptor";
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
/*   providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
  ] */
})
export class AppModule {}
 