import { User, CreateUserDto } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { UserInterface } from "../../infrastructure";

export class UserCases {
  constructor(private impInterface: UserInterface) {}

  async get(): Promise<User[]> {
    console.log(CreateUserDto)
    return await this.impInterface.get();
  }

  async save(data: CreateUserDto): Promise<User> {
    const found = await this.impInterface.findByName(data.name);
    if (found) {
      if (found) throw new ConflictException("User", data.name);
    }
    return await this.impInterface.save(data);
  }
}
