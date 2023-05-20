import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(8)
  password: string;
}
