import React from 'react';
import { Header, CalculoFormMap, MapDisplay } from '../../components';
import "./mapPage.css";

const MapPage = () => {
  return (
    <div>
      <Header />
      <div className="map-display">
        <CalculoFormMap />
        <MapDisplay />
      </div>
    </div>
  )
}

export default MapPage;
