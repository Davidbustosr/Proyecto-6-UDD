// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('./authMiddleware');

// Rutas de Producto
router.post('/create', protect, productController.createProduct);
router.get('/readall', productController.readAllProducts);
router.get('/readone/:id', productController.readOneProduct);
router.put('/update/:id', protect, productController.updateProduct);
router.delete('/delete/:id', protect, productController.deleteProduct);

module.exports = router;