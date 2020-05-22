import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UVobHw2eUhAXx2VMf3wBZZMt00l556a7Bs";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
        clearCart();
        history.push("/");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="crown-clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(StripeCheckoutButton);
