import { pantryItems } from "../constants/pantryItems";
import { IPantryItem, IPantryItems } from "../types";

export const addNewPantryItem = async (
  item: IPantryItem
): Promise<IPantryItem[]> => {
  return new Promise((resolve) => {
    pantryItems.unshift(item);
    resolve(pantryItems);
  });
};
