const express = require('express');
const router = express.Router();
const { getAllDrivers, addDriver } = require('../controllers/driverController');
const { protect } = require('../middleware/auth');

router.get('/', protect, getAllDrivers);
router.post('/', protect, addDriver);

module.exports = router;