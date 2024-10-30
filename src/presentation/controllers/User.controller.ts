import { Request, Response } from "express";
import { UserCases } from "../../application";
import { CreateUserDto } from "../../domain";
import { validationHandler } from "../../utils";
import { ConflictException } from "../../domain/exceptions/Entity";

export class UserController {
  constructor(private cases: UserCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateUserDto = await validationHandler(
        req,
        res,
        CreateUserDto
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
