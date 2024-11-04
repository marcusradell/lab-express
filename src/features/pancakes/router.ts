import express from "express";
import { v4 } from "uuid";
import { Service } from "./service";

export function createRouter(service: Service) {
  const router = express.Router();

  router.get("/", async (req, res) => {
    res.json(await service.viewAll());
  });

  router.post("/", async (req, res) => {
    const { layers } = req.body;
    const id = v4();
    const pancake = { id, layers };

    await service.cook(pancake);

    res.status(201).json({ id });
  });

  return router;
}
