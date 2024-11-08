import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import HeartIcon from "../assets/heart.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishList);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopify Mart</Link>
        </h1>
        <div className="header-icons">
          <Link className="cart-icon" to="/wishlist">
            <img src={HeartIcon} alt="Heart-icon" />
            <div className="cart-items-count">{wishlistItems.length}</div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
