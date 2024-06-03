// function checkRole(requiredRole) {
//  try {
//   return (req, res, next) => {
//     if (req.user.role !== requiredRole) {
//       return res.status(403).json({ message: 'Access denied' });
//     }
//     next();
//   };
//  } catch (error) {
//   throw error;
//  }
//   }
  
//   module.exports = checkRole;
function checkRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied ,this  role can not create post ' });
    }
    next();
  };
}

module.exports = checkRole;
  