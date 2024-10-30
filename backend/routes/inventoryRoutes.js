// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } = require('../controllers/inventoryController');

// Owner-only access for inventory management
router.get('/', protect, roleMiddleware('owner'), getInventory);
router.post('/', protect, roleMiddleware('owner'), addInventoryItem);
router.put('/:id', protect, roleMiddleware('owner'), updateInventoryItem);
router.delete('/:id', protect, roleMiddleware('owner'), deleteInventoryItem);

module.exports = router;
