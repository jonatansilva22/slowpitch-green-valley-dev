import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.model.js'; 
import CartProduct from './cartProduct.model.js'; 

const Cart = sequelize.define('Cart', {
    idCart: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idUser: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING } // 'pending' or 'completed'
});

export default Cart;
