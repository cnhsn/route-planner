const axios = require('axios');
const keys = require('../config/keys');

// Function to search for a location using Mapbox API
exports.searchLocation = async (req, res) => {
  const searchQuery = req.query.query;

  if (!searchQuery) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json`, {
      params: {
        access_token: keys.mapboxApiKey,
        limit: 5,
      },
    });

    const locations = response.data.features.map((feature) => ({
      name: feature.place_name,
      coordinates: feature.geometry.coordinates,
    }));

    res.json({ locations });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching location data' });
  }
};
