import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.scss";

const Header = ({ currentUser, cart }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cart ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
