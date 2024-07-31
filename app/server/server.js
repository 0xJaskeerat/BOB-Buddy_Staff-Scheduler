// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://jaskeerat10000:TrKXrnRYVyetcNIH@cluster0.gyluafl.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const scheduleRoutes = require('./routes/schedule');

app.use('/api/schedule', scheduleRoutes);

// Root route to verify server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});