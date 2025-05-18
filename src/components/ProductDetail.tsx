import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Product } from '../types/Product';
import { fetchProductById } from '../services/productService';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError('Product ID is missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
          setError('Invalid product ID');
          return;
        }

        const productData = await fetchProductById(productId);
        if (productData) {
          setProduct(productData);
          setError(null);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <Link to="/" className="back-link">Back to Products</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/" className="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>
      
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-detail-price-section">
            <div className="product-detail-price">${product.price.toFixed(2)}</div>
            <div className="product-detail-status">
              {product.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="product-detail-category">
            <strong>Category:</strong> {product.category}
          </div>
          
          <div className="product-detail-full-description">
            <h3>Product Details</h3>
            <p>{product.details}</p>
          </div>
          
          <button 
            className="add-to-cart-button"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;