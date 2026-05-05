// models/index.js
const sequelize = require('../config/database');
const User = require('./User');
const Student = require('./Student');
const Drivers = require('./Drivers');
const AttendanceLog = require('./AttendanceLog');

// --- Define Associations ---
// A User (Parent) can have many Students
User.hasMany(Student, { foreignKey: 'parentId' });
Student.belongsTo(User, { foreignKey: 'parentId' });

// A Student can have many AttendanceLogs
Student.hasMany(AttendanceLog, { foreignKey: 'studentId' });
AttendanceLog.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = { sequelize, User, Student, Drivers, AttendanceLog };