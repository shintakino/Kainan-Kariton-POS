// routes/index.js
const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const employeeRoutes = require('./employeeRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const salesRoutes = require('./salesRoutes');
const truckRoutes = require('./truckRoutes');

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/sales', salesRoutes);
router.use('/trucks', truckRoutes);

module.exports = router;
