export type Category =
  'information' |
  'health' |
  'biology' |
  'hobby' |
  'characteristic' |
  'phobia' |
  'catastrophe' |
  'special';

export interface Card {
  id: number;
  category: Category;
  title: string;
  text: string;
}

export interface Player {
  id: number;
  name: string;
  cards: Card[]
}
