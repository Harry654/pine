import { pantryItems } from "../constants/pantryItems";
import { IPantryItem } from "../types";

export const fetchFridgeItems = async (): Promise<IPantryItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fridgeItems = pantryItems.filter((item) => item.location === "fridge");
      resolve(fridgeItems);
    }, 2000); 
  });
};
