// routes/salesReportRoutes.js
const express = require('express');
const {
    createSalesReport,
    getSalesReports,
} = require('../controllers/salesController');
const router = express.Router();

// Create a new sales report
router.post('/', createSalesReport);

// Get all sales reports
router.get('/', getSalesReports);

module.exports = router;
