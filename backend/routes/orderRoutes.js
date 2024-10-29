// routes/orderRoutes.js
const express = require('express');
const {
    createOrder,
    getOrders,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');
const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getOrders);

// Update an order
router.put('/:id', updateOrder);

// Delete an order
router.delete('/:id', deleteOrder);

module.exports = router;
