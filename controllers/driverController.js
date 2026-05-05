// controllers/driverController.js
const { Drivers } = require('../models/index');

// GET ALL DRIVERS
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Drivers.findAll();
    res.status(200).json({ drivers });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch drivers', error: error.message });
  }
};

// ADD DRIVER
const addDriver = async (req, res) => {
  try {
    const { drivers_name, school_assigned } = req.body;

    const driver = await Drivers.create({ drivers_name, school_assigned });

    res.status(201).json({
      message: 'Driver added successfully',
      driver,
    });

  } catch (error) {
    res.status(500).json({ message: 'Failed to add driver', error: error.message });
  }
};

module.exports = { getAllDrivers, addDriver };