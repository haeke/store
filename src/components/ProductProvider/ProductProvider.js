import React, { Component } from "react";
import { detailProduct } from "../../api/e-commerce/data";
import ecommerce from "../../api/e-commerce";
// we need to first create the context object.
const ProductContext = React.createContext();

// The Product Context will allow us to pass in props to component without having to prop-drill.

class ProductProvider extends Component {
  state = {
    products: [],
    detail: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = async () => {
    try {
      // query the API to get the data stored inside the Inventory Database
      let res = await ecommerce.get("/api/inventory");
      // We still create a temporary array that we will use for the products state array.
      let tempProducts = [];
      res.data.forEach(item => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });

      this.setState(() => ({
        products: tempProducts
      }));
    } catch (error) {
      console.error(error);
    }
  };
  // returns an object for the individual item that was clicked on.
  getItem = detailId => {
    const product = this.state.products.find(item => item._id === detailId);
    return product;
  };

  handleDetail = detailId => {
    console.log("handle detail ", detailId);
    const product = this.getItem(detailId);
    this.setState(() => ({
      detail: product
    }));
  };

  addToCart = itemId => {
    console.log("item id ", itemId);
    let tempProducts = [...this.state.products];
    // get the index for the item that was clicked on
    const index = tempProducts.indexOf(this.getItem(itemId));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      ({ cart }) => ({
        products: tempProducts,
        cart: [...cart, product]
      }),
      () => this.addTotals()
    );
  };

  openModal = id => {
    console.log("open modal id ", id);
    const product = this.getItem(id);
    console.log(product);
    this.setState(() => ({
      modalOpen: true,
      detail: product
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modalOpen: false
    }));
  };
  // used to increase, decrease items inside of the cart component
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item._id === id);

    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.price * product.count;

    this.setState(
      () => ({
        cart: [...tempCart]
      }),
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item._id === id);

    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    product.count -= 1;
    // check to see if the count is 0. We want to remove the item from the cart.
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;

      this.setState(
        () => ({
          cart: [...tempCart]
        }),
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item._id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    // the object with the item where we want to remove the count and price properties
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => ({
        cart: [...tempCart],
        product: [...tempProducts]
      }),
      () => this.addTotals()
    );
  };

  clearCart = () => {
    this.setState(
      () => ({
        cart: []
      }),
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    const { cart } = this.state;
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    // we use parse float to convert the string back to a number
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => ({
      cartTotal: total,
      cartTax: tax,
      cartSubTotal: subTotal
    }));
  };
  render() {
    return (
      // use the Provider property with a value parameter this will consist of an object with functions for getting information from the objects. This can be used to pass props to any components that need them without the need for passing the callbacks and or state information through components that might not use them.
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
// create an object to reference to consumer property on the context variable
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
