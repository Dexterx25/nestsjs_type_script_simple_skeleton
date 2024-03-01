import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_type_documents`)
export class TypeDocument extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  type_document_id!: string;

  @Column({ length: 200 })
  name!: string;
  
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User
    
}
