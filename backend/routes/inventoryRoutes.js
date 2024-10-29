// routes/inventoryRoutes.js
const express = require('express');
const {
    createInventoryItem,
    getInventoryItems,
    updateInventoryItem,
    deleteInventoryItem,
} = require('../controllers/inventoryController');
const router = express.Router();

// Create a new inventory item
router.post('/', createInventoryItem);

// Get all inventory items
router.get('/', getInventoryItems);

// Update an inventory item
router.put('/:id', updateInventoryItem);

// Delete an inventory item
router.delete('/:id', deleteInventoryItem);

module.exports = router;
