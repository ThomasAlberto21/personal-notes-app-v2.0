import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { BsXLg } from 'react-icons/bs';

const AddNote = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='add-note'>
      <IoMdAddCircle
        onClick={() => setIsOpen(true)}
        className='add-note-button'
        size={'4rem'}
      >
        Add
      </IoMdAddCircle>
      {isOpen && (
        <div className='add-note-body'>
          <div className='add-note-modal-content'>
            <div className='add-note-header'>
              <h1>Buat Catatan Anda</h1>
              <span className='close' onClick={() => setIsOpen(false)}>
                <BsXLg />
              </span>
            </div>
            <input type='text' placeholder='Input Judul Catatan Anda...' />
            <textarea placeholder='Input Catatan Anda...'></textarea>
            <button type='submit'>Buat Catatan Baru</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
