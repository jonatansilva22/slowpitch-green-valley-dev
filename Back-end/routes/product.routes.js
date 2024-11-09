const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Ver todos los productos
router.get('/products', authMiddleware, productController.getProducts);

// Ver un producto específico
router.get('/products/:id', authMiddleware, productController.getProduct);

// Agregar un producto
router.post('/products', authMiddleware, productController.createProduct);

// Editar un producto
router.put('/products/:id', authMiddleware, productController.updateProduct);

// Eliminar un producto
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;