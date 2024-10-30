"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const infrastructure_1 = require("../../infrastructure");
const domain_1 = require("../../domain");
const application_1 = require("../../application");
const __1 = require("..");
class CategoryRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const repository = new infrastructure_1.CategoryRepository(infrastructure_1.AppDataSource.getRepository(domain_1.Category));
        const cases = new application_1.CategoryCases(repository);
        const controller = new __1.CategoryController(cases);
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
exports.CategoryRoutes = CategoryRoutes;
