import React from 'react';
import { BsXLg } from 'react-icons/bs';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
  }

  openModal = () => {
    this.setState({
      display: 'block',
    });
  };

  closeModal = () => {
    this.setState({
      display: 'none',
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.openModal} className='show-modal'>
          Cari Catatan
        </button>
        <div style={{ display: this.state.display }} className='modal'>
          <div className='modal-content'>
            <span onClick={this.closeModal} className='close'>
              <BsXLg />
            </span>
            <form>
              <h1>Catatan Aktif</h1>
              <input type='text' placeholder='Cari Catatan Anda...' />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default SearchBar;
