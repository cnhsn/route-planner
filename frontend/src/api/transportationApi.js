import axios from 'axios';

const getTransportationCost = async (start, end) => {
  try {
    const response = await axios.get('/api/transportation/cost', {
      params: {
        start,
        end,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transportation cost:', error);
    throw error;
  }
};

export { getTransportationCost };
