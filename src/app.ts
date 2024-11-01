import express from "express";
import { createPancakesFeature } from "./features";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const db = { getAll: async () => [] };

  const pancakesFeature = createPancakesFeature(db);

  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}
