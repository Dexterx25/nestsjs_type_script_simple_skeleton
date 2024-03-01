import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GenericController } from './genericController.controller';
import { GenericService } from './generic.service';
import { GenericMiddleware } from './middleware/epayco';
import { ImplementationsModules } from 'src/dataAccess/implementations/implementations.module';
import { DatabaseModule } from 'src/dataAccess/databases';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    ImplementationsModules,
    ConfigModule
  ],
  controllers: [GenericController],
  providers: [
    //repositories
    GenericService],
  exports: [GenericService],
})
export class GenericModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(GenericMiddleware)
      .forRoutes({path: `${process.env.URL_SELFT_API}/generic`, method: RequestMethod.ALL})
      // can add more middlewares or more target endopoints to existing middleware

    }
  }