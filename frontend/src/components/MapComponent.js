import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ locations }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.coordinates[1], location.coordinates[0]]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
