import React from 'react';
import './homePage.css';

import { CalculoFormHome, Header } from '../../components';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-header">
        <Header />
      </div>
      <div className="home-form">
        <CalculoFormHome />
      </div>
    </div>
  )
}

export default HomePage;
