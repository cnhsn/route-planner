const express = require('express');
const router = express.Router();
const transportationController = require('../controllers/transportationController');

// Route to get transportation costs between locations
router.get('/cost', transportationController.getTransportationCost);

module.exports = router;
