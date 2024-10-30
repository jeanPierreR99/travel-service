import { Repository } from "typeorm";
import { UserInterface } from "..";
import { CreateUserDto, User } from "../../domain";

export class UserRepository implements UserInterface {
  constructor(private repository: Repository<User>) {
    this.repository = repository;
  }

  async get(): Promise<User[]> {
    return await this.repository.find({
      relations: ["quotations", "quotations.services"],
    });
  }

  async save(data: CreateUserDto): Promise<User> {
    return await this.repository.save(data);
  }

  async findByName(name: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { name: name } });
    return found > 0;
  }
}
