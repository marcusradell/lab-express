import { createDb } from "./db";
import { createRouter } from "./router";
import { createService } from "./service";

export function createPancakesFeature() {
  const db = createDb();
  const service = createService(db);
  const router = createRouter(service);

  return {
    service,
    router,
  };
}
