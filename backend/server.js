const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes'); // Import all routes

dotenv.config();
const app = express();

app.use(express.json());

// Use all routes from the routes folder
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
