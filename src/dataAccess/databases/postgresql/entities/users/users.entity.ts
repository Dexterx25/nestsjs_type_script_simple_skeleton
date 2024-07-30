import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Auth } from "../auth/auth.entity";
import { config } from "src/configurations/config/envs";
import { TypeDocument } from "../type_documents/type_document.entity";
import { RolesUsers } from "../rolesUsers";
import { AuthRefresh } from "../auth_refresh";
import { Passwords } from "../passwords";
import { UserDetails } from "../user_details";

export interface IUser {
  user_id?: string,
  names: string,
  surnames: string,
  nikname: string,
}
export interface IUserData {
  names: string,
  surnames: string,
  nikname: string,
  email: string
}

@Entity(`${config.name_app}_users`)
export class User extends Timestamps {

  @PrimaryGeneratedColumn("uuid")
  user_id!: string;

  @Column({ length: 100 })
  names!: string;
  
  @Column({ length: 100 })
  surnames!: string;

  @Column({ length: 200 })
  nikname!: string;

  
  @Column({ length: 200,  unique: true })
  email!: string;

  @OneToOne(_type => Auth, auth => auth.user_id)
  auths!: Auth

  @OneToOne(_type => AuthRefresh, auth_refresh => auth_refresh.user_id)
  auths_refresh!: AuthRefresh
  
  @ManyToOne(_type => TypeDocument, typeDocument => typeDocument.users, { nullable: false })
  @JoinColumn({ name: 'type_document_id' })
  type_document_id!: string; 

  @OneToMany(_type => Passwords, passwords => passwords.user_id)
  passwords!: Passwords[]

  @OneToMany(_type => UserDetails, user_details => user_details.user_detail_id)
  userDetails!: UserDetails[]

  @OneToMany(_type => RolesUsers, roleUsers => roleUsers.user_id)
  role!: RolesUsers[]

}
