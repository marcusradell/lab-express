import { v4 } from "uuid";
import { Db } from "./db";
import { cook } from "./logic";

export function createService(db: Db) {
  return {
    async viewAll() {
      return db.viewAll();
    },
    async cook(layers: string[]) {
      const id = v4();

      const pancake = cook(id, layers);

      await db.cook(pancake);

      return id;
    },
  };
}

export type Service = ReturnType<typeof createService>;
