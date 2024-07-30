import { Module } from '@nestjs/common';
import { AxiosDataAccess } from '../recurses/axios';
import { ExceptionsModule } from 'src/configurations/exceptions';
import { GenericServiceImplementation } from './generic_implementation';

@Module({
  imports: [ExceptionsModule],
  exports: [GenericServiceImplementation],
  providers: [GenericServiceImplementation, AxiosDataAccess],
})
export class ImplementationsModules {}
