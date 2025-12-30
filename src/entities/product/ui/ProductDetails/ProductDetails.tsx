import React from 'react';
import type { Product } from '../../model/types';
import './ProductDetails.css';

export interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="product-details">
      <div className="product-details__image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details__content">
        <span className="product-details__category">{product.category.name}</span>

        <h2 className="product-details__title">{product.title}</h2>

        <p className="product-details__description">{product.description}</p>

        <div className="product-details__footer">
          <span className="product-details__price">${product.price.toFixed(2)}</span>

          <button type="button" className="product-details__add-to-cart" disabled>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
