import React from 'react';
import { Link } from 'react-router-dom';
import { BiArchiveIn } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>My Personal Note</Link>
      </h1>

      <div className='navigation'>
        <ul>
          <li>
            <Link to='/archivednotes'>
              <BiArchiveIn size={'2rem'} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
