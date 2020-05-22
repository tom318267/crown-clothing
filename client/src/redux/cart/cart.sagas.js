import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import CartActionTypes from "../cart/cart.types";
import { clearCart } from "../cart/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartAfterCheckout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCheckoutSuccess() {
  yield takeLatest(CartActionTypes.CHECKOUT_SUCCESS, clearCartAfterCheckout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCheckoutSuccess)]);
}
