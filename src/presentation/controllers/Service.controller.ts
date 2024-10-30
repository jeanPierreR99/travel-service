import { Request, Response } from "express";
import { ServiceCases } from "../../application/cases/Service.cases";
import { CreateServiceDto } from "../../domain";
import { ConflictException } from "../../domain/exceptions/Entity";
import { validationHandler } from "../../utils";

export class ServiceController {
  constructor(private cases: ServiceCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateServiceDto = await validationHandler(
        req,
        res,
        CreateServiceDto
      );
      if (!dataDto) return;
      const data = await this.cases.save(dataDto);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
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
