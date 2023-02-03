import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DeleteButton = ({ id, onDeleteHandler }) => {
  return (
    <div
      className='detail-page-button-component'
      onClick={() => onDeleteHandler(id)}
    >
      <RiDeleteBin6Line size={'3rem'} />
    </div>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

export default DeleteButton;
