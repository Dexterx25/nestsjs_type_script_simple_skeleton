import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, ManyToOne, ObjectIdColumn } from "typeorm";
import { User } from "../users/users.entity";
import { config } from "src/configurations/config/envs";
import { Products } from "../products/products.entity";
import { ObjectId } from "mongoose";

@Entity(`${config.name_app}_products_users`)
export class ProductsUsers extends Timestamps {
  @ObjectIdColumn()
  _id!: ObjectId;

  @ManyToOne(_type => Products, products => products.product_id)
  product_id!: Products
  
  
  @ManyToOne(_type => User, user => user.user_id)
  user_id!: User
}
