import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePageWrapper from './pages/HomePage';

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
