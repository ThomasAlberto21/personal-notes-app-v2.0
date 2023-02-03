import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';

const NoteInputButton = () => {
  return (
    <div className='add-note-button'>
      <Link to='/addnote'>
        <IoMdAddCircle className='add-note-button' size={'4rem'} />
      </Link>
    </div>
  );
};

export default NoteInputButton;
