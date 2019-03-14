import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../ProductProvider/ProductProvider";

import "./Modal.css";

// make sure that the modal doesn't close if you click anywhere on the Modal
const handleModal = event => {
  event.stopPropagation();
};

const Modal = () => {
  return ReactDOM.createPortal(
    <ProductConsumer>
      {({ detail, modalOpen, closeModal, addToCart, handleDetail }) => {
        if (!modalOpen) {
          return <React.Fragment />;
        } else {
          return (
            <div onClick={handleModal} id="modalDialog">
              <div className="modalContainer">
                <h2 style={{ textAlign: "center" }}>Item Added To Cart</h2>
                <img
                  src={detail.img}
                  alt={detail.title}
                  className="productImage"
                />
                <div className="listing">
                  <h4 className="listingTitle">
                    {detail.title} - ${detail.price}
                  </h4>
                  <Link to="/">
                    <button
                      className="aboutButton"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <p>Store</p>
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      className="goToCartButton"
                      onClick={() => closeModal()}
                    >
                      Go To Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>,
    document.getElementById("modal")
  );
};

export default Modal;
