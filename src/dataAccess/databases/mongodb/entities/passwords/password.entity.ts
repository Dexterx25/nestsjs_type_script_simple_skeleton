import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, ManyToOne, ObjectIdColumn, ObjectId } from "typeorm";
import { config } from "src/configurations/config/envs";
import { User } from "../users";

export interface IPasswords {
  password_id?:ObjectId;
  password?: string,
  salt?: string,
  is_vigent?: boolean,
  user_id?: ObjectId
}

@Entity(`${config.name_app}_passwords`)
export class Passwords extends Timestamps {
  @ObjectIdColumn()
  password_id!: ObjectId;

  @Column({ length: 250 })
  password!: string;
  
  @Column({ length: 250 })
  salt!: string;

  @Column({ type: 'boolean' })
  is_vigent!: boolean;
  
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User;

}
