import express, { Router } from "express";

export function createApp(apiRouter: Router) {
  const app = express();

  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  app.use("/api", apiRouter);

  return app;
}
