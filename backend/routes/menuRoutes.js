// routes/menuRoutes.js
const express = require('express');
const {
    createMenuItem,
    getMenuItems,
    updateMenuItem,
    deleteMenuItem,
} = require('../controllers/menuController');
const router = express.Router();

// Create a new menu item
router.post('/', createMenuItem);

// Get all menu items
router.get('/', getMenuItems);

// Update a menu item
router.put('/:id', updateMenuItem);

// Delete a menu item
router.delete('/:id', deleteMenuItem);

module.exports = router;
