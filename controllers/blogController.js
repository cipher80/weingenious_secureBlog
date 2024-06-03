const Blog = require('../models/Blog');

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content, author: req.user.id });
    await blog.save();
    res.status(201).json({ message: 'Blog post created', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post', error });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const blog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post updated', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post', error });
  }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post', error });
  }
};
