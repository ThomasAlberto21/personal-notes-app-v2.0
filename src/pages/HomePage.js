import React from 'react';
import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import AddNote from '../components/AddNote';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes() || [],
      keyword: props.defaultKeyword || '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    return (
      <main>
        <h1>Catatan Aktif</h1>
        <SearchBar />
        <NoteList
          notes={this.state.notes}
          messageNotFound='Tidak ada catatan'
        />
        <AddNote />
      </main>
    );
  }
}

export default HomePage;
