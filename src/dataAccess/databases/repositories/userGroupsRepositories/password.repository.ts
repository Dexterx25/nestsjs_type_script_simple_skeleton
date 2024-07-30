import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passwords } from 'src/dataAccess/databases/postgresql/entities';
import { MongoRepository } from 'typeorm';
import { RepositoryAbs } from '../abstractRepositoryMethdos';

@Injectable()
export class PasswordsRepository extends RepositoryAbs {
    constructor(
        @InjectRepository(Passwords)
        private readonly authRepository: MongoRepository<Passwords>,
    ){super()}
    async create({ is_vigent, password, salt, user_id }) {
      const instance = await this.authRepository.create({
        password,
        salt,
        user_id,
        is_vigent,
      })
     return  instance
    }
}
