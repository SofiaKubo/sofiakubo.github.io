import React from 'react';
import type { CartProduct } from '../../model/types';
import './ProductCartItem.css';
import CartButton from '../../../../features/cart/ui/CartButton/CartButton';
export interface ProductCartItemProps {
  product: CartProduct;
  quantity: number;
}

export default function ProductCartItem({ product, quantity }: ProductCartItemProps) {
  return (
    <div className="product-cart-item">
      <div className="product-cart-item__image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-cart-item__content">
        <h2 className="product-cart-item__title">{product.title}</h2>

        <div className="product-cart-item__footer">
          <span className="product-cart-item__price">${product.price.toFixed(2)}</span>

          <CartButton count={quantity} />

          <button className="product-cart-item__remove" type="button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
