export type ISectionItem = {
  section: string;
  number: number;
};

type titles = "Fridge" | "Freezer" | "Store";
export type IListItem = { title: titles; number: number };
export type IList = IListItem[];

export type QuantityUnit =
  | "pieces"
  | "liters"
  | "grams"
  | "kg"
  | "jar"
  | "loaves"
  | "bag"
  | "pints"
  | "packs"
  | "cans"
  | "head"
  | "pack"
  | "bottle";

export type TCategory =
  | "dairy"
  | "vegetables"
  | "meat"
  | "beverages"
  | "fruits"
  | "prepared"
  | "canned"
  | "grains"
  | "spread"
  | "bakery"
  | "dessert";

export type TLocation = "fridge" | "freezer" | "shelf";

export type IPantryItem = {
  id: string;
  name: string;
  quantity: number;
  quantity_unit: QuantityUnit;
  date_added: Date;
  expiration_date: Date;
  category?: TCategory;
  notes?: string;
  is_expired?: boolean;
  added_by?: string;
  image_url?: string;
  location: TLocation;
};

export type IPantryItems = IPantryItem[];
