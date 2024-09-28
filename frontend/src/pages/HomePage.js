import React, { useState } from 'react';
import RoutePlanner from '../components/RoutePlanner';
import MapComponent from '../components/MapComponent';
import DateSelector from '../components/DateSelector';
import TransportationCosts from '../components/TransportationCosts';
import Summary from '../components/Summary';
import { getAccommodationCost } from '../api/accommodationApi';
import { getWeatherInfo } from '../api/weatherApi';
import '../assets/styles/HomePage.css';

const HomePage = () => {
  // States to manage the selected locations and trip details
  const [locations, setLocations] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [accommodationCost, setAccommodationCost] = useState(null);
  const [weather, setWeather] = useState(null);
  const [transportationCost, setTransportationCost] = useState(null);

  // Fetch accommodation and weather information for the selected locations
  const fetchTripDetails = async () => {
    if (locations.length === 0 || !startDate || !endDate) {
      alert('Please add locations and select start and end dates.');
      return;
    }

    const location = locations[0]; // Taking the first location for demonstration
    try {
      // Fetch accommodation cost
      const accommodationData = await getAccommodationCost(location.name, startDate, endDate);
      setAccommodationCost(accommodationData.averageCost);

      // Fetch weather information
      const weatherData = await getWeatherInfo(location.name);
      setWeather({
        temperature: weatherData.temperature,
        description: weatherData.description,
      });
    } catch (error) {
      console.error('Error fetching trip details:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Route Planner</h1>
      <div className="planner-section">
        <RoutePlanner setLocations={setLocations} />
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <button onClick={fetchTripDetails}>Fetch Trip Details</button>
      </div>
      <div className="map-section">
        <MapComponent locations={locations} />
      </div>
      <div className="info-section">
        {locations.length > 1 && (
          <TransportationCosts
            start={locations[0].coordinates}
            end={locations[locations.length - 1].coordinates}
          />
        )}
        <Summary
          accommodationCost={accommodationCost}
          weather={weather}
          transportationCost={transportationCost}
        />
      </div>
    </div>
  );
};

export default HomePage;
