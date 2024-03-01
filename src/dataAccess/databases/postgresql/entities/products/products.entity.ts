import { Timestamps } from "../timestamp/timestamp.entity";
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { config } from "src/configurations/config/envs";
import { ProductsUsers } from "../productsUserDetails";
@Entity(`${config.name_app}_products`)
export class Products extends Timestamps {
  @PrimaryGeneratedColumn("uuid")
  product_id!: string;

  @Column({ length: 100 })
  name!: string;
    
  @OneToMany(_type => ProductsUsers, productsUsers => productsUsers.product_id)
  productUser!: ProductsUsers[]

}
