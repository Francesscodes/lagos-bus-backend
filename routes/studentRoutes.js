const express = require('express');
const router = express.Router();
const { addStudent, getStudentsByParent, getAllStudents } = require('../controllers/studentController');
const { protect } = require('../middleware/auth');

router.post('/', protect, addStudent);
router.get('/', protect, getAllStudents);
router.get('/parent/:parentId', protect, getStudentsByParent);

module.exports = router;