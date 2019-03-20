import React from "react";

import Title from "../Title/Title";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartList from "../CartList/CartList";
import CartTotals from "../CartTotals/CartTotals";

import { ProductConsumer } from "../ProductProvider/ProductProvider";

import "./Cart.css";

const Cart = props => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          if (value.cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="Cart" title="Items" />
                {/* refactor so that we are passing the value object */}
                <CartList value={value} />
                <CartTotals value={value} history={props.history} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
