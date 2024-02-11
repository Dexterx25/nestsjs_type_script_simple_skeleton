import {
    ApiProperty,
  } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
  
 
export enum method_exc {
    'HEAVY' = 'heavy',
    'FASTER' = 'faster'
   }

  export class GenericPostFromModuleDTO{
    @IsNotEmpty()
    @Length(1, 70)
    @ApiProperty({
      type: String,
      example: '123123123',
      nullable: false,
      required: true,
      description: 'Bank Code Payment'
    })
    bank!: string;


    @IsNotEmpty()
    @Length(1, 70)
    @ApiProperty({
      type: Number,
      example: '10',
      nullable: false,
      required: true,
      description: 'tax customer that wanna make transaction'
    })
    tax?: string;

    @IsNotEmpty()
    @Length(1, 70)
    @ApiProperty({
      type: String,
      example: 1,
      nullable: false,
      required: true,
      description: 'extra1 customer that wanna make transaction'
    })
    extra1!: number
  }


  export class GenericFromModuleDTO {
    @IsNotEmpty()
    @Length(1, 70)
    generic_query!: string;

  }