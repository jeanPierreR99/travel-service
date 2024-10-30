import { CreateServiceDto, Service } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { ServiceInterface } from "../../infrastructure";

export class ServiceCases {
  constructor(private impInterface: ServiceInterface) {}

  async get(): Promise<Service[]> {
    console.log(CreateServiceDto)
    return await this.impInterface.get();
  }

  async save(data: CreateServiceDto): Promise<Service> {
    const found = await this.impInterface.findByName(data.name);
    if (found) {
      if (found) throw new ConflictException("Service", data.name);
    }
    return await this.impInterface.save(data);
  }
}
