import "dotenv/config";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API DOCUMENTACION TRAVEL SERVICE",
      version: "1.0.0",
      description: "API Documentation Travel Service with Swagger",
    },
    servers: [
      {
        url: `http://localhost:${process.env.NODE_LOCAL_PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [
    "./src/presentation/routes/*.ts",
    "./src/presentation./controllers/*.ts",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
