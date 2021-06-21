import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <h1>G H I B L I</h1>
      </Link>
    </header>
  );
}

export default Header;
