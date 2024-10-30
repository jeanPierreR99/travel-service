"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const pdfkit_table_1 = __importDefault(require("pdfkit-table"));
class PdfService {
    generatePDF(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const doc = new pdfkit_table_1.default({ margin: 30, size: "A4" });
            doc.pipe(res);
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", "inline; filename=quotation.pdf");
            const imagePath = `${__dirname}/logo.png`;
            doc.image(imagePath, 450, 10, { fit: [100, 50] });
            doc
                .font("Helvetica-Bold")
                .fontSize(16)
                .text("Travel Service", { align: "center" });
            doc.moveDown();
            const date = new Date().toLocaleDateString();
            doc
                .font("Helvetica")
                .fontSize(12)
                .text(`Fecha: ${date}`, { align: "center" });
            doc.moveDown(2);
            doc.font("Helvetica-Bold").fontSize(11).text(`Nombre: ${data.user.name}`);
            doc.text(`DNI: ${data.user.dni}`);
            doc.text(`Email: ${data.user.email}`);
            doc.text(`Estado: ${data.status}`);
            doc.moveDown();
            const tableData = {
                title: { label: "Servicios Cotizados", fontSize: 11 },
                headers: [
                    { label: "Tipo de Servicio", property: "type" },
                    { label: "Descripción", property: "description" },
                    { label: "Precio", property: "price" },
                    { label: "Categoría", property: "category" },
                    { label: "Proveedor", property: "provider" },
                    { label: "Total", property: "total" },
                ],
                datas: (_a = data.services) === null || _a === void 0 ? void 0 : _a.map((item) => ({
                    type: item.category.name,
                    description: item.description,
                    price: `S/. ${item.price.toFixed(2)}`,
                    category: item.category.name,
                    provider: item.provider.name,
                    total: `bold:S/. ${item.price.toFixed(2)}`,
                })),
            };
            yield doc.table(tableData, {
                prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
                prepareRow: (row, indexColumn, indexRow, rectRow) => {
                    doc.font("Helvetica").fontSize(8);
                    return doc;
                },
            });
            const totalGeneral = (_b = data.services) === null || _b === void 0 ? void 0 : _b.reduce((sum, item) => sum + item.price, 0);
            doc.moveDown();
            doc
                .font("Helvetica-Bold")
                .text(`Total General: S/. ${totalGeneral.toFixed(2)}`, { align: "right" });
            doc.font("Helvetica-Bold").text("Gracias por su preferencia.", 0, 800, {
                align: "center",
            });
            doc.end();
        });
    }
}
exports.PdfService = PdfService;
