// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect('your_mongoDB_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const scheduleRoutes = require('./routes/schedule');
app.use('/api/schedule', scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
