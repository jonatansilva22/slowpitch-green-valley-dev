import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Order from './order.model.js'; 
import Contact from './contact.model.js'; 
import Review from './review.model.js'; 
import Cart from './cart.model.js'; 

const User = sequelize.define('User', {
    idUser: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    userType: { type: DataTypes.ENUM('owner', 'customer'), allowNull: false }
});

export default User;
