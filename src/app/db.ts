import { Db, Pancake } from "../features";

export function createDb(): Db {
  const data = [];

  return {
    getAll: async () => data,
    cookPancake: async (pancake: Pancake) => {},
  };
}
