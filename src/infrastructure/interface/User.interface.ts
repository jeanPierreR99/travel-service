import { CreateUserDto, User } from "../../domain";

export interface UserInterface {
  get(): Promise<User[]>;
  save(data: CreateUserDto): Promise<User>;
  findByName(name: string): Promise<Boolean>;
}
