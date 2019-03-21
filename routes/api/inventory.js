const express = require("express");
const router = express.Router();

// validate the Inventory object
const validateInventory = require("../../utils/inventory");

// get the Inventory Model
const Inventory = require("../../models/inventory");

//@route /api/inventory/test
//@desc Test route to make sure the inventory router is working
//@access public
router.get("/test", async (req, res) => {
  res.status(200).json({ msg: "Inventory Route is working..." });
});

//@route /api/inventory/
//@desc Get a list of items that are in the inventory database
//@access public
router.get("/", async (req, res) => {
  try {
    // get the items inside of the Inventory database, return the sorted by the date
    let inventory = await Inventory.find().sort({ date: -1 });
    console.log("inventory ", inventory);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: "Could not get items from the database." });
  }
});

//@route /api/inventory/add
//@desc Add a new item to the inventory database
//@access public
router.post("/add", async (req, res) => {
  // validate the request body passed from the AddItem component
  const { errors, isValid } = validateInventory(req.body);
  console.log("errors object ", errors);
  console.log("is valid check ", isValid);
  if (!isValid) {
    // there are errors so we need to return the error object
    return res.status(400).json(errors);
  }
  try {
    // Create an object from the request that includes the title, img, price, company, info, inCart, count, and total
    let newItem = {
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      company: req.body.company,
      info: req.body.info,
      inCart: req.body.inCart,
      count: req.body.count,
      total: req.body.total
    };
    // add the new item to the Inventory model
    let item = new Inventory(newItem);
    console.log("new inventory item: ", item);
    // save the item to the database.
    item.save();
    // return the new item array to confirm adding the new item is working.
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ error: "Could not add item to the database" });
  }
});

module.exports = router;
