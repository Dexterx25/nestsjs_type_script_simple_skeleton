import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
@Entity(`${config.name_app}_auth_refresh`)
export class 
AuthRefresh extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  auth_refresh_id!: string;

  @Column({ type: 'text' })
  refresh_token!: string;
  
  @Column({ type: "timestamp", select: false })
  expiration_date?: string;

  @JoinColumn({ name: 'user_id' })
  @OneToOne(_type => User, user => user.auths_refresh, { nullable: false })
  user_id!: string;

}
