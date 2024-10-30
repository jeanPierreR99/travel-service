"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRoutes = void 0;
const express_1 = require("express");
const domain_1 = require("../../domain");
const infrastructure_1 = require("../../infrastructure");
const application_1 = require("../../application");
const __1 = require("..");
class ProviderRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const repository = new infrastructure_1.ProviderRepository(infrastructure_1.AppDataSource.getRepository(domain_1.Provider));
        const cases = new application_1.ProviderCases(repository);
        const controller = new __1.ProviderController(cases);
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
exports.ProviderRoutes = ProviderRoutes;
