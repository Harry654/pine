import { pantryItems } from "./pantryItems";
const isToday = (someDate: Date): boolean => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
const isExpired = (someDate: Date): boolean => {
  const today = new Date();
  if (someDate.getFullYear() < today.getFullYear()) return true;
  if (someDate.getMonth() < today.getMonth()) return true;
  if (someDate.getDate() < today.getDate()) return true;

  return false;
};

export const sections = [
  {
    section: "all",
    number: pantryItems.length,
  },
  {
    section: "today",
    number: pantryItems.filter((item) => isToday(item.date_added)).length,
  },
  {
    section: "scheduled",
    number: 3,
  },
  {
    section: "expired",
    number: pantryItems.filter((item) => isExpired(item.expiration_date))
      .length,
  },
];
