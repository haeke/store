import React from "react";

import "./CartColumns.css";

const CartColumns = () => {
  return (
    <div className="cartColumnsContainer">
      <h3 className="cartProducts">Products</h3>
      <h3 className="cartProductName">Name Of Product</h3>
      <h3 className="cartPrice">Price</h3>
      <h3 className="cartQuantity">Quantity</h3>
      <h3 className="cartRemove">Remove</h3>
      <h3 className="cartTotal">Total</h3>
    </div>
  );
};

export default CartColumns;
