// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getSalesReport, generateDailySalesReport, generateMonthlySalesReport, generateYearlySalesReport } = require('../controllers/salesController');

// Owner-only access for viewing sales reports
router.get('/', protect, roleMiddleware('owner'), getSalesReport);
router.get('/daily', protect, roleMiddleware('owner'), generateDailySalesReport);
router.get('/monthly', protect, roleMiddleware('owner'), generateMonthlySalesReport);
router.get('/yearly', protect, roleMiddleware('owner'), generateYearlySalesReport);

module.exports = router;
