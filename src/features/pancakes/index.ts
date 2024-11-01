import express from "express";

type Pancake = unknown;

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
        res.json({ id: -1 });
      });

      return router;
    },
  };
}
