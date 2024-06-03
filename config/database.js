const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sandeeptiwari222:1234@weingeneous.gsmae6b.mongodb.net/weingeneous', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});

module.exports = mongoose;
