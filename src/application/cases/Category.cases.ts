import { Category, CreateCategoryDto } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { CategoryInterface } from "../../infrastructure";

export class CategoryCases {
  constructor(private impInterface: CategoryInterface) {}

  async get(): Promise<Category[]> {
    console.log(CreateCategoryDto)
    return await this.impInterface.get();
  }

  async save(data: CreateCategoryDto): Promise<Category> {
    const found = await this.impInterface.findByName(data.name);
    if (found) {
      if (found) throw new ConflictException("Category", data.name);
    }
    return await this.impInterface.save(data);
  }
}
