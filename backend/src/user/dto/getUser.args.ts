import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsEmail()
  email: string;
}
