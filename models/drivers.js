// models/Drivers.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Drivers = sequelize.define('Drivers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  drivers_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  school_assigned: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Drivers',
  timestamps: false,
});

module.exports = Drivers;