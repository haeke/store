import React, { Component } from "react";
import ecommerce from "../../api/e-commerce";
import "./AddItem.css";

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
        <form className="addItemForm" onSubmit={this.handleSubmit}>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Title">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Image">
              Image
            </label>
            <input
              type="text"
              name="image"
              value={image}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Price">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={price}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Company">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={company}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Info">
              Description Information
            </label>
            <textarea
              type="text"
              name="info"
              value={info}
              className="addItemInput addItemTextArea"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="inCart">
              In Cart?
            </label>
            <select
              name="inCart"
              size="2"
              value={inCart}
              className="addItemSelect"
              onChange={this.handleChange}
              id="inCart"
            >
              <option value={true} className="addItemOption">
                True
              </option>
              <option value={false} className="addItemOption">
                False
              </option>
            </select>
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="Count">
              Number of Items
            </label>
            <input
              type="number"
              name="count"
              value={count}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="addItemLabel" htmlFor="total">
              Current Total
            </label>
            <input
              type="number"
              name="total"
              value={total}
              className="addItemInput"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="addItemButton"
              onClick={this.handleSubmit}
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AdItem;
