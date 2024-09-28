const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Route to get weather information for a location
router.get('/info', weatherController.getWeatherInfo);

module.exports = router;
