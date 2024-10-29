food-truck-pos/
├── client/                    # Frontend code (React)
│   ├── public/                # Static files and index.html
│   ├── src/
│   │   ├── assets/            # Images, icons, and other assets
│   │   ├── components/        # Reusable components
│   │   │   ├── Auth/          # Login, Register components
│   │   │   ├── Dashboard/     # Main dashboard layout components
│   │   │   ├── Menu/          # Menu components (MenuList, MenuForm)
│   │   │   ├── Orders/        # Order processing components
│   │   │   ├── Employees/     # Employee management components
│   │   │   ├── Inventory/     # Inventory management components
│   │   │   ├── Sales/         # Sales and analytics components
│   │   ├── context/           # Context API and Redux for state management
│   │   ├── pages/             # Pages for different routes
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── DashboardPage.js
│   │   ├── services/          # API calls and helper functions
│   │   ├── styles/            # Global styles and theme setup
│   │   ├── App.js             # Main app component
│   │   ├── index.js           # Entry point
│   │   ├── setupTests.js      # Frontend test setup
│   ├── package.json           # Frontend dependencies and scripts
│   └── .env                   # Frontend environment variables
│
├── server/                    # Backend code (Node.js and Express)
│   ├── config/                # Configuration files (e.g., database, JWT secrets)
│   │   ├── db.js              # MongoDB connection setup
│   │   ├── auth.js            # JWT configuration
│   ├── controllers/           # Controller functions for routes
│   │   ├── authController.js  # Auth logic for login/register
│   │   ├── menuController.js  # Menu management logic
│   │   ├── orderController.js # Order processing logic
│   │   ├── employeeController.js # Employee management logic
│   │   ├── salesController.js # Sales and reporting logic
│   │   ├── inventoryController.js # Inventory management logic
│   ├── middleware/            # Middleware functions
│   │   ├── authMiddleware.js  # Protect routes based on user roles
│   │   ├── errorHandler.js    # Error handling middleware
│   ├── models/                # Mongoose models
│   │   ├── User.js            # User schema (owner, employee)
│   │   ├── Truck.js           # Truck schema
│   │   ├── MenuItem.js        # Menu item schema
│   │   ├── Order.js           # Order schema
│   │   ├── Inventory.js       # Inventory schema
│   │   ├── SalesReport.js     # Sales report schema
│   ├── routes/                # Route definitions
│   │   ├── authRoutes.js      # Authentication routes
│   │   ├── menuRoutes.js      # Menu management routes
│   │   ├── orderRoutes.js     # Order processing routes
│   │   ├── employeeRoutes.js  # Employee management routes
│   │   ├── salesRoutes.js     # Sales and reporting routes
│   │   ├── inventoryRoutes.js # Inventory management routes
│   ├── tests/                 # Backend tests
│   │   ├── auth.test.js       # Auth-related tests
│   │   ├── menu.test.js       # Menu management tests
│   │   ├── order.test.js      # Order processing tests
│   │   ├── inventory.test.js  # Inventory management tests
│   │   ├── sales.test.js      # Sales and reporting tests
│   ├── app.js                 # Express app setup
│   ├── server.js              # Server entry point
│   ├── package.json           # Backend dependencies and scripts
│   └── .env                   # Backend environment variables
│
├── docs/                      # Project documentation
│   ├── API_Documentation.md   # API endpoint documentation
│   ├── User_Guide.md          # Guide for owners and employees
│   └── System_Architecture.md # System design and architecture overview
│
├── .gitignore                 # Git ignore file
├── README.md                  # Project overview and setup instructions
└── docker-compose.yml         # Docker configuration for frontend and backend services
