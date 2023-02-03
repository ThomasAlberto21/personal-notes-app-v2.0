import React from 'react';
import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

const ArchiveAndUnArchiveButton = ({
  id,
  archived,
  onArchivedAndActiveHandler,
}) => {
  return (
    <div
      className='detail-page-button-component'
      onClick={() => onArchivedAndActiveHandler(id, archived)}
    >
      {archived ? (
        <BiArchiveOut size={'3.2rem'} style={{ marginRight: 15 }} />
      ) : (
        <BiArchiveIn size={'3.2rem'} style={{ marginRight: 15 }} />
      )}
    </div>
  );
};

ArchiveAndUnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchivedAndActiveHandler: PropTypes.func.isRequired,
};

export default ArchiveAndUnArchiveButton;
