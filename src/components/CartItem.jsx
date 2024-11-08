import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItems,
  increaseCartItems,
  removeCartItems,
} from "../store/slices/cartSlice";

export default function CartItem({
  title,
  rating,
  price,
  imageUrl,
  quantity,
  productId,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating.rate} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(decreaseCartItems(productId))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseCartItems(productId))}>
          +
        </button>
        <button onClick={() => dispatch(removeCartItems(productId))}>
          Remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
