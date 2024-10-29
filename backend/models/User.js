// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        trim: true,
        lowercase: true, // Store emails in lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for security
    },
    role: {
        type: String,
        enum: ['owner', 'employee'], // Define roles based on your needs
        required: true,
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
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Create a model
const User = mongoose.model('User', userSchema);
module.exports = User;
