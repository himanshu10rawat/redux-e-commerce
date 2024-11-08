import { produce } from "immer";

//Action types
const ADD_CART_ITEM = "cart/addItems";
const REMOVE_CART_ITEM = "cart/removeItems";
const INCREASE_CART_ITEM = "cart/increaseItems";
const DECREASE_CART_ITEM = "cart/decreaseItems";

//Action creators
export function addCartItems(productData) {
  return {
    type: ADD_CART_ITEM,
    payload: productData,
  };
}

export function removeCartItems(productId) {
  return {
    type: REMOVE_CART_ITEM,
    payload: { productId },
  };
}

export function increaseCartItems(productId) {
  return {
    type: INCREASE_CART_ITEM,
    payload: { productId },
  };
}
export function decreaseCartItems(productId) {
  return {
    type: DECREASE_CART_ITEM,
    payload: { productId },
  };
}

//Reducer
export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId
    );
    switch (action.type) {
      case ADD_CART_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case REMOVE_CART_ITEM:
        state.splice(existingItemIndex, 1);
        break;
      case INCREASE_CART_ITEM:
        state[existingItemIndex].quantity += 1;
        break;
      case DECREASE_CART_ITEM:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
    }
    return state;
  });
}
