// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // Token comes in the Authorization header as: "Bearer <token>"
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify the token and attach the user info to the request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // now any controller can access req.user.id and req.user.role
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { protect };