import { createDb } from "./db";
import { createRouter } from "./router";
import { createService } from "./service";
import { GetLayersByMenuItemName } from "./types";

export function createPancakesFeature(
  getLayersByMenuItemName: GetLayersByMenuItemName
) {
  const db = createDb();
  const service = createService(db, getLayersByMenuItemName);
  const router = createRouter(service);

  return {
    service,
    router,
  };
}
