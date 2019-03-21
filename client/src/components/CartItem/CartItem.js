import React from "react";

import "./CartItem.css";

const CartItem = ({ value, item }) => {
  return (
    <div key={item.id} className="cartItemContainer">
      <img src={item.img} alt={item.title} className="cartItemImage" />
      <h3 className="cartItemName">{item.title}</h3>
      <h3 className="cartItemPrice">{item.price}</h3>
      <div className="cartItemQuantity">
        <button className="blackBtn" onClick={() => value.decrement(item.id)}>
          {/* minus html hex code */}
          &#8722;
        </button>
        <button className="blackBtnNum">{item.count}</button>
        <button className="blackBtn" onClick={() => value.increment(item.id)}>
          {/* plus html hex code */}
          &#x2b;
        </button>
      </div>
      <div className="cartItemRemove">
        <button className="removeBtn" onClick={() => value.removeItem(item.id)}>
          <i className="fas fa-trash-alt cartIcon" />
        </button>
      </div>
      <h3 className="cartItemTotal">Quantity Total</h3>
    </div>
  );
};

export default CartItem;
