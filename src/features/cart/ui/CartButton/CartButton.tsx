import React from 'react';
import './CartButton.css';

export interface CartButtonProps {
  count: number;
}

export default function CartButton({ count }: CartButtonProps) {
  if (count === 0) {
    return (
      <button type="button" className="cart-button cart-button--empty">
        Add to cart
      </button>
    );
  }

  return (
    <div className="cart-button cart-button--counter">
      <button type="button" className="cart-button__control" disabled>
        −
      </button>

      <span className="cart-button__count">{count}</span>

      <button type="button" className="cart-button__control" disabled>
        +
      </button>
    </div>
  );
}
