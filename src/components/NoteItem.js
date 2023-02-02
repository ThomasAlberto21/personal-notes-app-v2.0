import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItem({ note }) {
  return (
    <Link to={`/notes/${note.id}`}>
      <div className='note-item'>
        <p className='note-item__title'>{note.title}</p>
        <p className='note-item__createdAt'>{note.date}</p>
        <p className='note-item__body'>{note.body.substring(0, 80) + '...'}</p>
      </div>
    </Link>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;
