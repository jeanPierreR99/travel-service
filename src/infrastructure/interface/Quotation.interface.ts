import { CreateQuotationUSDto, Quotation, Service, User } from "../../domain";

export interface QuotationInterface {
  get(): Promise<Quotation[]>;
  save(data: CreateQuotationUSDto): Promise<Quotation>;
  update(data: Quotation): Promise<Quotation>;
  getById(data: number): Promise<Quotation | null>;
  findServices(data: number[]): Promise<Service[] | null>;
  findUser(data: number): Promise<User | null>;
  delete(data: number): Promise<void>;
}
