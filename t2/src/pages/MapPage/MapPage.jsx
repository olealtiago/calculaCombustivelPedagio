import React from 'react';
import { Header, CalculoForm, MapDisplay } from '../../components';
import "./mapPage.css";

const MapPage = () => {
  return (
    <div className="map-page">
      <Header showResponsiveMenu={true} />
      <div className="map-page-content">
        <div className="form-map-display">
          <CalculoForm />
        </div>
        <div className="map-display">
          <MapDisplay />
        </div>
      </div>
    </div>
  )
}

export default MapPage;
