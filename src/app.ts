import { Server } from "./application/server";
import { envs } from './config/envs';
import { AppRoutes } from "./application/routes";
import { MongoDatabase } from './data/mongodb/mongo-database';

// autoinvocación
(() => {
  main();
})();

async function main() {
  // Conectar base de datos mongo
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL
  });

  // Iniciar servidor
  new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
}
