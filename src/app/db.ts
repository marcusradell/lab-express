import { Db, Pancake } from "../features";

export function createDb(): Db {
  const data: Pancake[] = [];

  return {
    getAll: async () => data,
    cookPancake: async (pancake: Pancake) => {
      data.push(pancake);
    },
  };
}
