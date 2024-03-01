import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, OneToMany, Column } from "typeorm";
import { config } from "src/configurations/config/envs";
import { RolesUsers } from "../rolesUsers";

@Entity(`${config.name_app}_roles`)
export class Roles extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  role_id!: string;

  @Column({ length: 250 })
  name!: string;

  @OneToMany(_type => RolesUsers, rolesUsers => rolesUsers.role_id)
  roleUsers!: RolesUsers[]
  
}
