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
    <section
      className="productContainer"
      onClick={() => {
        openModal(product._id);
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
            addToCart(product._id);
            openModal(product._id);
          }}
        >
          {product.inCart ? <p>In Cart</p> : <p>Add To Cart</p>}
        </button>
      </div>
    </section>
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
