import React from 'react';
import Navbar from './components/Navbar';
import HomePageWrapper from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePageWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
