import { Router } from "express";
import { createPancakesFeature } from "./features";

export function createApiRouter() {
  const pancakesFeature = createPancakesFeature();

  const v1Router = Router();
  v1Router.use("/pancakes", pancakesFeature.getRouter());

  const apiRouter = Router();
  apiRouter.use("/v1", v1Router);

  return apiRouter;
}
