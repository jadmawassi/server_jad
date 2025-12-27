const { createProduct, findAllProdecut } = require("../controllers/product.controller");
const express = require("express");
const productRout = express.Router();

productRout.post("/createProduct", createProduct)
productRout.post("/findAllProdecut", findAllProdecut)

module.exports = productRout;