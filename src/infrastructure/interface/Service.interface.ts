import { CreateServiceDto, Service } from "../../domain";

export interface ServiceInterface {
  get(): Promise<Service[]>;
  save(data: CreateServiceDto): Promise<Service>;
  findByName(name: string): Promise<Boolean>;
}
