// models/index.js
const sequelize = require('../config/database');
const User = require('./user');
const Student = require('./student');
const Drivers = require('./drivers');
const AttendanceLog = require('./attendanceLog');

// --- Define Associations ---
User.hasMany(Student, { foreignKey: 'parentId' });
Student.belongsTo(User, { foreignKey: 'parentId' });

Student.hasMany(AttendanceLog, { foreignKey: 'studentId' });
AttendanceLog.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = { sequelize, User, Student, Drivers, AttendanceLog };