// controllers/studentController.js
const { Student, User } = require('../models/index');

// ADD STUDENT — a parent adds their child
const addStudent = async (req, res) => {
  try {
    const { student_name, school_name, parentId } = req.body;

    // Make sure the parent actually exists before creating the student
    const parent = await User.findOne({ where: { id: parentId, role: 'Parent' } });
    if (!parent) {
      return res.status(404).json({ message: 'Parent not found' });
    }

    const student = await Student.create({ student_name, school_name, parentId });

    res.status(201).json({
      message: 'Student added successfully',
      student,
    });

  } catch (error) {
    res.status(500).json({ message: 'Failed to add student', error: error.message });
  }
};

// GET STUDENTS BY PARENT — fetch all children linked to a parent
const getStudentsByParent = async (req, res) => {
  try {
    const { parentId } = req.params;

    const students = await Student.findAll({ where: { parentId } });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found for this parent' });
    }

    res.status(200).json({ students });

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch students', error: error.message });
  }
};

// GET ALL STUDENTS — useful for drivers to see who's on the route
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch students', error: error.message });
  }
};

module.exports = { addStudent, getStudentsByParent, getAllStudents };