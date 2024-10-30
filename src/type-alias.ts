export type ID = string | number;

// Type Alias & optional properties(?)
export type Category = {
  id: ID;
  nama: string;
};

export type Product = {
  id: ID;
  nama: string;
  qty: number;
  category: Category;
  desription?: string;
};
