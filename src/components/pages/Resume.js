import React from "react";
import {Helmet} from 'react-helmet';
import '../../App.css';

function Resume() {
  return (
    <section>
      <Helmet>
        <title>Resume | Aran</title>
      </Helmet>
      <h2>Resume</h2>
        <p>
        <a href='https://resume.io/r/bR36xnRxL' target="blank">See Full Document</a>
        <br/>
        <br/>
        <h1>Front End Proficiencies</h1>
        <br/>
        <ul>
          <li>HTML</li>
          <li>CSS and Bootstrap</li>
          <li>Accessibility and Responsive Design</li>
          <li>Third Party APIs</li>
          <li>MVC and Handlebars.JS</li>
          <li>React</li>
        </ul>
        <br/>
        <h1>Back End Proficiencies</h1>
        <br/>
        <ul>
          <li>Node.JS - Express.JS</li>
          <li>MySQL - Sequelize</li>
          <li>Restful APIs - CRUD</li>
          <li>MVC - Controllers and Models</li>
          <li>MongoDB - Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </p>
    </section>
  );
};

export default Resume





  // {/* redirecting to an external site */}

  // < Route exact path = '/resume' render = {() => (window.location = 'https://docs.google.com/document/d/1DbzzKpfFp9nms37w8c6PoG5Ya0vPHIdJk4PkH1aruIs/edit?usp=sharing')} />