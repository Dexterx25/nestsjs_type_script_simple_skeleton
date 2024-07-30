import { Module } from '@nestjs/common';
import { dataBaseProviderCustom } from './database.service';
//import { MongoDatabaseModule } from './mongodb/database.module';
import {
  Auth, 
  User, 
  Passwords, 
  AuthRefresh, 
  Roles, 
  RolesUsers, 
  Timestamps, 
  TypeDocument, 
  UserDetails,
  RolesPermissions,
  Permissions} from 'src/dataAccess/databases/postgresql/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    dataBaseProviderCustom,
    TypeOrmModule.forFeature([
      User, 
      Auth, 
      Passwords, 
      Timestamps, 
      AuthRefresh, 
      Roles, 
      RolesUsers, 
      TypeDocument, 
      UserDetails,
      RolesPermissions,
      Permissions
    ]),
    //PostgresDatabaseModule,
    // MongoDatabaseModule,
  ],
  exports: [
    dataBaseProviderCustom,
    TypeOrmModule,
  ]
})
export class DatabaseModule {}
