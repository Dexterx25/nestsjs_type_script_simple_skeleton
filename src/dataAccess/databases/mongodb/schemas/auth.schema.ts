import { Prop, Schema } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

export interface IAuth {
  auth_id?:number;
  access_token?: number,
  expiration_date?: Date,
  user_id?: Types.ObjectId
}

@Schema({  timestamps: true, versionKey: false })
export class Auth implements IAuth  {
    @Prop({type: Number, required: true, unique: true})
    auth_id!: number;

    @Prop({ type: Number, default: 0 })
    access_token!: number;

    @Prop({ default: Date.now, set: () => new Date() }) // Set default value to the current date
    expiration_date!: Date;
  
    @Prop({ type: Types.ObjectId, ref: 'User' }) // Reference to Author schema
    user_id!: Types.ObjectId;

  }


export type AuthDocument = Auth & Document;

export type AuthModel = Model<AuthDocument>;
  