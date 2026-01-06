import React from 'react';
import type { Product } from '../../model/types';
import './ProductCartItem.css';
import CartButton from '../../../../features/cart/ui/CartButton/CartButton';
export interface ProductCartItemProps {
  product: Product;
  quantity: number;
}

export default function ProductCartItem({ product, quantity }: ProductCartItemProps) {
  return (
    <div className="product-cart-item">
      <div className="product-cart-item__image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-cart-item__content">
        <span className="product-cart-item__category">{product.category.name}</span>
        <h2 className="product-cart-item__title">{product.title}</h2>

        <div className="product-cart-item__footer">
          <span className="product-cart-item__price">${product.price.toFixed(2)}</span>

          <div className="product-cart-item__cart-button">
            <CartButton count={quantity} />
          </div>
          <button className="product-cart-item__remove" type="button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
