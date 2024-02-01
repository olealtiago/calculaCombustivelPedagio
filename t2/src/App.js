import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

    // <div className='App'>
    //     <Routes >
    //         <Route path='/' element={<HomePage />} />
    //         <Route path='map' element={<MapPage />} />
    //     </Routes>
    // </div>
  )
}

export default App;
