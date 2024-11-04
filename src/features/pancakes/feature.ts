import express from "express";
import { v4 } from "uuid";
import { createDb } from "./db";

export function createPancakesFeature() {
  const db = createDb();

  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        const { layers } = req.body;
        const id = v4();
        const pancake = { id, layers };

        await db.cookPancake(pancake);

        res.status(201).json({ id });
      });

      return router;
    },
  };
}
