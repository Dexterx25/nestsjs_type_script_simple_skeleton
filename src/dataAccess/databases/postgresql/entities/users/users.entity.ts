import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, OneToMany } from "typeorm";
import { Auth } from "../auth/auth.entity";
import { config } from "src/configurations/config/envs";
import { TypeDocument } from "../type_documents/type_document.entity";
import { RolesUsers } from "../rolesUsers";
import { AuthRefresh } from "../auth_refresh";
import { Passwords } from "../passwords";
import { UserDetails } from "../user_details";
import { ProductsUsers } from "../productsUserDetails";

export interface IUser {
  user_id?: string,
  names: string,
  surnames: string,
  nikname: string,
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

  @OneToOne(_type => Auth, auth => auth.user_id)
  auths!: Auth

 @OneToOne(_type => AuthRefresh, auth_refresh => auth_refresh.user_id)
  auths_refresh!: AuthRefresh

  @OneToMany(_type => TypeDocument, documents => documents.user_id)
  document!: TypeDocument[]

  @OneToMany(_type => RolesUsers, roleUsers => roleUsers.role_id)
  role!: RolesUsers[]

  
  @OneToMany(_type => Passwords, passwords => passwords.user_id)
  password!: Passwords[]
  
  @OneToMany(_type => UserDetails, user_details => user_details.user_detail_id)
  userDetails!: UserDetails[]

  @OneToMany(_type => ProductsUsers, productsUsers => productsUsers.user_id)
   productsUsers!: ProductsUsers[]

}
