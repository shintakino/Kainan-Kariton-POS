// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getOrders, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Protected route for employees to manage orders
router.get('/', protect, getOrders);
router.post('/', protect, createOrder);
router.put('/:id', protect, updateOrder);
router.delete('/:id', protect, deleteOrder);

module.exports = router;
