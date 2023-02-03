import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoteItem = ({ note }) =>{
  return (
    <div className='note-body'>
      <div className='note-item'>
        <p className='note-item__title'>{note.title}</p>
        <p className='note-item__createdAt'>
          {new Date(note.createdAt).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className='note-item__body'>{note.body.substring(0, 80) + '...'}</p>
      </div>
      <Link to={`/notes/${note.id}`}>
        <button className='note-item__button'>Baca Lagi</button>
      </Link>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;
