const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');

const secretKey = 'sandeep';

// Middleware to generate JWT
function generateToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
}

// Middleware to authenticate JWT
const authenticateJwt = expressJwt({
  secret: secretKey,
  algorithms: ['HS256'],
  requestProperty: 'user', // Ensure req.user is used
});
module.exports = { generateToken, authenticateJwt };
