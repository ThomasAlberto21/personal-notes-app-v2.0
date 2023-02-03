import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import NoteInputWrapper from '../components/NoteInput';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

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
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <main>
        <h1>Catatan Aktif</h1>
        <div className='header-homepage'>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NoteInputWrapper />
        </div>
        <NoteList notes={notes} messageNotFound='Tidak ada catatan' />
      </main>
    );
  }
}

export default HomePageWrapper;
