import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { config } from "src/configurations/config/envs";
import { Roles } from "../roles/roles.entity";
import { Permissions } from "../permissions";

@Entity(`${config.name_app}_roles_permissions`)
export class RolesPermissions extends Timestamps {
  @PrimaryColumn('uuid')
  @ManyToOne(_type => Permissions, permissions => permissions.rolesPermissions, { nullable: false })
  @JoinColumn({ name: 'permission_id' })
  permission_id!: string
  
  @PrimaryColumn('uuid')
  @ManyToOne(_type => Roles, role => role.rolesPermissions, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role_id!: string
}
