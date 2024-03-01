import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
import { Roles } from "../roles/roles.entity";

@Entity(`${config.name_app}_roles_users`)
export class RolesUsers extends Timestamps {
  @ObjectIdColumn({nullable: false})
  _id!: ObjectId;

  @ManyToOne(_type => User, user => user.user_id)
  user!: User
  
  
  @ManyToOne(_type => Roles, role => role.role_id)
  role_id!: Roles
}
