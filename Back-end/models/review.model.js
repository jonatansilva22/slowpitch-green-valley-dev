import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.model.js'; 
import Product from './product.model.js'; 

const Review = sequelize.define('Review', {
    idReview: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idProduct: { type: DataTypes.INTEGER },
    idUser: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATE }
});

export default Review;
