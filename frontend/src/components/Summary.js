import React from 'react';

const Summary = ({ accommodationCost, weather, transportationCost }) => {
  return (
    <div className="summary">
      <h3>Trip Summary</h3>
      <p>Accommodation Cost: ${accommodationCost?.toFixed(2) || 'N/A'}</p>
      <p>Transportation Cost: ${transportationCost?.toFixed(2) || 'N/A'}</p>
      <p>Weather: {weather ? `${weather.temperature}°C, ${weather.description}` : 'N/A'}</p>
    </div>
  );
};

export default Summary;
