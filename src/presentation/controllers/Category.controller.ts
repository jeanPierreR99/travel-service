import { Request, Response } from "express";
import { CategoryCases } from "../../application";
import { CreateCategoryDto } from "../../domain";
import { validationHandler } from "../../utils";
import { ConflictException } from "../../domain/exceptions/Entity";

export class CategoryController {
  constructor(private cases: CategoryCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateCategoryDto = await validationHandler(
        req,
        res,
        CreateCategoryDto
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
