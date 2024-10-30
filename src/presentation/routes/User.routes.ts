import { Router } from "express";
import { AppDataSource, UserRepository } from "../../infrastructure";
import { User } from "../../domain";
import { UserCases } from "../../application";
import { UserController } from "..";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new UserRepository(AppDataSource.getRepository(User));
    const cases = new UserCases(repository);
    const controller = new UserController(cases);

    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         dni:
     *           type: number
     *           example: 12345678
     *         name:
     *           type: string
     *           example: "Juan Pérez"
     *         email:
     *           type: string
     *           example: "juan.perez@example.com"
     *         phone_number:
     *           type: number
     *           example: 987654321
     *
     *     CreateUser:
     *       type: object
     *       properties:
     *         dni:
     *           type: number
     *           example: 12345678
     *         name:
     *           type: string
     *           example: "Juan Pérez"
     *         email:
     *           type: string
     *           example: "juan.perez@example.com"
     *         phone_number:
     *           type: number
     *           example: 987654321
     */

    /**
     * @swagger
     * /api/user:
     *   get:
     *     tags:
     *       - Usuarios
     *     summary: Obtener usuarios
     *     description: Obtiene una lista de todos los usuarios disponibles.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Éxito al obtener los usuarios
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */
    router.get("/", (req, res) => controller.get(req, res));

    /**
     * @swagger
     * /api/user:
     *   post:
     *     tags:
     *       - Usuarios
     *     summary: Crear un nuevo usuario
     *     description: Crea un nuevo usuario en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateUser'
     *
     *     responses:
     *       201:
     *         description: Usuario creado exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *
     *       400:
     *         description: Error de validación.
     */
    router.post("/", (req, res) => controller.save(req, res));

    return router;
  }
}
