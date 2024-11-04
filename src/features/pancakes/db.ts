import { Pancake } from ".";

export type Db = {
  getAll: () => Promise<Pancake[]>;
  cookPancake: (pancake: Pancake) => Promise<void>;
};

export function createDb(): Db {
  const data: Pancake[] = [];

  return {
    getAll: async () => data,
    cookPancake: async (pancake: Pancake) => {
      data.push(pancake);
    },
  };
}
