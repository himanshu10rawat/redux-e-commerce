import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import productReducer from "./slices/productSlice";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
