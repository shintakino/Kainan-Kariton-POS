// controllers/menuController.js
const MenuItem = require('../models/MenuItem');

// @desc Get all menu items
// @route GET /api/menu
// @access Public
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({});
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Add a new menu item
// @route POST /api/menu
// @access Private (Owner only)
const addMenuItem = async (req, res) => {
    const { name, description, price, image } = req.body;

    const menuItem = new MenuItem({
        name,
        description,
        price,
        image,
    });

    try {
        const createdMenuItem = await menuItem.save();
        res.status(201).json(createdMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update a menu item
// @route PUT /api/menu/:id
// @access Private (Owner only)
const updateMenuItem = async (req, res) => {
    const { name, description, price, image } = req.body;

    try {
        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        menuItem.name = name || menuItem.name;
        menuItem.description = description || menuItem.description;
        menuItem.price = price || menuItem.price;
        menuItem.image = image || menuItem.image;

        const updatedMenuItem = await menuItem.save();
        res.json(updatedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete a menu item
// @route DELETE /api/menu/:id
// @access Private (Owner only)
const deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        await menuItem.remove();
        res.json({ message: 'Menu item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
};
