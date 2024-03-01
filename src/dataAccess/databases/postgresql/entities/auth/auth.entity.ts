import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_auth`)
export class Auth extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  auth_id!: string;

  @Column({ length: 250 })
  access_token!: string;
  
  @Column({ type: "timestamp", select: false })
  expiration_date?: string;

  @JoinColumn()
  @OneToOne(_type => User, user => user.user_id)
  user_id!: User;

}
