import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import OrderProduct from './orderProduct.model.js'; 

const SoldItem = sequelize.define('SoldItem', {
    idItem: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idOrderProduct: { type: DataTypes.INTEGER },
    profit: { type: DataTypes.DECIMAL(10, 2) },
    profitPercentage: { type: DataTypes.DECIMAL(5, 2) }
});

export default SoldItem;
