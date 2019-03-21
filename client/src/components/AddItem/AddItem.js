import React, { Component } from "react";
import ecommerce from "../../api/e-commerce";
import "AddItem.css";

class AdItem extends Component {
  state = {
    title: "",
    image: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
      title,
      image,
      price,
      company,
      info,
      inCart,
      count,
      total
    } = this.state;

    const newItem = {
      title,
      img: image,
      price,
      company,
      info,
      inCart,
      count,
      total
    };
    try {
      let response = await ecommerce.post("/api/inventory/add", newItem);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const {
      title,
      image,
      price,
      company,
      info,
      inCart,
      count,
      total
    } = this.state;
    return (
      <div className="addItemContainer">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="Image">Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <label htmlFor="Company">Company name</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={this.handleChange}
        />
        <label htmlFor="Info">Description Information</label>
        <input
          type="text"
          name="info"
          value={info}
          onChange={this.handleChange}
        />
        <label htmlFor="inCart">In Cart?</label>
        <select
          name="inCart"
          value={inCart}
          onChange={this.handleChange}
          id="inCart"
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <label htmlFor="Count">Number of Items</label>
        <input
          type="number"
          name="count"
          value={count}
          onChange={this.handleChange}
        />
        <label htmlFor="total">Current Total</label>
        <input
          type="number"
          name="total"
          value={total}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AdItem;
