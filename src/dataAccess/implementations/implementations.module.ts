import { Module } from '@nestjs/common';
import { GenericServiceImplementation } from './generic_implementation';
import { AxiosDataAccess } from '../recurses/axios';
import { ExceptionsModule } from 'src/configurations/exceptions';

@Module({
  imports: [ExceptionsModule],
  exports: [GenericServiceImplementation],
  providers: [GenericServiceImplementation, AxiosDataAccess],
})
export class ImplementationsModules {}
