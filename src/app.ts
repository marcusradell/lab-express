import express from "express";
import { createPancakesFeature } from "./features";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const pancakesFeature = createPancakesFeature({ getAll: async () => [] });

  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}
