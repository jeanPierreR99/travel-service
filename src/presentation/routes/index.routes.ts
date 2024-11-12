import { Router } from "express";
import { CategoryRoutes } from "./Category.routes";
import { ProviderRoutes } from "./Provider.routes";
import { ServiceRoutes } from "./Service.routes";
import { QuotationRoutes } from "./Quotation.routes";
import { UserRoutes } from "./User.routes";
export class IndexRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/category", CategoryRoutes.routes);
    router.use("/provider", ProviderRoutes.routes);
    router.use("/service", ServiceRoutes.routes);
    router.use("/quotation", QuotationRoutes.routes);
    router.use("/user", UserRoutes.routes);

    router.all("*", (req, res) => {
      res.status(404).json({ message: "path not found" });
    });
    return router;
  }
}
