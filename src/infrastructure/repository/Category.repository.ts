import { Repository } from "typeorm";
import { Category, CreateCategoryDto } from "../../domain";
import { CategoryInterface } from "..";

export class CategoryRepository implements CategoryInterface {
  constructor(private repository: Repository<Category>) {
    this.repository = repository;
  }

  async get(): Promise<Category[]> {
    return await this.repository.find({ relations: { services: true } });
  }

  async save(data: CreateCategoryDto): Promise<Category> {
    return await this.repository.save(data);
  }

  async findByName(name: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { name: name } });
    return found > 0;
  }
}
