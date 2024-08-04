import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IPantryItem, TLocation } from "../types";
import { fetchItems } from "../firebase/fetch";
import { searchItems } from "../firebase/search";
import { addNewPantryItem } from "../firebase/addNewPantryItem";

interface PantryContextProps {
  items: IPantryItem[];
  addItem: (item: IPantryItem) => void;
  updateItem: (item: IPantryItem) => void;
  removeItem: (id: string) => void;
  searchPantryItems: (q: string, location: TLocation) => void;
  loading: boolean;
  query: string;
  newItem: IPantryItem;
  updateNewItem: (item: IPantryItem) => void;
  clearNewItem: () => void;
}

const PantryContext = createContext<PantryContextProps | undefined>(undefined);

const PantryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<IPantryItem[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<IPantryItem>({
    id: Math.random().toString(36).substring(2, 9),
    name: "",
    quantity: 1,
    quantity_unit: "pieces",
    date_added: new Date(),
    expiration_date: new Date("2024-12-01T00:00:00Z"),
    category: "dairy",
    notes: "",
    is_expired: false,
    image_url: "",
    location: "fridge",
  });

  const addItem = (item: IPantryItem) => {
    setItems((prevItems) => [item, ...prevItems]);
    addNewPantryItem(item);
  };

  const updateItem = (updatedItem: IPantryItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const loadFridgeItems = async () => {
    setLoading(true);
    try {
      const response = await fetchItems("fridge");
      setItems(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const searchPantryItems = async (
    q: string,
    location: TLocation | "all" = "all"
  ) => {
    setLoading(true);
    setQuery(q);
    try {
      const response = await searchItems(q, location);
      setItems(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateNewItem = (item: IPantryItem) => setNewItem(item);

  const clearNewItem = () => {
    setNewItem({
      id: Math.random().toString(36).substring(2, 9),
      name: "",
      quantity: 1,
      quantity_unit: "pieces",
      date_added: new Date(),
      expiration_date: new Date("2024-12-01T00:00:00Z"),
      category: "dairy",
      notes: "",
      is_expired: false,
      image_url: "",
      location: "fridge",
    });
  };

  useEffect(() => {
    loadFridgeItems();
  }, []);

  return (
    <PantryContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        removeItem,
        searchPantryItems,
        loading,
        query,
        newItem,
        updateNewItem,
        clearNewItem,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export { PantryContext, PantryProvider };
