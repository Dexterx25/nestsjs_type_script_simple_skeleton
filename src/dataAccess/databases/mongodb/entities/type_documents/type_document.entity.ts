import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, ManyToOne, ObjectIdColumn, ObjectId } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_type_documents`)
export class TypeDocument extends Timestamps {
  @ObjectIdColumn()
  type_document_id!: ObjectId;

  @Column({ length: 200 })
  name!: string;
  
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User
    
}
