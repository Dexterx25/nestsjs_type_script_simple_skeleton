import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_type_documents`)
export class TypeDocument extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  type_document_id!: string;

  @Column({ length: 200 })
  name!: string;

  @OneToMany(_type => User, user => user.type_document_id)
  users!: User[];
}
