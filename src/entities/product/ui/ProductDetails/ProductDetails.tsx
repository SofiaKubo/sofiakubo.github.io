import React from 'react';
import type { Product } from '../../model/types';
import './ProductDetails.css';
import CartButton from 'src/features/cart/ui/CartButton/CartButton';

export interface ProductDetailsProps {
  product: Product;
  cartCount: number;
}

export default function ProductDetails({ product, cartCount }: ProductDetailsProps) {
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

          <div className="product-details__cart-button">
            <CartButton count={cartCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
