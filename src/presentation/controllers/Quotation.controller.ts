import { Request, Response } from "express";
import { QuotationCases } from "../../application";
import { CreateQuotationDto, UpdateQuotationDto } from "../../domain";
import { validationHandler } from "../../utils";
import {
  ConflictException,
  NotFoundException,
} from "../../domain/exceptions/Entity";

export class QuotationController {
  constructor(private cases: QuotationCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateQuotationDto = await validationHandler(
        req,
        res,
        CreateQuotationDto
      );
      if (!dataDto) return;
      const data = await this.cases.save(dataDto);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof ConflictException) {
        res.status(409).json({ message: error.message });
        return;
      }
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.cases.get();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: UpdateQuotationDto = await validationHandler(
        req,
        res,
        UpdateQuotationDto
      );
      if (!dataDto) return;
      const data = await this.cases.update(dataDto);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof ConflictException) {
        res.status(409).json({ message: error.message });
        return;
      }
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }

  async generatePdf(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await this.cases.quotationPdf(parseInt(id), res);
    } catch (error) {
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }
}
