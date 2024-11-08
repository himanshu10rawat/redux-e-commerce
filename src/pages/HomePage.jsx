import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

const HomePage = () => {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

export default HomePage;
