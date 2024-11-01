import express from "express";
import { createPancakesFeature } from "./features";

function createDb() {
  return { getAll: async () => [] };
}

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const db = createDb();

  const pancakesFeature = createPancakesFeature(db);

  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}
