const express = require("express");
const router = express.Router();

//@route /api/inventory/test
//@desc Test route to make sure the inventory router is working
//@access public
router.get("/test", async (req, res) => {
  res.status(200).json({ msg: "Inventory Route is working..." });
});

module.exports = router;
