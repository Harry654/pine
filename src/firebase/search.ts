import { pantryItems } from "../constants/pantryItems";
import { IPantryItem, IPantryItems, TLocation } from "../types";

export const searchItems = async (
  q: string,
  location: TLocation | "all" = "all"
): Promise<IPantryItem[]> => {
  return new Promise((resolve) => {
    // setTimeout(() => {
    let items: IPantryItems;
    if (location === "all")
      items = pantryItems.filter((item) =>
        item.name.toLowerCase().includes(q.toLowerCase())
      );
    else
      items = pantryItems.filter(
        (item) =>
          item.name.toLowerCase().includes(q.toLowerCase()) &&
          item.location === location
      );
    resolve(items);
    // }, 2000);
  });
};
