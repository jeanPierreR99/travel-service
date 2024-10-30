import {
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsEnum,
  IsOptional,
} from "class-validator";
import { User } from "../entity/User.entity";
import { Status } from "../entity/Quotation.entity";

export class CreateQuotationDto {
  @IsNotEmpty()
  @IsEnum(Status, {
    message:
      "The status must be one of the following: created, reserved, deleted",
  })
  status!: Status;

  @IsNotEmpty()
  @IsNumber()
  user!: number;
}

export class CreateQuotationUSDto {
  status!: Status;
  user!: User;
}

export class UpdateQuotationDto {
  @IsOptional()
  @IsNumber()
  id!: number;

  @IsNotEmpty()
  @IsEnum(Status, {
    message:
      "The status must be one of the following: created, reserved, deleted",
  })
  status!: Status;

  @IsNotEmpty()
  @IsArray()
  services!: number[];
}
