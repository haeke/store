import React from "react";
import { Link } from "react-router-dom";

import PayPalButton from "../PayPalButton/PayPalButton";

import "./CartTotals.css";

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="cartTotalsContainer">
      <Link to="/">
        <button className="clearCartBtn" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </Link>
      <div className="subTotal">
        <span>Subtotal: ${cartSubTotal}</span>
      </div>
      <div className="tax">
        <span>Tax: ${cartTax}</span>
      </div>
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
      <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
    </div>
  );
};

export default CartTotals;
