import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/works'>Works</Link></li>
        <li><Link to='/contact'>Home</Link></li>
      </ul>   
    </nav>  
  );
}

export default Navigation;