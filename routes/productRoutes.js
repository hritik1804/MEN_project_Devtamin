const express = require('express');
const Product = require('../models/ProductModels');
const { addProduct ,getProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/ProductControllers');


const router = express();



router.post('/product', addProduct);


router.get('/product', getProduct);


router.put('/product/:id', updateProduct);

router.get('/product/:id', getSingleProduct);


router.delete('/product/:id', deleteProduct)

module.exports = router;