import { Router } from "express";
import { createPancakesFeature } from "../features";
import { createDb } from ".";

export function createApiRouter() {
  const db = createDb();

  const pancakesFeature = createPancakesFeature(db);

  const v1Router = Router();
  v1Router.use("/pancakes", pancakesFeature.getRouter());

  const apiRouter = Router();
  apiRouter.use("/v1", v1Router);

  return apiRouter;
}
