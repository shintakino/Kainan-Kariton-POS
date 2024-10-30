// routes/truckRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getTrucks, addTruck, updateTruck, deleteTruck } = require('../controllers/truckController');

// Owner-only access for managing trucks
router.get('/', protect, roleMiddleware('owner'), getTrucks);
router.post('/', protect, roleMiddleware('owner'), addTruck);
router.put('/:id', protect, roleMiddleware('owner'), updateTruck);
router.delete('/:id', protect, roleMiddleware('owner'), deleteTruck);

module.exports = router;
