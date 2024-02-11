import { Module } from '@nestjs/common';
import {HandleErrorservice } from './exceptions.service';

@Module({
  providers: [HandleErrorservice],
  exports: [HandleErrorservice],
})
export class ExceptionsModule {}
