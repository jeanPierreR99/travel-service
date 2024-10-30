import { AppDataSource } from "./infrastructure/db/mysql.db";
import { IndexRoutes, IndexServer } from "./presentation";

(() => {
  startServer();
})();

async function startServer() {
  try {
    await AppDataSource.initialize();

    const port = parseFloat(process.env.NODE_LOCAL_PORT as string);
    const routes = IndexRoutes.routes;

    new IndexServer({ port, routes }).start();
  } catch (e) {
    console.log(e);
  }
}
