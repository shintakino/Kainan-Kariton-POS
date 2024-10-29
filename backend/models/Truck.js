// models/Truck.js
const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the updatedAt field
truckSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
