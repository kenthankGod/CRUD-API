const express = require("express");
const router = express.Router();
const controller = require('../controllers/userController')


// THIS GET'S ALL PRODUCTS
router.get("/",controller.getAllproduct);

// THIS SUBMITS/CREATES A NEW PRODUCTS
router.post("/",controller.createproduct);

// THIS DELETES A PRODUCTS
router.delete("/:id",controller.deleteproduct);

// THIS UPDATES A PRODUCTS
router.put("/:id",controller.updateproduct);

module.exports = router;
