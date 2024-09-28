const axios = require('axios');
const keys = require('../config/keys');

// Function to get weather information using OpenWeatherMap API
exports.getWeatherInfo = async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: location,
        appid: keys.openWeatherMapApiKey,
        units: 'metric',
      },
    });

    const temperature = response.data.main.temp;
    const description = response.data.weather[0].description;

    res.json({ temperature, description });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
};
