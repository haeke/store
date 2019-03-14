import React from "react";
import { Link } from "react-router-dom";

import "./StoreNav.css";

const StoreNav = () => {
  return (
    <nav>
      <ul className="storeNav">
        <li className="storeLogo">
          <Link to="/" className="storeLogo">
            StoreFront
          </Link>
        </li>
        <li className="storeLink">
          <Link to="/" className="storeLink">
            {" "}
            Products
          </Link>
        </li>
        <li className="storeLink">
          <Link to="/cart" className="storeLink">
            <button className="cartBtn">
              <i className="fas fa-shopping-cart white" />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StoreNav;
