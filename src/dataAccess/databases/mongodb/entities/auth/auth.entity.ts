import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, OneToOne, ObjectIdColumn, ObjectId } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_auth`)
export class Auth extends Timestamps {
  @ObjectIdColumn()
  auth_id!: ObjectId;

  @Column({ length: 250 })
  access_token!: string;
  
  @Column({ type: "timestamp", select: false })
  expiration_date?: string;

  @OneToOne(_type => User, user => user.user_id)
  user_id!: User;

}
