import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, ManyToOne, ObjectIdColumn, ObjectId } from "typeorm";
import { config } from "src/configurations/config/envs";
import { User } from "../users";
@Entity(`${config.name_app}_user_details`)
export class UserDetails extends Timestamps {
  @ObjectIdColumn()
  user_detail_id!: ObjectId;

  @Column({ length: 100 })
  country!: string;
  
  @Column({ length: 100})
  city!: string;

  @Column({ type: 'int', length: 30 })
  cell_phone!: number;

  @Column({ length: 100, default: ''})
  direction!: string;

  @Column({ length: 100, default: '' })
  summary?: string;
  
  @Column({ type: 'timestamp'})
  date_birthday?: string;
  
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User;

}
