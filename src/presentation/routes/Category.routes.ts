import { Router } from "express";
import { AppDataSource, CategoryRepository } from "../../infrastructure";
import { Category } from "../../domain";
import { CategoryCases } from "../../application";
import { CategoryController } from "..";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new CategoryRepository(
      AppDataSource.getRepository(Category)
    );
    const cases = new CategoryCases(repository);
    const controller = new CategoryController(cases);

    /**
     * @swagger
     * components:
     *   schemas:
     *     Category:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         name:
     *           type: string
     *           example: "VIP"
     *
     *     CreateCategory:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           example: "VIP"
     */

    /**
     * @swagger
     * /api/category:
     *   get:
     *     tags:
     *       - Categorias
     *     summary: Obtener categorías
     *     description: Obtiene una lista de todas las categorías disponibles.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Éxito al obtener las categorías
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     */
    router.get("/", (req, res) => controller.get(req, res));

    /**
     * @swagger
     * /api/category:
     *   post:
     *     tags:
     *       - Categorias
     *     summary: Crear una nueva categoría
     *     description: Crea una nueva categoría en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateCategory'
     *
     *     responses:
     *       201:
     *         description: Categoría creada exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Category'
     *
     *       400:
     *         description: Error de validación.
     */
    router.post("/", (req, res) => controller.save(req, res));

    return router;
  }
}
