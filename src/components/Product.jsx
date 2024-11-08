import { useDispatch } from "react-redux";
import { addCartItems } from "../store/slices/cartSlice";
import { addWishlistItem } from "../store/slices/wishlistSlice";

const Product = ({ title, rating, price, image, productId }) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating.rate} ★ ★ ★ ★</p>
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
        <button
          onClick={() =>
            dispatch(
              addWishlistItem({ title, rating, price, image, productId })
            )
          }
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Product;
