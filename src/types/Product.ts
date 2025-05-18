export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
  details: string;
}

export interface ProductsResponse {
  products: Product[];
}