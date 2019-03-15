import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

const Product = ({
  product,
  addToCart,
  handleDetail,
  openModal,
  closeModal
}) => {
  return (
    <div
      className="productContainer"
      onClick={() => {
        openModal();
      }}
    >
      <img src={product.img} alt={product.title} className="productImage" />
      <div className="listing">
        <h4 className="listingTitle">
          {product.title} - ${product.price}
        </h4>
        <button
          className="productButton"
          onClick={() => {
            addToCart(product.id);
            openModal(product.id);
          }}
        >
          {product.inCart ? <p>In Cart</p> : <p>Add To Cart</p>}
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }),
  addToCart: PropTypes.func,
  setDetail: PropTypes.func
};

export default Product;
