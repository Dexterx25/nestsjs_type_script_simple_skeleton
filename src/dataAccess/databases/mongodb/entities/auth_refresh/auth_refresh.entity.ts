import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, OneToOne, JoinColumn, ObjectIdColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
import { ObjectId } from "mongoose";
@Entity(`${config.name_app}_auth_refresh`)
export class AuthRefresh extends Timestamps {
  @ObjectIdColumn()
  auth_refresh_id!: ObjectId;

  @Column({ length: 250 })
  refresh_token!: string;
  
  @Column({ type: "timestamp", select: false })
  expiration_date?: string;

  @OneToOne(_type => User, user => user.user_id)
  @JoinColumn({name: 'user_id'})
  user_id!: User;

}
