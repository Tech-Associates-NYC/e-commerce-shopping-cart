const express = require('express');

const router = express.Router();

// import the controllers
const {getProducts, getProductById}= require('../controller/productControllers')

// '/'--@desc get all products from db
// @route GET/ api/products
// @access Public
// (req,res)
router.get('/', getProducts);


// '/:id'--@desc get a products by id from db
// @route GET/ api/product/:id
// @access Public
router.get('/:id', getProductById);


module.exports =router