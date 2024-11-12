import { Router } from "express";
import { AppDataSource, QuotationRepository } from "../../infrastructure";
import { Quotation } from "../../domain";
import { QuotationCases } from "../../application";
import { QuotationController } from "..";

export class QuotationRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new QuotationRepository(
      AppDataSource.getRepository(Quotation)
    );
    const cases = new QuotationCases(repository);
    const controller = new QuotationController(cases);

    /**
     * @swagger
     * components:
     *   schemas:
     *     Quotation:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         status:
     *           type: string
     *           example: creado
     *         user:
     *           type: integer
     *           example: 12345678
     *         services:
     *           items:
     *             type: integer
     *             example: 1
     *
     *     CreateQuotation:
     *       type: object
     *       properties:
     *         status:
     *           type: string
     *           example: creado
     *         user:
     *           type: integer
     *           example: 1
     *
     *     UpdateQuotation:
     *       type: object
     *       properties:
     *         id:
     *           type: number
     *           example: 1
     *         status:
     *           type: string
     *           example: reserva
     *         services:
     *           items:
     *             type: integer
     *             example: 1
     */

    /**
     * @swagger
     * /api/quotation:
     *   get:
     *     tags:
     *       - Cotizaciones
     *     summary: Obtener cotizaciones
     *     description: Obtiene una lista de todas las cotizaciones disponibles.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Éxito al obtener las cotizaciones
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Quotation'
     */
    router.get("/", (req, res) => controller.get(req, res));

    /**
     * @swagger
     * /api/quotation:
     *   post:
     *     tags:
     *       - Cotizaciones
     *     summary: Crear una nueva cotización
     *     description: Crea una nueva cotización en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateQuotation'
     *
     *     responses:
     *       201:
     *         description: Cotización creada exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Quotation'
     *
     *       400:
     *         description: Error de validación.
     */
    router.post("/", (req, res) => controller.save(req, res));

    /**
     * @swagger
     * /api/quotation:
     *   put:
     *     tags:
     *       - Cotizaciones
     *     summary: Actualziar una nueva cotización
     *     description: Actualziar una nueva cotización en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UpdateQuotation'
     *
     *     responses:
     *       201:
     *         description: Cotización creada exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Quotation'
     *
     *       400:
     *         description: Error de validación.
     */
    router.put("/", (req, res) => controller.update(req, res));
    /**
     * @swagger
     * /api/quotation/pdf/{id}:
     *   get:
     *     tags:
     *       - Cotizaciones
     *     summary: Generar PDF de cotización
     *     description: Genera un archivo PDF para la cotización especificada por ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID de la cotización a generar en PDF.
     *         schema:
     *           type: integer
     *
     *     responses:
     *       200:
     *         description: PDF generado exitosamente.
     *
     *       404:
     *         description: Cotización no encontrada.
     */
    router.get("/pdf/:id", (req, res) => controller.generatePdf(req, res));

    /**
     * @swagger
     * /api/quotation/{id}:
     *   delete:
     *     tags:
     *       - Cotizaciones
     *     summary: Eliminar Cotización
     *     description: Elimina una Cotización con sus relaciones.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID de la cotización a eliminar.
     *         schema:
     *           type: integer
     *
     *     responses:
     *       200:
     *         description: Cotización eliminada.
     *
     *       404:
     *         description: Cotización no encontrada.
     */

    router.delete("/:id", (req, res) => controller.delete(req, res));

    return router;
  }
}
