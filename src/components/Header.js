import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='header'>
      <Link to='/'style={{ textDecoration: 'none' }}>
        <h1>G H I B L I</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
