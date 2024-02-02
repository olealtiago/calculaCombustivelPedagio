import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, MapPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='map' element={<MapPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
