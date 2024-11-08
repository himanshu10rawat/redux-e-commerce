//Action types
const ADD_WISHLIST_ITEM = "wishlist/addItems";
const REMOVE_WISHLIST_ITEM = "wishlist/removeItems";

//Action creators
export function addWishlistItem(wishlistData) {
  return {
    type: ADD_WISHLIST_ITEM,
    payload: wishlistData,
  };
}
export function removeWishlistItem(productId) {
  return {
    type: REMOVE_WISHLIST_ITEM,
    payload: { productId },
  };
}

//Reducer
export default function (state = [], action) {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      const existingProduct = state.find(
        (wishlistItem) => wishlistItem.productId === action.payload.productId
      );

      if (!existingProduct) {
        return [...state, action.payload];
      }
      return state;

    case REMOVE_WISHLIST_ITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
