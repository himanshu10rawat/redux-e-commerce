import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import productReducer from "./slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";

function logger(store) {
  return function (next) {
    return function (action) {
      console.log("store", store);
      console.log("next", next);
      console.log("action", action);
    };
  };
}

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishlistReducer,
  },
  middleware: () => [logger],
});
