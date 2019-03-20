const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
// used to make a connection to MongoDB
const connect = require("./connect");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
// import the other routes that we want to use
const inventory = require("./routes/api/inventory");
// create the router instance
const app = express();
app.use(cors());

// use morgan for loggin RESTful actions
app.use(morgan("dev"));

// body parser urlencoded and json middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// The routes that we want to use
app.use("/api/inventory", inventory);

// Serve the static assets if its in production
if (process.env.NODE_ENV === "production") {
  // set a static folder - we are using CRA for the client so we just need to point it to the client/build folder
  app.use(express.static("client/build"));
  // any route should go to the bundled html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// use environment variables to set the port but make the default go to port 2500.
const port = process.env.PORT || 2500;

connect(process.env.REACT_APP_MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
});
