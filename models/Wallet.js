const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Wallet = sequelize.define('Wallet', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },  // เช่น BTC, ETH
    balance: { type: DataTypes.FLOAT, defaultValue: 0 },
}, { timestamps: true });

Wallet.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Wallet, { foreignKey: 'userId' });

module.exports = Wallet;
