import { Module } from '@nestjs/common';
import { GuardsService } from './guards.service';
import { RedisModule } from '../redis';
import { UserRepository } from 'src/dataAccess/databases/repositories';
import { RedisService } from '../redis/redis.service';
import { DatabaseModule } from 'src/dataAccess/databases';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, RedisModule, ConfigModule],
  providers: [GuardsService, UserRepository, RedisService],
  exports: [GuardsService],
})

export class GuardsModule { }
