import React from 'react';
import {Helmet} from 'react-helmet';
import '../../App.css';

function About() {
  return (
    <section id="About Me">
      <Helmet>
        <title>About | ARAN</title>
      </Helmet>
      <h2>About Me</h2>
      <p class='tab'>
        I am a Full Stack Web Developer with a background in design and architecture. I recently earned a certificate in Full Stack Flex Program from UNC - Chapel Hill, where I developed the professional skills to build dynamic, end-to-end web applications in Javascript.
        <br/>
        <br/>
        A passionate learner, designer and builder who focuses on delivering the best at both ends; from efficient functionality to high-quality UX. My degrees and career in architecture have prepared me to approach problems with creativity and teamwork. I like to teach as well and my academic experiences have enhanced my critical thinking and communication skills. 
        <br/>
        <br/>
        Each project in my portfolio gradually led me to better understand how to develop with MERN stack architecture and employ wide range of technologies like IndexedDB, GraphQL or Redux in coherence. Responsive design and engaging user experience are the very front end concepts that I focused on to improve from one project to the other. In my latest project we developed a dynamic MERN stack web app as a team of four. I designed React components with multi search functionality, created a Mongodb database with GraphQL queries and configured user authentication.           
        <br/>
        <br/>
        If you do not see me coding, I must be; spending time with my family, trying out a new recipe in the kitchen or reading something interesting. 
        <br/>
        <br/>
        I’m excited to manifest my potential as part of a creative, quality-driven team. Let’s connect!
      </p>
    </section>
  );
};

export default About;