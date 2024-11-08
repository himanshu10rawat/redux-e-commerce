import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishList);

  return (
    <div className="products-container">
      {wishlistItems.map(({ image, price, productId, title, rating }) => (
        <WishlistItem
          key={productId}
          image={image}
          price={price}
          productId={productId}
          title={title}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default WishlistPage;
