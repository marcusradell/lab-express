type MenuItems = { [key: string]: string[] };

const menuItems: MenuItems = {
  strawberry_whip_crepe: ["crepe", "strawberries", "whipped_cream"],
  american_pancake: [
    "american_pancake",
    "american_pancake",
    "american_pancake",
    "syrup",
    "butter",
  ],
};

export function createMenusFeature() {
  return {
    service: {
      async getLayersByMenuItemName(menuItemName: string) {
        const layers = menuItems[menuItemName];

        if (!layers) {
          throw new Error("UNKNOWN_MENU_ITEM");
        }

        return layers;
      },
    },
  };
}
