export type Pancake = {
  id: string;
  layers: string[];
};

export type GetLayersByMenuItemName = (
  menuItemName: string
) => Promise<string[]>;
