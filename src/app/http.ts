import express, { Router } from "express";

export function createHttpApp(apiRouter: Router) {
  const app = express();

  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  app.use("/", apiRouter);

  return app;
}
