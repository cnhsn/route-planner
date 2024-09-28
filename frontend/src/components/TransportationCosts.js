import React, { useState, useEffect } from 'react';
import { getTransportationCost } from '../api/transportationApi';

const TransportationCosts = ({ start, end }) => {
  const [cost, setCost] = useState(null);

  useEffect(() => {
    const fetchCost = async () => {
      if (start && end) {
        try {
          const data = await getTransportationCost(start, end);
          setCost(data.cost);
        } catch (error) {
          console.error('Error fetching transportation cost:', error);
        }
      }
    };

    fetchCost();
  }, [start, end]);

  return (
    <div className="transportation-costs">
      {cost !== null ? (
        <p>Estimated Transportation Cost: ${cost.toFixed(2)}</p>
      ) : (
        <p>Enter locations to calculate transportation costs.</p>
      )}
    </div>
  );
};

export default TransportationCosts;
