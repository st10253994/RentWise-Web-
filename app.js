const express = require('express');
const app = express();
const { connectMongo } = require('./database/db');
const { checkAuth } = require('./Auth/checkAuth')
const { upload, uploadFiles, maintenanceUpload } = require('./database/cloudinary');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies
app.use(cors()) // Enable CORS for all routes

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

// Connect to MongoDB
connectMongo();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});