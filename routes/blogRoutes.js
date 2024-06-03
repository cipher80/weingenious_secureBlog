const express = require('express');
const blogController = require('../controllers/blogController');
const { authenticateJwt } = require('../middleware/authMiddleware');
const checkRole = require('../middleware/rbacMiddleware');
const router = express.Router();

router.post('/createPost', authenticateJwt, checkRole('author'), blogController.createBlog);
router.post('/updatePost/:id', authenticateJwt, checkRole('author'), blogController.updateBlog);
router.delete('/:id', authenticateJwt, checkRole('admin'), blogController.deleteBlog);

module.exports = router;
