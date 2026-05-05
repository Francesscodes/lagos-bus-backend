// models/Student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  student_id: {             // using your exact column name, not "id"
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  school_name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  parentId: {               // foreign key to User(id)
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
  },
}, {
  tableName: 'Student',
  timestamps: false,
});

module.exports = Student;