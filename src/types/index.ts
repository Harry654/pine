export type ISectionItem = {
  section: string;
  number: number;
};

type titles = "Fridge" | "Freezer" | "Store";
export type IListItem = { title: titles; number: number };
export type IList = IListItem[];

export type IPantryItem = {
  name: string;
  quantity: number;
  quantity_unit:
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
  date_added: Date;
  expiration_date: Date;
  category?:
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
  notes?: string;
  is_expired?: boolean;
  added_by?: string;
  image_url?: string;
  location?: "fridge" | "freezer" | "shelf";
};

export type IPantryItems = IPantryItem[];
