import React from 'react';
import { Link } from 'react-router-dom';
import { BiNotepad, BiArchiveIn } from 'react-icons/bi';

function Navbar() {
  return (
    <>
      <header>
        <h1>
          <Link to='/'>
            <BiNotepad size={'2rem'} />
          </Link>
        </h1>

        <div className='navigation'>
          <ul>
            <li>
              <Link to='/arsip'>
                <BiArchiveIn size={'2rem'} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
