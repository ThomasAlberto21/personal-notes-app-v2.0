import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Cari Catatan Anda</button>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='header'>
              <h1>Cari Catatan Anda</h1>
              <span className='close' onClick={() => setIsOpen(false)}>
                <BsXLg />
              </span>
            </div>
            <input
              type='text'
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
              placeholder='Masukkan Judul Catatan Anda'
            />
            <button type='submit'>Cari</button>
          </div>
        </div>
      )}
    </div>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
