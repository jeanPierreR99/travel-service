"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const express_1 = require("express");
const Category_routes_1 = require("./Category.routes");
const Provider_routes_1 = require("./Provider.routes");
const Service_routes_1 = require("./Service.routes");
const Quotation_routes_1 = require("./Quotation.routes");
const User_routes_1 = require("./User.routes");
class IndexRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use("/category", Category_routes_1.CategoryRoutes.routes);
        router.use("/provider", Provider_routes_1.ProviderRoutes.routes);
        router.use("/service", Service_routes_1.ServiceRoutes.routes);
        router.use("/quotation", Quotation_routes_1.QuotationRoutes.routes);
        router.use("/user", User_routes_1.UserRoutes.routes);
        return router;
    }
}
exports.IndexRoutes = IndexRoutes;
