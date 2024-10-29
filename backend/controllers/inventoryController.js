// controllers/inventoryController.js
const InventoryItem = require('../models/InventoryItem');

// @desc Get all inventory items
// @route GET /api/inventory
// @access Private (Owner only)
const getInventoryItems = async (req, res) => {
    try {
        const inventoryItems = await InventoryItem.find({});
        res.json(inventoryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Add a new inventory item
// @route POST /api/inventory
// @access Private (Owner only)
const addInventoryItem = async (req, res) => {
    const { name, quantity, unit, description } = req.body;

    const inventoryItem = new InventoryItem({
        name,
        quantity,
        unit,
        description,
    });

    try {
        const createdInventoryItem = await inventoryItem.save();
        res.status(201).json(createdInventoryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update an inventory item
// @route PUT /api/inventory/:id
// @access Private (Owner only)
const updateInventoryItem = async (req, res) => {
    const { name, quantity, unit, description } = req.body;

    try {
        const inventoryItem = await InventoryItem.findById(req.params.id);

        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        inventoryItem.name = name || inventoryItem.name;
        inventoryItem.quantity = quantity || inventoryItem.quantity;
        inventoryItem.unit = unit || inventoryItem.unit;
        inventoryItem.description = description || inventoryItem.description;

        const updatedInventoryItem = await inventoryItem.save();
        res.json(updatedInventoryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete an inventory item
// @route DELETE /api/inventory/:id
// @access Private (Owner only)
const deleteInventoryItem = async (req, res) => {
    try {
        const inventoryItem = await InventoryItem.findById(req.params.id);

        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        await inventoryItem.remove();
        res.json({ message: 'Inventory item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getInventoryItems,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
};
