import express from "express";
import { v4 } from "uuid";

type PancakeLayer = {
  content: string;
};

type Pancake = {
  id: string;
  layers: PancakeLayer[];
};

type Db = {
  getAll: () => Promise<Pancake[]>;
};

export function createPancakesFeature(db: Db) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        const { layers } = req.body;

        const id = v4();

        res.status(201).json({ id });
      });

      return router;
    },
  };
}
