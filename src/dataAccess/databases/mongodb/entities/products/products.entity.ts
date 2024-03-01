import { Timestamps } from "../timestamp/timestamp.entity";
import { Entity, Column, OneToMany, ObjectIdColumn, ObjectId } from "typeorm";
import { config } from "src/configurations/config/envs";
import { ProductsUsers } from "../productsUserDetails";
@Entity(`${config.name_app}_products`)
export class Products extends Timestamps {
  @ObjectIdColumn()
  product_id!: ObjectId;

  @Column({ length: 100 })
  name!: string;
    
  @OneToMany(_type => ProductsUsers, productsUsers => productsUsers.product_id)
  productUser!: ProductsUsers[]

}
