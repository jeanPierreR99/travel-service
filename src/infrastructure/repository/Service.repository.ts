import { Repository } from "typeorm";
import { ServiceInterface } from "..";
import { CreateServiceDto, Service } from "../../domain";

export class ServiceRepository implements ServiceInterface {
  constructor(private repository: Repository<Service>) {
    this.repository = repository;
  }

  async get(): Promise<Service[]> {
    return await this.repository.find({
      relations: ["category", "provider", "quotations"], // Especifica las relaciones que deseas incluir
    });
  }

  async save(data: CreateServiceDto): Promise<Service> {
    return await this.repository.save(data);
  }

  async findByName(name: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { name: name } });
    return found > 0;
  }
}
