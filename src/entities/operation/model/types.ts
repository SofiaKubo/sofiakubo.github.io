export interface Category {
  id: string;
  name: string;
}

export interface Operation {
  id: string;
  amount: number;
  category: Category;
  title: string;
  description: string;
  date: string;
}
