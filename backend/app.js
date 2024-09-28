const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const keys = require('./config/keys');
const locationRoutes = require('./routes/locationRoutes');
const transportationRoutes = require('./routes/transportationRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/locations', locationRoutes);
app.use('/api/transportation', transportationRoutes);
app.use('/api/accommodation', accommodationRoutes);
app.use('/api/weather', weatherRoutes);

// Server start
const PORT = keys.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
