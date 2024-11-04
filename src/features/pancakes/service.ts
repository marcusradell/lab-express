import { v4 } from "uuid";
import { Db } from "./db";
import { cook } from "./logic";
import { GetLayersByMenuItemName } from "./types";

export function createService(
  db: Db,
  getLayersByMenuItemName: GetLayersByMenuItemName
) {
  async function viewAll() {
    return db.viewAll();
  }

  async function cookService(layers: string[]) {
    const id = v4();
    const nowTimestamp = Date.now();

    const pancake = cook(id, nowTimestamp, layers);

    if (pancake.status === "INVALID") {
      throw new Error(pancake.error.code);
    }

    await db.cook(pancake);

    return id;
  }

  async function cookByMenuItem(menuItemName: string) {
    const layers = await getLayersByMenuItemName(menuItemName);

    return cookService(layers);
  }

  return {
    viewAll,
    cook: cookService,
    cookByMenuItem,
  };
}

export type Service = ReturnType<typeof createService>;
