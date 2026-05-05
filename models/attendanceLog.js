// models/AttendanceLog.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AttendanceLog = sequelize.define('AttendanceLog', {
  id: {
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
  studentId: {              // foreign key to Student(student_id)
    type: DataTypes.INTEGER,
    references: {
      model: 'Student',
      key: 'student_id',
    },
  },
  student_status: {
    type: DataTypes.ENUM('Boarded', 'Dropped'),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  location: {
    type: DataTypes.STRING(255),
  },
}, {
  tableName: 'AttendanceLog',
  timestamps: false,
});

module.exports = AttendanceLog;