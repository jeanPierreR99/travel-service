import PDFDocument from "pdfkit-table";
import { Quotation } from "../../domain";

export class PdfService {
  async generatePDF(data: Quotation, res: any): Promise<void> {
    const doc = new PDFDocument({ margin: 30, size: "A4" });
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

    const tableData: any = {
      title: { label: "Servicios Cotizados", fontSize: 11 },
      headers: [
        { label: "Tipo de Servicio", property: "type" },
        { label: "Descripción", property: "description" },
        { label: "Precio", property: "price" },
        { label: "Categoría", property: "category" },
        { label: "Proveedor", property: "provider" },
        { label: "Total", property: "total" },
      ],
      datas: data.services?.map((item: any) => ({
        type: item.category.name,
        description: item.description,
        price: `S/. ${item.price.toFixed(2)}`,
        category: item.category.name,
        provider: item.provider.name,
        total: `bold:S/. ${item.price.toFixed(2)}`,
      })),
    };

    await doc.table(tableData, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
      prepareRow: (row, indexColumn, indexRow, rectRow) => {
        doc.font("Helvetica").fontSize(8);
        return doc;
      },
    });

    const totalGeneral = data.services?.reduce(
      (sum: any, item: any) => sum + item.price,
      0
    );

    doc.moveDown();
    doc
      .font("Helvetica-Bold")
      .text(`Total General: S/. ${totalGeneral.toFixed(2)}`, { align: "right" });

    doc.font("Helvetica-Bold").text("Gracias por su preferencia.", 0, 800, {
      align: "center",
    });

    doc.end();
  }
}
