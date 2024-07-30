import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, OneToMany, Column } from "typeorm";
import { config } from "src/configurations/config/envs";
import { RolesPermissions } from "../roles_permissions";

@Entity(`${config.name_app}_permissions`)
export class Permissions extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  permission_id!: string;

  @Column({ length: 250 })
  name!: string;

  @OneToMany(_type => RolesPermissions, rolesPermissions => rolesPermissions.permission_id)
  rolesPermissions!: RolesPermissions[]
  
}
