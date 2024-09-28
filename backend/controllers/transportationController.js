const axios = require('axios');
const keys = require('../config/keys');

// Function to calculate transportation cost using OpenRouteService or Google Maps Distance API
exports.getTransportationCost = async (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({ error: 'Start and end coordinates are required' });
  }

  try {
    // Example of calling a distance API (assuming OpenRouteService)
    const response = await axios.get('https://api.openrouteservice.org/v2/directions/driving-car', {
      params: {
        api_key: keys.openRouteServiceApiKey,
        start,
        end,
      },
    });

    const distance = response.data.routes[0].summary.distance; // in meters
    const duration = response.data.routes[0].summary.duration; // in seconds

    // Example calculation for cost (assuming $0.15 per km)
    const cost = (distance / 1000) * 0.15;

    res.json({ distance, duration, cost });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transportation data' });
  }
};
