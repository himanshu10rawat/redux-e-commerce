import React from "react";
import { addCartItems } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import closeIcon from "../assets/close-svgrepo-com.svg";
import { removeWishlistItem } from "../store/slices/wishlistSlice";

const WishlistItem = ({ image, price, productId, title, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img
        onClick={() => dispatch(removeWishlistItem(productId))}
        className="close-btn"
        src={closeIcon}
        alt="Close icon for removing wishlist item from wishlist page."
      />
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() =>
            dispatch(addCartItems({ title, rating, price, image, productId }))
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
