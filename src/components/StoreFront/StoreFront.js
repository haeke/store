import React, { Component } from "react";

import StoreNav from "../StoreNav/StoreNav";
import Product from "../Product/Product";
// use the consumer to get access to the context objects value property
import { ProductConsumer } from "../ProductProvider/ProductProvider";

import "./StoreFront.css";

class StoreFront extends Component {
  render() {
    return (
      <React.Fragment>
        <StoreNav />
        <h1 className="textTitle centeredText">Phone Inventory</h1>
        <div className="storeFront">
          {/* Use the product consumer to get access to the products state asnd addToCart function for this component */}
          <ProductConsumer>
            {({ products, addToCart, handleDetail, openModal, closeModal }) => {
              return products.map(product => (
                <Product
                  key={product._id}
                  product={product}
                  handleDetail={handleDetail}
                  addToCart={addToCart}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              ));
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default StoreFront;
