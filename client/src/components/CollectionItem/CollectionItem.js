import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItem } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CustomButton from "../CustomButton/CustomButton";

import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem, currentUser }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CollectionItem);
