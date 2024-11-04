// Back-end/models/index.js

// Importa los modelos
import Cart from './cart.model.js';
import CartProduct from './cartProduct.model.js';
import Contact from './contact.model.js';
import Order from './order.model.js';
import OrderProduct from './orderProduct.model.js';
import Payment from './payment.model.js';
import Product from './product.model.js';
import Review from './review.model.js';
import SoldItem from './soldItem.model.js';
import User from './user.model.js';

// Define las relaciones aquí

// User Relations
User.hasMany(Order, { foreignKey: 'userId' });
User.hasMany(Contact, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });
User.hasMany(Cart, { foreignKey: 'userId' });

Order.belongsTo(User, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

// Product Relations
Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

// Order_Product Relations
Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'productId' });

// Sold_Item Relations
OrderProduct.hasOne(SoldItem, { foreignKey: 'orderProductId' });
SoldItem.belongsTo(OrderProduct, { foreignKey: 'orderProductId' });

// Cart_Product Relations
Cart.belongsToMany(Product, { through: CartProduct, foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: 'productId' });

// Payment Relations
Payment.belongsTo(Cart, { foreignKey: 'cartId' });
Cart.hasOne(Payment, { foreignKey: 'cartId' });

// Exporta todos los modelos para que puedan ser utilizados en otras partes de la aplicación
export {
    User,
    Contact,
    Order,
    Review,
    Cart,
    CartProduct,
    Product,
    OrderProduct,
    SoldItem,
    Payment
};