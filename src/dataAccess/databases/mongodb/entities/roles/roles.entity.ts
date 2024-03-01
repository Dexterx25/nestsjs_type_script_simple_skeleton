import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, OneToMany, Column, ObjectIdColumn, ObjectId } from "typeorm";
import { config } from "src/configurations/config/envs";
import { RolesUsers } from "../rolesUsers";

@Entity(`${config.name_app}_roles`)
export class Roles extends Timestamps {
  @ObjectIdColumn()
  role_id!: ObjectId;

  @Column({ length: 250 })
  name!: string;

  @OneToMany(_type => RolesUsers, rolesUsers => rolesUsers.role_id)
  roleUsers!: RolesUsers[]
  
}
