import React from 'react';
import DeleteButton from '../components/DeleteButton';
import { toast } from 'react-toastify';
import ArchiveAndUnArchiveButton from '../components/ArchiveAndUnArchiveButton';

import { useNavigate, useParams } from 'react-router-dom';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';

const DetailNoteWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onDeleteHandler = (id) => {
    deleteNote(id);
    toast.success('Catatan Berhasil Dihapus', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
    navigate('/');
  };

  const onArchivedAndActiveHandler = (id, archived) => {
    if (archived) {
      unarchiveNote(id);
      toast.success('Un Archived Success', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    } else {
      archiveNote(id);
      toast.success('Archived Success', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    }

    navigate('/');
  };

  return (
    <DetailNote
      id={id}
      onDeleteHandler={onDeleteHandler}
      onArchivedAndActiveHandler={onArchivedAndActiveHandler}
    />
  );
};

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(this.props.id),
    };
  }

  render() {
    return (
      <>
        <div className='detail-page'>
          <h1 className='detail-page__title'>{this.state.note.title}</h1>
          <p className='detail-page__createdAt'>
            {new Date(this.state.note.createdAt).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='detail-page__body'>{this.state.note.body}</p>
          <div className='detail-page__button'>
            <ArchiveAndUnArchiveButton
              id={this.state.note.id}
              archived={this.state.note.archived}
              onArchivedAndActiveHandler={this.props.onArchivedAndActiveHandler}
            />
            <DeleteButton
              id={this.state.note.id}
              onDeleteHandler={this.props.onDeleteHandler}
              onClick={this.showToast}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DetailNoteWrapper;
