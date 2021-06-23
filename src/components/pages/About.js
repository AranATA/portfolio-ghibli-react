import React from 'react';
import {Helmet} from 'react-helmet';
import '../../App.css';

function About() {
  return (
    <section id="About Me">
      <Helmet>
        <title>About | Ghibli</title>
      </Helmet>
      <h2>About Me</h2>
      <p>
        My name is Ali Aran, I am a student at UNC-Chapel Hill Boot Camp, in the "Full Stack Flex Program". Spread over
        24 weeks, this program focuses on teaching the required knowledge and skills to build dynamic, end-to-end web
        applications. Upon completion, scheduled for July 21, 2021, the program will award a professional certificate to
        entitle each graduate as a "Full Stack Web Developer".
        <br/>
        <br/>
        This particular portfolio page displays examples of the work that I have completed in the program after 19 weeks of rigorous learning and it will be updated regularly to include more advanced work. The main topics which I learnt thus far include:
        <br/>
        <p class='tab'>HTML, Git, CSS, Javascript, Web-APIs, Third-Party-APIs, Server-Side-APIs, jQuery, Bootstrap CSS, Node.JS, Object-Oriented Programming and ES6, Express.JS Framework, MySQL, Object Relational Mapping - Sequelize, CLI, RESTful APIs - CRUD, Insomnia, Heroku, Validation, ESLint, MVC Paradigm, Handlebars.JS, Environment Variables, User Authentication, NoSQL and MongoDB, Mongoose, IndexedDB, Progressive Web Applications, Manifest and Service Workers, Webpack and React.</p>
        I used React to create this portfolio app at the end of the 19th week.
        <br/>
        <br/>
        I am an architect and prior to my involvement in coding I mostly worked on residential projects both in the US
        and overseas. My responsibilities were usually spread between the following phases of the architectural
        services: program of requirements, schematic design, design development, construction documents, construction
        administration. In time, coordinating the different groups of professionals who were involved in these phases
        has become an inherent part of my job as well. Such endeavors developed my abilities to foresee problems and act
        proactively. My career also let me supervise the design and manufacturing processes simultaneously while I
        partnered with a boat builder to produce custom-designed, homely sailboats.
        <br/>
        <br/>
        I am interested in education and I had the opportunity to teach part-time at different universities. I taught
        architectural design to sophomore students and structural design to seniors. Teaching and the academic
        environment enabled me to do research, form interdisciplinary ties and broaden my knowledge. Even though
        utilizing computers through softwares like AutoCAD, SketchUp, Rhino, Photoshop or 3DS Max was always essential
        in the architectural practice, it was through my affiliation with the schools that I was introduced to the
        concepts of algorithmic thinking and parametric design as applicable design methods in architecture.
        <br/>
        <br/>
        All along my professional life, I took great advantage of my critical thinking skills, attention to details and
        commitment to success. Now, I like to continue manifesting my potential as a "Full Stack Web Developer" and I am really
        excited!
      </p>
    </section>
  )
};

export default About;