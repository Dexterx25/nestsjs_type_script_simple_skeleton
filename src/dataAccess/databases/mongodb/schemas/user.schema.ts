import { Prop, Schema } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

export interface IUser {
  user_id?: Types.ObjectId,
  names: string,
  surnames: string,
  nikname: string,
}

@Schema({  timestamps: true, versionKey: false})
export class User implements IUser  {
    @Prop({type: String, required: true, unique: true})
    user_id!: Types.ObjectId;

    @Prop({ type: Number, default: '' })
    names!: string;

    @Prop({ type: Number, default: '' })
    surnames!: string;

    @Prop({ type: Number, default: '' })
    nikname!: string;

  }


export type UserDocument = User & Document;

export type UserModel = Model<UserDocument>;
  