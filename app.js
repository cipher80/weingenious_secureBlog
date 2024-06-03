const express = require('express');
const mongoose = require('./config/database'); // Import database connection
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const loggingMiddleware = require('./middleware/loggingMiddleware');

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
