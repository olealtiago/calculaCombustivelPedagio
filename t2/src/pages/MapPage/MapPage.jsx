import React, { useState } from 'react';
import { Header, CalculoForm, Mapa } from '../../components';
import './mapPage.css';

const MapPage = () => {
  const [isMenuExpanded, setMenuExpanded] = useState(false);

  const handleMenuToggle = () => {
    setMenuExpanded(!isMenuExpanded);
  };

  return (
    <div className={`map-page ${isMenuExpanded ? 'menu-expanded' : ''}`}>
      <Header showResponsiveMenu={true} onMenuToggle={handleMenuToggle} />
      <div className="map-page-content">
        <div className={`map-display ${isMenuExpanded ? 'menu-expanded' : ''}`}>
          <Mapa />
        </div>
        <div className="form-map-display">
          <CalculoForm />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
