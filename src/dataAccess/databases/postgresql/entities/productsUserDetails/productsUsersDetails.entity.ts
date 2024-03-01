import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
import { Products } from "../products/products.entity";

@Entity(`${config.name_app}_products_users`)
export class ProductsUsers extends Timestamps {
  @PrimaryColumn('uuid')
  @ManyToOne(_type => Products, products => products.product_id)
  product_id!: Products
  
  @PrimaryColumn('uuid')
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User
}
