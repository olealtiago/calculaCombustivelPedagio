import React from 'react';
import { Header, CalculoForm, Mapa } from '../../components';
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
          <Mapa latitude={-23.5505} longitude={-46.6333} />
        </div>
      </div>
    </div>
  )
}

export default MapPage;
