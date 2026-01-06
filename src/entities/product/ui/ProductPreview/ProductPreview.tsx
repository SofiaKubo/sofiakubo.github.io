import React from 'react';
import type { Product } from '../../model/types';
import './ProductPreview.css';
import CartButton from '../../../../features/cart/ui/CartButton/CartButton';

export interface ProductPreviewProps {
  product: Product;
  cartCount: number;
}

export default function ProductPreview({ product, cartCount }: ProductPreviewProps) {
  return (
    <div className="product-preview">
      <div className="product-preview__image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-preview__content">
        <span className="product-preview__category">{product.category.name}</span>

        <h2 className="product-preview__title">{product.title}</h2>

        <p className="product-preview__description">{product.description}</p>

        <div className="product-preview__footer">
          <span className="product-preview__price">${product.price.toFixed(2)}</span>

          <div className="product-preview__cart-button">
            <CartButton count={cartCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
