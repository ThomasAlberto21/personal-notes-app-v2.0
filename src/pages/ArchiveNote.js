import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

class ArchiveNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };
  }

  render() {
    return (
      <main>
        <div className='header-homepage'>
          <h1>Catatan Arsip</h1>
        </div>
        <NoteList
          notes={this.state.notes}
          messageNotFound='Tidak ada catatan'
        />
      </main>
    );
  }
}

export default ArchiveNote;
