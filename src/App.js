import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
