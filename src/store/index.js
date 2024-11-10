import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import productReducer from "./slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishlistReducer,
  },
});
