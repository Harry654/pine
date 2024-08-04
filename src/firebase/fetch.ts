import { pantryItems } from "../constants/pantryItems";
import { IPantryItem, IPantryItems, TLocation } from "../types";

export const fetchItems = async (
  location: TLocation | "all" = "all"
): Promise<IPantryItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let items: IPantryItems;
      if (location === "all") items = pantryItems;
      else items = pantryItems.filter((item) => item.location === location);
      resolve(items);
    }, 2000);
  });
};
