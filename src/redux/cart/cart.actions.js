import CartActionTypes from "./cart.types";
import swal from "sweetalert";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const clearItemFromCart = item => {
  swal("Deleted", `You deleted this item from your cart!`, "success");
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
