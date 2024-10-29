// controllers/orderController.js
const Order = require('../models/Order');

// @desc Get all orders
// @route GET /api/orders
// @access Private (Owner only)
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('menuItems');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a new order
// @route POST /api/orders
// @access Private (Employee only)
const createOrder = async (req, res) => {
    const { customerName, menuItems } = req.body;

    const order = new Order({
        customerName,
        menuItems,
        totalAmount: 0, // Calculate total amount later
    });

    try {
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update an order
// @route PUT /api/orders/:id
// @access Private (Employee only)
const updateOrder = async (req, res) => {
    const { status } = req.body;

    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = status || order.status;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete an order
// @route DELETE /api/orders/:id
// @access Private (Employee only)
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await order.remove();
        res.json({ message: 'Order removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};
