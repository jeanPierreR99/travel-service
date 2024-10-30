import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { Category } from "../entity/Category.entity";
import { Provider } from "../entity/Provider.entity";

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsNumber()
  @IsNotEmpty()
  category!: Category;

  @IsNumber()
  @IsNotEmpty()
  provider!: Provider;
}
