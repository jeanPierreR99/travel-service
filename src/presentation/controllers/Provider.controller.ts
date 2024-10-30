import { Request, Response } from "express";
import { ProviderCases } from "../../application/cases/Provider.cases";
import { CreateProviderDto } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { validationHandler } from "../../utils";

export class ProviderController {
  constructor(private cases: ProviderCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateProviderDto = await validationHandler(
        req,
        res,
        CreateProviderDto
      );
      if (!dataDto) return;
      const data = await this.cases.save(dataDto);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof ConflictException) {
        res.status(409).json({ message: error.message });
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
}
