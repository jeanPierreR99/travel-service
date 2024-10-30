"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const infrastructure_1 = require("../../infrastructure");
const domain_1 = require("../../domain");
const application_1 = require("../../application");
const __1 = require("..");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const repository = new infrastructure_1.UserRepository(infrastructure_1.AppDataSource.getRepository(domain_1.User));
        const cases = new application_1.UserCases(repository);
        const controller = new __1.UserController(cases);
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
exports.UserRoutes = UserRoutes;
