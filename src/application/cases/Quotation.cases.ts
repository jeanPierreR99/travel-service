import {
  Quotation,
  CreateQuotationDto,
  CreateQuotationUSDto,
  Service,
  User,
  UpdateQuotationDto,
} from "../../domain";
import { NotFoundException } from "../../domain/exceptions/Entity";
import { QuotationInterface } from "../../infrastructure";
import { PdfService } from "../Services/pdf.service";

export class QuotationCases {
  constructor(private impInterface: QuotationInterface) {}
  private pdfService = new PdfService();
  async get(): Promise<Quotation[]> {
    return await this.impInterface.get();
  }

  async save(data: CreateQuotationDto): Promise<Quotation> {
    const foundUser = await this.impInterface.findUser(data.user);
    if (!foundUser) throw new NotFoundException("User", "");

    const dataSend = new CreateQuotationUSDto();
    dataSend.status = data.status;
    dataSend.user = foundUser as User;
    return await this.impInterface.save(dataSend);
  }

  async update(data: UpdateQuotationDto): Promise<Quotation> {
    const foundQuotation = await this.impInterface.getById(data.id);
    const foundServices = await this.impInterface.findServices(
      data.services ? data.services : []
    );

    if (!foundQuotation) throw new NotFoundException("quotation", "");
    if (!foundServices) throw new NotFoundException("Service", "");

    foundQuotation.status = data.status;
    foundQuotation.services = foundServices as Service[];

    return await this.impInterface.update(foundQuotation);
  }

  async delete(data: number): Promise<void> {
    const foundQuotation = await this.impInterface.getById(data);
    if (!foundQuotation) throw new NotFoundException("quotation", `${data}`);

    return await this.impInterface.delete(data);
  }

  async quotationPdf(data: number, res: any): Promise<any> {
    const quotation = await this.impInterface.getById(data);
    if (!quotation) throw new NotFoundException("Quotation", data.toString());

    const pdfBuffer = await this.pdfService.generatePDF(quotation, res);
    return pdfBuffer;
  }
}
