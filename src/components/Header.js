import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='header'>
      <Link to={process.env.PUBLIC_URL + '/'} style={{ textDecoration: 'none' }}>
        <h1>ALI ARAN</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;