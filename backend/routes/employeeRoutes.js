// routes/employeeRoutes.js
const express = require('express');
const {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employeeController');
const router = express.Router();

// Create a new employee
router.post('/', createEmployee);

// Get all employees
router.get('/', getEmployees);

// Update an employee
router.put('/:id', updateEmployee);

// Delete an employee
router.delete('/:id', deleteEmployee);

module.exports = router;
