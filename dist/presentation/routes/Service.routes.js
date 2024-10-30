"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const domain_1 = require("../../domain");
const infrastructure_1 = require("../../infrastructure");
const application_1 = require("../../application");
const __1 = require("..");
class ServiceRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const repository = new infrastructure_1.ServiceRepository(infrastructure_1.AppDataSource.getRepository(domain_1.Service));
        const cases = new application_1.ServiceCases(repository);
        const controller = new __1.ServiceController(cases);
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
exports.ServiceRoutes = ServiceRoutes;
