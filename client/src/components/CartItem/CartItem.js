import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./CartItem.scss";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
  clearItem,
  item,
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        {/* <div
          style={{
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => clearItem(item)}
        >
          <i className="fas fa-trash"></i>
        </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
