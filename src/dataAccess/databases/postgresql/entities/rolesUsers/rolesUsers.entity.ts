import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
import { Roles } from "../roles/roles.entity";

@Entity(`${config.name_app}_roles_users`)
export class RolesUsers extends Timestamps {
  @PrimaryColumn('uuid')
  @ManyToOne(_type => User, user => user.role, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user_id!: string
  
  @PrimaryColumn('uuid')
  @ManyToOne(_type => Roles, role => role.roleUsers, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role_id!: string
}
