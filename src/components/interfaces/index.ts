export type Category =
  | "information"
  | "health"
  | "biology"
  | "hobby"
  | "characteristic"
  | "phobia"
  | "catastrophe"
  | "special";

export interface Card {
  id: string;
  category: Category;
  title: string;
  text: string;
}

export interface Player {
  id: string;
  name: string;
  cards: Card[];
}
