import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/about-me'>About Me</Link></li>
        <li><Link to='/work'>Work</Link></li>
        <li><Link to='/contact-me'>Contact Me</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>   
    </nav>  
  );
}

export default Navigation;