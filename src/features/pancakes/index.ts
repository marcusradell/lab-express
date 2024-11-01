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

      return router;
    },
  };
}
