const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Route to search locations
router.get('/search', locationController.searchLocation);

module.exports = router;
