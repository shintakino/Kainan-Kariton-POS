// middleware/roleMiddleware.js

const roleMiddleware = (requiredRole) => (req, res, next) => {
    // Check if user is logged in and has a role assigned
    if (!req.user || req.user.role !== requiredRole) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }
    next();
};

module.exports = roleMiddleware;
