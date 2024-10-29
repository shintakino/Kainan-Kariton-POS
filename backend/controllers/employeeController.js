// controllers/employeeController.js
const Employee = require('../models/Employee');

// @desc Get all employees
// @route GET /api/employees
// @access Private (Owner only)
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Add a new employee
// @route POST /api/employees
// @access Private (Owner only)
const addEmployee = async (req, res) => {
    const { name, email, password } = req.body;

    const employeeExists = await Employee.findOne({ email });
    if (employeeExists) {
        return res.status(400).json({ message: 'Employee already exists' });
    }

    const employee = new Employee({
        name,
        email,
        password,
    });

    try {
        const createdEmployee = await employee.save();
        res.status(201).json(createdEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update an employee
// @route PUT /api/employees/:id
// @access Private (Owner only)
const updateEmployee = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employee.name = name || employee.name;
        employee.email = email || employee.email;
        if (password) {
            employee.password = password; // Hash the password in the model
        }

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete an employee
// @route DELETE /api/employees/:id
// @access Private (Owner only)
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        await employee.remove();
        res.json({ message: 'Employee removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};
