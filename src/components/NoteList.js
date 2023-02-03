import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteList = ({ notes, messageNotFound }) => {
  if (notes.length === 0) {
    return <p className='notes-list-empty'>{messageNotFound}</p>;
  }

  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  messageNotFound: PropTypes.string.isRequired,
};

export default NoteList;
