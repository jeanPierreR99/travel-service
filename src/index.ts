import { AppDataSource } from "./infrastructure/db/mysql.db";
import { IndexRoutes, IndexServer } from "./presentation";
import { config } from "./utils/config";

(() => {
  startServer();
})();

async function startServer() {
  try {
    console.log("Running in", config.NODE_ENV, "mode");
    console.log("Database Host:", config.MYSQLDB_HOST);

    await AppDataSource.initialize();

    const port = config.NODE_LOCAL_PORT;
    const routes = IndexRoutes.routes;

    new IndexServer({ port, routes }).start();
  } catch (e) {
    console.log(e);
  }
}
