import { Router } from "express";
import { createPancakesFeature } from "./features";
import { createMenusFeature } from "./features/menus";

export function createApiRouter() {
  const menusFeature = createMenusFeature();

  const pancakesFeature = createPancakesFeature(
    menusFeature.service.getLayersByMenuItemName
  );

  const v1Router = Router();
  v1Router.use("/pancakes", pancakesFeature.router);

  const apiRouter = Router();
  apiRouter.use("/api/v1", v1Router);

  return apiRouter;
}
