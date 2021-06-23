import React from 'react';
import '../App.css';
import githublogo from '../assets/images/githublogo64.png';
import youtubelogo from '../assets/images/youtubelogo128x96c.png';
import twitterlogo from '../assets/images/twitterlogo54.png';
import linkedinlogo from '../assets/images/linkedinlogo54.png';

function Footer() {
  return (
    <div>
      <section id="Contact Me">
        <h2>I`m On</h2>
        <nav className="contact-nav">
          <ul>
            <li>
            <div className='logo'>
              <img src= {twitterlogo} alt="Twitter logo"/>
              </div>
              <a href='https://twitter.com'target='blank' > Twitter </a>
            </li>
            <li>
            <div className='logo'>
              <img src= {youtubelogo} alt="Youtube logo"/>
              </div>
              <a href='https://www.youtube.com/'> Youtube </a>
            </li>
            <li>
              <div className='logo'>
              <img src= {githublogo} alt="Github logo"/>
              </div>
              <a href='https://github.com/AranATA' target='blank'> GitHub </a>
            </li>
            <li>
            <div className='logo'>
              <img src= {linkedinlogo} alt="LinkedIn logo"/>
              </div>
              <a href='https://www.linkedin.com/in/ghibli/' target='blank'> LinkedIn </a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="article">
        <div className="">
          <h3>&copy; 2021 Ghibli</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
