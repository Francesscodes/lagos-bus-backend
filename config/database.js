// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Sequelize needs four things to connect:
// the database name, username, password, and connection options
const sequelize = new Sequelize(
  process.env.DB_NAME,     // "lagos_bus_db"
  process.env.DB_USER,     // "root"
  process.env.DB_PASSWORD, // anselemngo97$
  {
    host: process.env.DB_HOST,   // "localhost"
    dialect: 'mysql',            // tells Sequelize we're using MySQL
    port: process.env.DB_PORT || 3306,
    logging: false,              // set to console.log if you want to see SQL queries
  }
);

module.exports = sequelize;