import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { config } from "src/configurations/config/envs";
import { User } from "../users";
@Entity(`${config.name_app}_user_details`)
export class UserDetails extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  user_detail_id!: string;

  @Column({ length: 100 })
  country!: string;
  
  @Column({ length: 100})
  city!: string;

  @Column({ type: 'int', width:  20})
  cell_phone!: number;

  @Column({ length: 100, default: ''})
  direction!: string;

  @Column({ length: 100, default: '' })
  summary?: string;
  
  @Column({ type: 'timestamp'})
  date_birthday?: string;
  
  @ManyToOne(_type => User, user => user.userDetails, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user_id!: string;

}
