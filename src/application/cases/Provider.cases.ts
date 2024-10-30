import { CreateProviderDto, Provider } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { ProviderInterface } from "../../infrastructure";

export class ProviderCases {
  constructor(private impInterface: ProviderInterface) {}

  async get(): Promise<Provider[]> {
    console.log(CreateProviderDto)
    return await this.impInterface.get();
  }

  async save(data: CreateProviderDto): Promise<Provider> {
    console.log(data)
    const found = await this.impInterface.findByName(data.name);
    if (found) {
      if (found) throw new ConflictException("Provider", data.name);
    }
    return await this.impInterface.save(data);
  }
}
