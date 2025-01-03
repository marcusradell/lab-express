import express from "express";
import { Service } from "./service";

export function createRouter(service: Service) {
  const router = express.Router();

  router.get("/", async (req, res) => {
    res.json(await service.viewAll());
  });

  router.post("/", async (req, res) => {
    const { layers } = req.body;

    const id = await service.cook(layers);

    res.status(201).json({ id });
  });

  router.post("/menus/:menuItemName", async (req, res) => {
    const { menuItemName } = req.params;

    const id = await service.cookByMenuItem(menuItemName);

    res.status(201).json({ id });
  });

  return router;
}
