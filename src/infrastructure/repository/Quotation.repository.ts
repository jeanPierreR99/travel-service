import { In, Repository } from "typeorm";
import { AppDataSource, QuotationInterface } from "..";
import {
  CreateQuotationUSDto,
  Quotation,
  Service,
  User,
} from "../../domain";

export class QuotationRepository implements QuotationInterface {
  constructor(private repository: Repository<Quotation>) {
    this.repository = repository;
  }
  private serviceRepository = AppDataSource.getRepository(Service);
  private userRepository = AppDataSource.getRepository(User);

  async get(): Promise<Quotation[]> {
    return await this.repository.find({
      relations: ["user", "services", "services.provider", "services.category"],
    });
  }

  async getById(data: number): Promise<Quotation | null> {
    return await this.repository.findOne({
      where: { id: data },
      relations: ["user", "services", "services.provider", "services.category"],
    });
  }

  async save(data: CreateQuotationUSDto): Promise<Quotation> {
    return await this.repository.save(data);
  }

  async update(data: Quotation): Promise<Quotation> {
    return await this.repository.save(data);
  }

  async findServices(data: number[]): Promise<Service[] | null> {
    const found = await this.serviceRepository.findBy({
      id: In(data),
    });

    return data.length === found.length ? found : null;
  }

  async findUser(data: number): Promise<User | null> {
    const found = await this.userRepository.findOneBy({
      id: data,
    });

    return found || null;
  }
}
