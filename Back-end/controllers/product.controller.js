const productModel = require('../models/productModel');

const getProducts = (req, res) => {
  productModel.getAllProducts((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener productos' });
    }
    res.status(200).json(results);
  });
};

const getProduct = (req, res) => {
  const { id } = req.params;
  productModel.getProductById(id, (err, result) => {
    if (err || !result) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(result);
  });
};

const createProduct = (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = { name, price, description };

  productModel.addProduct(newProduct, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al agregar el producto' });
    }
    res.status(201).json({ message: 'Producto creado', product: newProduct });
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const updatedProduct = { name, price, description };

  productModel.updateProduct(id, updatedProduct, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar el producto' });
    }
    res.status(200).json({ message: 'Producto actualizado', product: updatedProduct });
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  productModel.deleteProduct(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar el producto' });
    }
    res.status(200).json({ message: 'Producto eliminado' });
  });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
