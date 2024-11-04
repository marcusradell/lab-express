import { Db } from "./db";
import { Pancake } from "./types";

export function createService(db: Db) {
  return {
    async viewAll() {
      return db.viewAll();
    },
    async cook(pancake: Pancake) {
      db.cook(pancake);
    },
  };
}

export type Service = ReturnType<typeof createService>;
