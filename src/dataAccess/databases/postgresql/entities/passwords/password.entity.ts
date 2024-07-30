import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { config } from "src/configurations/config/envs";
import { User } from "../users";
@Entity(`${config.name_app}_passwords`)
export class Passwords extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  password_id!: string;

  @Column({ length: 250 })
  password!: string;
  
  @Column({ length: 250 })
  salt!: string;

  @Column({ type: 'boolean' })
  is_vigent!: boolean;

  @ManyToOne(_type => User, user => user.passwords, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user_id!: string;

}