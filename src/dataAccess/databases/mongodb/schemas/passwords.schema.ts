import { Prop, Schema } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

export interface IPasswords {
  password_id?:number;
  password?: string,
  salt?: string,
  is_vigent?: boolean,
  user_id?: Types.ObjectId
}

@Schema({  timestamps: true, versionKey: false })
export class Passwords implements IPasswords  {
    @Prop({type: Number, required: true, unique: true})
    password_id!: number;

    @Prop({ type: Number, default: 0 })
    password!: string;

    @Prop({ type: Number, default: 0 })
    salt!: string;

    
    @Prop({ type: Boolean, default: 0 })
    is_vigent!: boolean;

    @Prop({ type: Types.ObjectId, ref: 'User' }) // Reference to Author schema
    user_id!: Types.ObjectId;

  }


export type PasswordsDocuments = Passwords & Document;

export type PasswordModel = Model<PasswordsDocuments>;
  