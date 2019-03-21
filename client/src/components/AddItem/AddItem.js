import React, { Component } from "react";
import ecommerce from "../../api/e-commerce";
import "./AddItem.css";

// This component contains the form for a user to create a new item in the inventory database.

class AddItem extends Component {
  state = {
    title: "",
    image: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0,
    errors: {}
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
      // send a post request to the API to create a newItem, if any fields are left blank, an error object will be passed back to the component
      await ecommerce.post("/api/inventory/add", newItem);
    } catch (error) {
      // the errors object
      this.setState({
        errors: error.response.data
      });
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
      total,
      errors
    } = this.state;
    return (
      <div className="addItemContainer">
        <form className="addItemForm" onSubmit={this.handleSubmit}>
          <div className="inputContainer">
            {/* Each label has a style attribute present that is responsible for changing the label text color to red with an appropriate message indicating that the field is required. */}
            <label
              style={errors.title ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Title"
            >
              {errors.title ? errors.title : "Title"}
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
            <label
              style={errors.img ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Image"
            >
              {errors.img ? errors.img : "Image"}
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
            <label
              style={errors.price ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Price"
            >
              {errors.price ? errors.price : "Price"}
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
            <label
              style={errors.company ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Company"
            >
              {errors.company ? errors.company : "Company Name"}
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
            <label
              style={errors.info ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Info"
            >
              {errors.info ? errors.info : "Description Information"}
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
            <label
              style={errors.count ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="Count"
            >
              {errors.count ? errors.count : "Number of Items"}
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
            <label
              style={errors.total ? { color: "red" } : {}}
              className="addItemLabel"
              htmlFor="total"
            >
              {errors.total ? errors.total : "Current Total"}
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

export default AddItem;
