// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    truck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Truck', // Reference to the Truck model
        required: true,
    },
    role: {
        type: String,
        enum: ['employee'], // Define roles based on your needs
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for security
    },
    createdAt: {
        type: Date,
        default: Date.now, // Set default creation date
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Set default updated date
    },
});

// Middleware to update the `updatedAt` field
employeeSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
