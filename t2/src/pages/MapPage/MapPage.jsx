import React, { useState, useEffect } from 'react';
import { Header, CalculoForm, Mapa, Result } from '../../components';
import './mapPage.css';

const DelayedRender = ({ children, delay }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return shouldRender ? children : null;
};

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
        <DelayedRender delay={3000}>
          <div className="result-container">
            <Result />
          </div>
        </DelayedRender>
      </div>
    </div>
  );
};

export default MapPage;
