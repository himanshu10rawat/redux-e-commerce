// import { createSlice } from "@reduxjs/toolkit";
import { myCreateSlice } from "../../redux-custom-toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

// const slice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addCartItems(state, action) {
//       const existingItemIndex = findItemIndex(state, action);
//       existingItemIndex !== -1
//         ? (state[existingItemIndex].quantity += 1)
//         : state.push({ ...action.payload, quantity: 1 });
//     },
//     removeCartItems(state, action) {
//       const existingItemIndex = findItemIndex(state, action);
//       state.splice(existingItemIndex, 1);
//     },
//     increaseCartItems(state, action) {
//       const existingItemIndex = findItemIndex(state, action);
//       state[existingItemIndex].quantity += 1;
//     },
//     decreaseCartItems(state, action) {
//       const existingItemIndex = findItemIndex(state, action);
//       state[existingItemIndex].quantity -= 1;
//       state[existingItemIndex].quantity === 0 &&
//         state.splice(existingItemIndex, 1);
//     },
//   },
// });

const mySlice = myCreateSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItems(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      existingItemIndex !== -1
        ? (state[existingItemIndex].quantity += 1)
        : state.push({ ...action.payload, quantity: 1 });
    },
    removeCartItems(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseCartItems(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decreaseCartItems(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      state[existingItemIndex].quantity === 0 &&
        state.splice(existingItemIndex, 1);
    },
  },
});

export default mySlice.reducer;

export const {
  addCartItems,
  removeCartItems,
  increaseCartItems,
  decreaseCartItems,
} = mySlice.actions;

// console.log("slice", slice);
console.log("mySlice", mySlice);
