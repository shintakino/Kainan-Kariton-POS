// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getEmployees, addEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

// Protected routes with owner-only access
router.get('/', protect, roleMiddleware('owner'), getEmployees);
router.post('/', protect, roleMiddleware('owner'), addEmployee);
router.put('/:id', protect, roleMiddleware('owner'), updateEmployee);
router.delete('/:id', protect, roleMiddleware('owner'), deleteEmployee);

module.exports = router;
