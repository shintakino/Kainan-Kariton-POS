// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

// Owner-only access for menu management
router.get('/', protect, roleMiddleware('owner'), getMenuItems);
router.post('/', protect, roleMiddleware('owner'), addMenuItem);
router.put('/:id', protect, roleMiddleware('owner'), updateMenuItem);
router.delete('/:id', protect, roleMiddleware('owner'), deleteMenuItem);

module.exports = router;
