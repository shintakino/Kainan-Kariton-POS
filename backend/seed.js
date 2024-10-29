// sampleData.js
const mongoose = require('mongoose');
const User = require('./models/User');
const Employee = require('./models/Employee');
const Truck = require('./models/Truck');
const MenuItem = require('./models/MenuItem');
const Order = require('./models/Order');
const Inventory = require('./models/Inventory');
const SalesReport = require('./models/SalesReport');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/foodTruckPOS'; // Update with your database name

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // Clear existing data
        await User.deleteMany({});
        await Employee.deleteMany({});
        await Truck.deleteMany({});
        await MenuItem.deleteMany({});
        await Order.deleteMany({});
        await Inventory.deleteMany({});
        await SalesReport.deleteMany({});

        // Create Users
        const ownerUser = await User.create({
            email: 'owner@example.com',
            password: 'password123', // This should be hashed in production
            role: 'owner',
        });

        const employeeUser = await User.create({
            email: 'employee@example.com',
            password: 'password123', // This should be hashed in production
            role: 'employee',
        });

        // Create Trucks
        const truck1 = await Truck.create({
            name: 'Kainan Kariton Truck 1',
            location: 'Downtown', // Provide a valid location
            owner: owner1._id, // Link to the owner user
        });
        
        const truck2 = await Truck.create({
            name: 'Kainan Kariton Truck 2',
            location: 'Uptown', // Provide a valid location
            owner: owner1._id, // Link to the owner user
        });

        // Create Employees
        const employee1 = await Employee.create({
            name: 'John Doe',
            email: 'employee@example.com',
            password: 'password123', // This should be hashed in production
            truck: truck1._id,
            role: 'employee',
        });

        // Create Menu Items
        const menuItem1 = await MenuItem.create({
            name: 'Cheeseburger',
            price: 5.99,
            truck: truck1._id,
        });

        const menuItem2 = await MenuItem.create({
            name: 'Veggie Burger',
            price: 4.99,
            truck: truck1._id,
        });

        // Create Inventory
        const inventoryItem1 = await Inventory.create({
            item: menuItem1._id,
            quantity: 100,
            truck: truck1._id,
        });

        const inventoryItem2 = await Inventory.create({
            item: menuItem2._id,
            quantity: 50,
            truck: truck1._id,
        });

        // Create Orders
        const order1 = await Order.create({
            menuItems: [{ item: menuItem1._id, quantity: 2 }],
            employee: employee1._id,
            truck: truck1._id,
            totalAmount: 11.98,
        });

        const order2 = await Order.create({
            menuItems: [{ item: menuItem2._id, quantity: 1 }],
            employee: employee1._id,
            truck: truck1._id,
            totalAmount: 4.99,
        });

        // Create Sales Reports
        await SalesReport.create({
            truck: truck1._id,
            totalSales: 16.97,
            date: new Date(),
        });

        console.log('Sample data created successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};

// Run the seed function
seedDatabase();
