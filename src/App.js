import React from 'react';
import Navbar from './components/Navbar';
import AddNote from './pages/AddNote';
import ArchiveNote from './pages/ArchiveNote';
import NotFoundPage from './pages/NotFoundPage';
import HomePageWrapper from './pages/HomePage';
import DetailNoteWrapper from './pages/DetailNote';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePageWrapper />} />
        <Route path='/addnote' element={<AddNote />} />
        <Route path='/notes/:id' element={<DetailNoteWrapper />} />
        <Route path='/archivednotes' element={<ArchiveNote />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
