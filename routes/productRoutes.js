const express = require('express');
const productController = require("../controllers/productController");

const router = express.Router();

router.post('/add-product/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);

module.exports = router;