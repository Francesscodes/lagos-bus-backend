const express = require('express');
const router = express.Router();
const { logAttendance, getAttendanceByStudent, getAllAttendance } = require('../controllers/attendanceController');
const { protect } = require('../middleware/auth');

router.post('/', protect, logAttendance);
router.get('/', protect, getAllAttendance);
router.get('/student/:studentId', protect, getAttendanceByStudent);

module.exports = router;
