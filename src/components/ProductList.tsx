import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/Product';
import { fetchProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="no-products">No products available.</div>;
  }

  return (
    <div className="product-list">
      <h1>Markus Magic Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="product-image" 
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price.toFixed(2)} kr.</div>
              <div className="product-status">
                {product.inStock ? (
                  <span className="in-stock">In Stock</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;