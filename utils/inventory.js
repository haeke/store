const validator = require("validator");

// We pass the inventory object to this function to make sure that none of the fields are blank. If any fields are blank we want to add them to an error object and then return it from the router to the React component to display an error where a user left a field empty.
module.exports = function validateInventory(data) {
  let errors = {};

  if (validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (validator.isEmpty(data.img)) {
    errors.img = "Image field is required";
  }
  if (validator.isEmpty(data.price.toString())) {
    errors.price = "Price field is required";
  }
  if (validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }
  if (validator.isEmpty(data.info)) {
    errors.info = "Info field is required";
  }
  if (validator.isEmpty(data.count.toString())) {
    errors.count = "Count field is required";
  }
  if (validator.isEmpty(data.total.toString())) {
    errors.total = "Total field is required";
  }
  console.log("errors object ", errors);
  return {
    errors: errors,
    isValid: validator.isEmpty(errors.toString())
  };
};
