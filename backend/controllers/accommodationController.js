const axios = require('axios');
const keys = require('../config/keys');

// Function to get accommodation cost using Amadeus API
exports.getAccommodationCost = async (req, res) => {
  const { location, checkInDate, checkOutDate } = req.query;

  if (!location || !checkInDate || !checkOutDate) {
    return res.status(400).json({ error: 'Location, check-in date, and check-out date are required' });
  }

  try {
    // Example API request to get accommodation data
    const response = await axios.get('https://test.api.amadeus.com/v2/shopping/hotel-offers', {
      params: {
        cityCode: location,
        checkInDate,
        checkOutDate,
        apiKey: keys.amadeusApiKey,
      },
    });

    // Calculate average accommodation cost from response
    const offers = response.data.data;
    const averageCost = offers.reduce((total, offer) => total + offer.price.total, 0) / offers.length;

    res.json({ averageCost });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching accommodation data' });
  }
};
