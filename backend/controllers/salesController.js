// controllers/salesController.js
const Order = require('../models/Order');

// @desc Get sales report for a specific time period
// @route GET /api/sales/report
// @access Private (Owner only)
const getSalesReport = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const orders = await Order.find({
            createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });

        const totalSales = orders.reduce((acc, order) => acc + order.totalAmount, 0);
        const totalOrders = orders.length;

        res.json({
            totalSales,
            totalOrders,
            orders,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Get best performing employee by sales
// @route GET /api/sales/best-employee
// @access Private (Owner only)
const getBestEmployee = async (req, res) => {
    try {
        const orders = await Order.aggregate([
            { $group: { _id: '$employeeId', totalSales: { $sum: '$totalAmount' } } },
            { $sort: { totalSales: -1 } },
            { $limit: 1 }
        ]);

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No sales data found' });
        }

        res.json(orders[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSalesReport,
    getBestEmployee,
};
