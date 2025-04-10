const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('../routes');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use main routes file
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
