import axios from 'axios';

const searchLocation = async (query) => {
  try {
    const response = await axios.get('/api/locations/search', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching location:', error);
    throw error;
  }
};

export { searchLocation };
