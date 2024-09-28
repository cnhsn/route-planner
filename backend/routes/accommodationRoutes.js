const express = require('express');
const router = express.Router();
const accommodationController = require('../controllers/accommodationController');

// Route to get accommodation costs for a location
router.get('/cost', accommodationController.getAccommodationCost);

module.exports = router;
