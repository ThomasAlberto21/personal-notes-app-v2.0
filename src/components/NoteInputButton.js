import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NoteInputButton = () => {
  return (
    <div className='add-note'>
      <Link to='/addnote'>
        <IoMdAddCircle className='add-note-button' size={'4rem'}>
          Add
        </IoMdAddCircle>
      </Link>
    </div>
  );
};

export default NoteInputButton;
