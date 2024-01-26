import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import logo from '../../assets/home-icon.png';
import { MenuLateral } from '../../components';

const Header = ({ showResponsiveMenu }) => {
  return (
    <div className="calculo__top">

      {showResponsiveMenu && (
        <MenuLateral />
      )}

      <div className="calculo__top-logo">
        <a href="/">
          <img src={logo} alt="logo" />
          <h1>Calculadora de Viagem</h1>
        </a>
        {/* <Link to="/">
                <img src={logo} alt="logo" />
                <h1>Calculadora de Viagem</h1>
            </Link> */}
      </div>
    </div>
  )
}

export default Header;