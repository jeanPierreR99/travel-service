import { IsNotEmpty, IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  dni!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNumber()
  @IsNotEmpty()
  phone_number!: number;
}
