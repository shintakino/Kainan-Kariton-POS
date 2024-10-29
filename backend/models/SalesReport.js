// models/SalesReport.js
const mongoose = require('mongoose');

const salesReportSchema = new mongoose.Schema({
    truck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Truck',
        required: true,
    },
    totalSales: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the createdAt field
salesReportSchema.pre('save', function (next) {
    this.createdAt = Date.now();
    next();
});

const SalesReport = mongoose.model('SalesReport', salesReportSchema);

module.exports = SalesReport;
