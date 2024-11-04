import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
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

export default Product;
