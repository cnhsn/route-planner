import axios from 'axios';

const getAccommodationCost = async (location, checkInDate, checkOutDate) => {
  try {
    const response = await axios.get('/api/accommodation/cost', {
      params: {
        location,
        checkInDate,
        checkOutDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching accommodation cost:', error);
    throw error;
  }
};

export { getAccommodationCost };
