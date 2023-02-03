import React from 'react';
import PropTypes from 'prop-types';
import { BsXLg } from 'react-icons/bs';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';

const NoteInputWrapper = () => {
  const navigate = useNavigate();
  const doSomething = () => {
    navigate('/');
  };

  return <NoteInput doSomethingOnSubmit={doSomething} />;
};

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
      showModal: false,
    };

    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
  }



  onTitleHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value.slice(0, this.state.titleLimit),
      };
    });
  }

  onBodyHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    addNote(this.state);
    this.props.doSomethingOnSubmit();
    console.log('data berhasil ditambahkan');
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className='add-note'>
        <IoMdAddCircle
          onClick={this.handleShowModal}
          className='add-note-button'
          size={'4rem'}
        >
          Add
        </IoMdAddCircle>
        {this.state.showModal && (
          <div className='add-note-body'>
            <div className='add-note-modal-content'>
              <div className='add-note-header'>
                <h1>Buat Catatan Anda</h1>
                <span className='close' onClick={this.handleCloseModal}>
                  <BsXLg />
                </span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <p className='add-note-char-limit'>
                  Sisa karakter : {' '}
                  {this.state.titleLimit - this.state.title.length}
                </p>
                <input
                  type='text'
                  value={this.state.title}
                  placeholder='Input Judul Catatan Anda...'
                  onChange={this.onTitleHandler}
                />
                <textarea
                  placeholder='Input Catatan Anda...'
                  onChange={this.onBodyHandler}
                ></textarea>
                <button type='submit'>Buat Catatan Baru</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

NoteInput.propTypes = {
  doSomething: PropTypes.func,
};

export default NoteInputWrapper;
