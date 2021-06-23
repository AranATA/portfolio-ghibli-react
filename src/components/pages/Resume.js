import React from "react";
import {Helmet} from 'react-helmet';
import '../../App.css';

function Resume() {
  return (
    <section>
      <Helmet>
        <title>Resume | Ghibli</title>
      </Helmet>
      <h2>Resume</h2>
        <p>
        <a href='https://docs.google.com/document/d/1DbzzKpfFp9nms37w8c6PoG5Ya0vPHIdJk4PkH1aruIs/edit?usp=sharing' target="blank">Download Full Document</a>
        <br/>
        <br/>
        <h1>Front End Proficiencies</h1>
        <br/>
        <ul>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
        </ul>
        <br/>
        <h1>Back End Proficiencies</h1>
        <br/>
        <ul>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
          <li>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</li>
        </ul>
      </p>
    </section>
  )
};

export default Resume





  // {/* redirecting to an external site */}

  // < Route exact path = '/resume' render = {() => (window.location = 'https://docs.google.com/document/d/1DbzzKpfFp9nms37w8c6PoG5Ya0vPHIdJk4PkH1aruIs/edit?usp=sharing')} />