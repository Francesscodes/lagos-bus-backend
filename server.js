// server.js
const express = require('express');
require('dotenv').config();

const { sequelize } = require('./models/index');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Lagos Bus API is running!' });
});

// All routes mounted under /api
app.use('/api', routes);

// Start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');

    await sequelize.sync({ force: false });
    console.log('✅ Models synced safely.');

    app.listen(PORT, () => {
      console.log(`🚌 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ Unable to connect to database:', error.message);
    process.exit(1);
  }
};

startServer();