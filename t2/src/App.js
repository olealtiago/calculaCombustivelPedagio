import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, MapPage } from './pages';

const App = () => {
  return (
    <div className='App'>
        {/* <HomePage /> */}
        <MapPage />
    </div>

    // <div className='App'>
    //     <Routes >
    //         <Route path='/' element={<HomePage />} />
    //         <Route path='map' element={<MapPage />} />
    //     </Routes>
    // </div>
  )
}

export default App;
