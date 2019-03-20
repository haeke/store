import axios from "axios";

let baseURL = "";

if (process.env.NODE_ENV === "production") {
  // the production server where we can publicly access the router goes here...
  baseURL = "https://react-storefront-ed.herokuapp.com/";
}
// We can import this object inside any component that will need to make API requests
export default axios.create({
  baseURL: baseURL
});
