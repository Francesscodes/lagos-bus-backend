// controllers/attendanceController.js
const { AttendanceLog, Student } = require('../models/index');

// LOG ATTENDANCE — driver marks a student as Boarded or Dropped
const logAttendance = async (req, res) => {
  try {
    const { student_name, school_name, studentId, student_status, location } = req.body;

    // Confirm the student exists before logging
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const log = await AttendanceLog.create({
      student_name,
      school_name,
      studentId,
      student_status,  // 'Boarded' or 'Dropped'
      location,
    });

    res.status(201).json({
      message: `Student marked as ${student_status}`,
      log,
    });

  } catch (error) {
    res.status(500).json({ message: 'Failed to log attendance', error: error.message });
  }
};

// GET ATTENDANCE BY STUDENT — parent checks their child's history
const getAttendanceByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const logs = await AttendanceLog.findAll({
      where: { studentId },
      order: [['timestamp', 'DESC']], // most recent first
    });

    if (logs.length === 0) {
      return res.status(404).json({ message: 'No attendance records found' });
    }

    res.status(200).json({ logs });

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch attendance', error: error.message });
  }
};

// GET ALL LOGS — full attendance history
const getAllAttendance = async (req, res) => {
  try {
    const logs = await AttendanceLog.findAll({ order: [['timestamp', 'DESC']] });
    res.status(200).json({ logs });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch logs', error: error.message });
  }
};

module.exports = { logAttendance, getAttendanceByStudent, getAllAttendance };