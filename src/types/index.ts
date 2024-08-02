export type ISectionItem = {
  section: string;
  number: number;
};

type titles = "Fridge" | "Freezer" | "Store";
export type IListItem = { title: titles; number: number };
export type IList = IListItem[];