import React from 'react';
import './header.css';

// import { Link } from 'react-router-dom';
import logo from '../../assets/home-icon.png';
import { MenuLateral } from '../../components';

const Header = ({ showResponsiveMenu }) => {
  return (
    <div className="header-container">
      <div className="calculo__top-menu">
        {showResponsiveMenu && (
          <MenuLateral />
        )}
      </div>

      <div className="calculo__top">
        <div className="calculo__top-logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <h1>Calculadora de Viagem</h1>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;