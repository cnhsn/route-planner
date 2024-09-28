import React, { useState } from 'react';
import { searchLocation } from '../api/geocodingApi';

const RoutePlanner = ({ setLocations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationResults, setLocationResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const data = await searchLocation(searchQuery);
      setLocationResults(data.locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleAddLocation = (location) => {
    setLocations((prevLocations) => [...prevLocations, location]);
    setSearchQuery('');
    setLocationResults([]);
  };

  return (
    <div className="route-planner">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {locationResults.map((location, index) => (
          <li key={index}>
            {location.name}{' '}
            <button onClick={() => handleAddLocation(location)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutePlanner;
