export interface ProductCategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
}

export type CartProduct = Pick<Product, 'id' | 'title' | 'price' | 'image'>;
