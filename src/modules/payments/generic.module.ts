import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GenericController } from './genericController.controller';
import { GenericService } from './generic.service';
import { GenericMiddleware } from './middleware/epayco';
import { ImplementationsModules } from 'src/dataAccess/implementations/implementations.module';

@Module({
  imports: [
    ImplementationsModules,
  ],
  controllers: [GenericController],
  providers: [GenericService],
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