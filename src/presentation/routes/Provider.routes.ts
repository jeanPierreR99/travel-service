import { Router } from "express";
import { Provider } from "../../domain";
import { AppDataSource, ProviderRepository } from "../../infrastructure";
import { ProviderCases } from "../../application";
import { ProviderController } from "..";

export class ProviderRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new ProviderRepository(
      AppDataSource.getRepository(Provider)
    );
    const cases = new ProviderCases(repository);
    const controller = new ProviderController(cases);

    /**
     * @swagger
     * components:
     *   schemas:
     *     Provider:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         name:
     *           type: string
     *           example: "Proveedor VIP"
     *
     *     CreateProvider:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           example: "Proveedor VIP"
     */

    /**
     * @swagger
     * /api/provider:
     *   get:
     *     tags:
     *       - Proveedores
     *     summary: Obtener proveedores
     *     description: Obtiene una lista de todos los proveedores disponibles.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Éxito al obtener los proveedores
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Provider'
     */
    router.get("/", (req, res) => controller.get(req, res));

    /**
     * @swagger
     * /api/provider:
     *   post:
     *     tags:
     *       - Proveedores
     *     summary: Crear un nuevo proveedor
     *     description: Crea un nuevo proveedor en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateProvider'
     *
     *     responses:
     *       201:
     *         description: Proveedor creado exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Provider'
     *
     *       400:
     *         description: Error de validación.
     */
    router.post("/", (req, res) => controller.save(req, res));

    return router;
  }
}
