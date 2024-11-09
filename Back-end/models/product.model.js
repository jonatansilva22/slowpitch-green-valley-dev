import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import OrderProduct from './orderProduct.model.js'; 
import Review from './review.model.js'; 
import CartProduct from './cartProduct.model.js';

const Product = sequelize.define('Product', {
    idProduct: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    salePrice: { type: DataTypes.DECIMAL(10, 2) },
    itemCost: { type: DataTypes.DECIMAL(10, 2) },
    stockQuantity: { type: DataTypes.INTEGER },
    image: { type: DataTypes.STRING }
});

// Funciones del CRUD que interactuan con la base de datos
const db = require('../config/db');

const getAllProducts = (callback) => {
  db.query('SELECT * FROM products', callback);
};

const getProductById = (id, callback) => {
  db.query('SELECT * FROM products WHERE id = ?', [id], callback);
};

const addProduct = (product, callback) => {
  db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', 
  [product.name, product.price, product.description], callback);
};

const updateProduct = (id, product, callback) => {
  db.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
  [product.name, product.price, product.description, id], callback);
};

const deleteProduct = (id, callback) => {
  db.query('DELETE FROM products WHERE id = ?', [id], callback);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};

// Relaciones
Product.hasMany(OrderProduct, { foreignKey: 'idProduct' });
Product.hasMany(Review, { foreignKey: 'idProduct' });
Product.hasMany(CartProduct, { foreignKey: 'idProduct' });

export default Product;