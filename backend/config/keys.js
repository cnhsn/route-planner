require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mapboxApiKey: process.env.MAPBOX_API_KEY || '',
  openWeatherMapApiKey: process.env.OPEN_WEATHER_MAP_API_KEY || '',
  numbeoApiKey: process.env.NUMBEO_API_KEY || '',
};
