//import { Auth } from "src/dataAccess/databases/postgresql/entities";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/dataAccess/databases/postgresql/entities';
import { MongoRepository } from 'typeorm';
import { RepositoryAbs } from '../abstractRepositoryMethdos';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class AuthRepository extends RepositoryAbs {
    constructor(
        @InjectRepository(Auth)
        private readonly authRepository: MongoRepository<Auth>,
    ){super()}
    async create({
      access_token,
      expiration_date,
      user_id
    }) {
     const instance = await this.authRepository.create({
      access_token, 
      expiration_date,
      user_id,
      auth_id: uuidv4()
    })   
     return await this.authRepository.save(instance)
    }
}
