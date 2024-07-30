//import { Auth } from "src/dataAccess/databases/postgresql/entities";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRefresh } from 'src/dataAccess/databases/postgresql/entities';
import { MongoRepository } from 'typeorm';
import { RepositoryAbs } from '../abstractRepositoryMethdos';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class AuthRefreshRepository extends RepositoryAbs {
    constructor(
        @InjectRepository(AuthRefresh)
        private readonly authRepository: MongoRepository<AuthRefresh>,
    ){super()}
    async create({
      expiration_date,
      user_id,
      refresh_token
    }) {
     const instance = await this.authRepository.create({
      auth_refresh_id: uuidv4(),
      expiration_date,
      user_id,
      refresh_token
    })   
     return instance
    }
}
