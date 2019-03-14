import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../ProductProvider/ProductProvider";

import "./Details.css";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {({ detail, addToCart, closeModal }) => (
          <div className="detailsContainer">
            <div className="detailsInfo">
              <div className="detailsImage">
                <img
                  src={detail.img}
                  alt={detail.title}
                  className="detailImage"
                />
              </div>
              <div className="detailsText">
                <h2 className="detailsTitle">{detail.title}</h2>
                made by: <span className="company">{detail.company}</span>
                <h4 className="detailsPrice">
                  price: <span className="detailsPrice">${detail.price}</span>
                </h4>
                <h4>Description:</h4>
                <h4 className="detailsInfo">{detail.info}</h4>
                <div className="detailsButtonWrapper">
                  <Link to="/">
                    <button className="detailProductBtn">
                      Back To Products
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      className="detailCartBtn"
                      disabled={detail.inCart ? true : false}
                      onClick={() => {
                        addToCart(detail.id);
                        closeModal(detail.id);
                      }}
                    >
                      {detail.inCart ? <p>In Cart</p> : <p>Add To Cart</p>}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Details;
