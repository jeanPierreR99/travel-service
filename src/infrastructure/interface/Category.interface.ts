import { Category, CreateCategoryDto } from "../../domain";

export interface CategoryInterface {
  get(): Promise<Category[]>;
  save(data: CreateCategoryDto): Promise<Category>;
  findByName(name: string): Promise<Boolean>;
}
