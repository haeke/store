import React from "react";

import CartItem from "../CartItem/CartItem";

const CartList = ({ value }) => {
  return value.cart.map(item => (
    <CartItem key={`${item.id}-${item.title}`} item={item} value={value} />
  ));
};

export default CartList;
