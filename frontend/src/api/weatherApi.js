import axios from 'axios';

const getWeatherInfo = async (location) => {
  try {
    const response = await axios.get('/api/weather/info', {
      params: { location },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather information:', error);
    throw error;
  }
};

export { getWeatherInfo };
