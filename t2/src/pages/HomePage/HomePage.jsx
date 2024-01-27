import React from 'react';
import './homePage.css';

import { CalculoForm, Header } from '../../components';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-header">
        <Header />
      </div>
      <div className="home-form">
        <CalculoForm />
      </div>
    </div>
  )
}

export default HomePage;
