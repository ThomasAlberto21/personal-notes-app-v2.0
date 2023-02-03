import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const NoteInputWrapper = () => {
  const navigate = useNavigate();
  const doSomething = () => {
    if (addNote) {
      navigate('/');
      toast.success('Catatan Berhasil Ditambahkan', {
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
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className='add-note'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <p>Buat Catatan Baru</p>
            <label htmlFor='name'>
              Sisa karakter : {this.state.titleLimit - this.state.title.length}
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state.title}
              placeholder='Input Judul Catatan Anda...'
              onChange={this.onTitleHandler}
            />
          </div>
          <div className='form-group'>
            <textarea
              id='message'
              name='message'
              placeholder='Input Isi Catatan Anda...'
              onChange={this.onBodyHandler}
            />
          </div>
          <button type='submit' disabled={!title || !body}>
            Buat Catatan Baru
          </button>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  doSomething: PropTypes.func,
};

export default NoteInputWrapper;
