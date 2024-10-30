import { Router } from "express";
import { Service } from "../../domain";
import { AppDataSource, ServiceRepository } from "../../infrastructure";
import { ServiceCases } from "../../application";
import { ServiceController } from "..";

export class ServiceRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new ServiceRepository(
      AppDataSource.getRepository(Service)
    );
    const cases = new ServiceCases(repository);
    const controller = new ServiceController(cases);

    /**
     * @swagger
     * components:
     *   schemas:
     *     Service:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         name:
     *           type: string
     *           example: "Servicio VIP"
     *         description:
     *           type: string
     *           example: "Descripción del servicio VIP"
     *         price:
     *           type: number
     *           example: 150.00
     *         category:
     *           type: integer
     *           example: 1
     *         provider:
     *           type: integer
     *           example: 2
     *
     *     CreateService:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           example: "Servicio VIP"
     *         description:
     *           type: string
     *           example: "Descripción del servicio VIP"
     *         price:
     *           type: number
     *           example: 150.00
     *         category:
     *           type: integer
     *           example: 1
     *         provider:
     *           type: integer
     *           example: 2
     */

    /**
     * @swagger
     * /api/service:
     *   get:
     *     tags:
     *       - Servicios
     *     summary: Obtener servicios
     *     description: Obtiene una lista de todos los servicios disponibles.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Éxito al obtener los servicios
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Service'
     */
    router.get("/", (req, res) => controller.get(req, res));

    /**
     * @swagger
     * /api/service:
     *   post:
     *     tags:
     *       - Servicios
     *     summary: Crear un nuevo servicio
     *     description: Crea un nuevo servicio en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateService'
     *
     *     responses:
     *       201:
     *         description: Servicio creado exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Service'
     *
     *       400:
     *         description: Error de validación.
     */
    router.post("/", (req, res) => controller.save(req, res));

    return router;
  }
}
