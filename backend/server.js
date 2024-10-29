// server.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // for parsing application/json

// Sample route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
