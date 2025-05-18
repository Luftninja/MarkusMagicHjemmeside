import { Product, ProductsResponse } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data: ProductsResponse = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const products = await fetchProducts();
    return products.find(product => product.id === id) || null;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
};