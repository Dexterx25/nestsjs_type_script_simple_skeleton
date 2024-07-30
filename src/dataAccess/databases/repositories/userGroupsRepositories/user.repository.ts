import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dataAccess/databases/postgresql/entities';
import { MongoRepository } from 'typeorm';
import { RepositoryAbs } from '../abstractRepositoryMethdos';

@Injectable()
export class UserRepository extends RepositoryAbs {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ){super()}
    async create({
        names, nikname, surnames, email
        }): Promise<User> {
        const intanceUser = await this.userRepository.create({
            names,
            nikname,
            surnames,
            email
         })
         return intanceUser
    }
    createQueryBuilder = this.userRepository.createQueryBuilder
}
