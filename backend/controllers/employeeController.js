// controllers/employeeController.js
const Employee = require('../models/Employee');
const User = require('../models/User'); // Import the User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

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
    const { name, email, password, truck, role } = req.body; // Include truck and role

    // Check if the employee already exists
    const employeeExists = await Employee.findOne({ email });
    if (employeeExists) {
        return res.status(400).json({ message: 'Employee already exists' });
    }

    try {
        // Create a new employee record
        const employee = new Employee({
            name,
            email,
            truck,
            role,
        });

        const createdEmployee = await employee.save();

        // Only create a User record if the role is 'employee'
        if (role === 'employee') {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({
                email,
                password: hashedPassword,
                role: 'employee',
            });

            await user.save();
        }

        res.status(201).json(createdEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Update an employee
// @route PUT /api/employees/:id
// @access Private (Owner only)
const updateEmployee = async (req, res) => {
    const { name, email, password, truck, role } = req.body;

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Update fields if provided
        employee.name = name || employee.name;
        employee.email = email || employee.email;
        employee.truck = truck || employee.truck;
        employee.role = role || employee.role;

        if (password) {
            employee.password = await bcrypt.hash(password, 10); // Hash the new password
        }

        const updatedEmployee = await employee.save();

        // Update the User reference if the role is 'employee'
        if (role === 'employee') {
            const user = await User.findOne({ email });

            if (user) {
                user.email = email || user.email;
                if (password) {
                    user.password = await bcrypt.hash(password, 10); // Hash the new password
                }
                user.role = role;
                await user.save();
            } else {
                // Create a new User record if it doesn’t exist and the role is 'employee'
                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = new User({
                    email,
                    password: hashedPassword,
                    role: 'employee',
                });

                await newUser.save();
            }
        } else {
            // If the role is not 'employee', remove the User record if it exists
            await User.findOneAndDelete({ email });
        }

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

        // Remove the User record if the employee is a user
        await User.findOneAndDelete({ email: employee.email });

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
