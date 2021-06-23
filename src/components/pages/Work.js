import React from 'react'
import {Helmet} from 'react-helmet';
import '../../App.css';
import Card from '../Card';
import meshImage from '../../assets/images/scrshot-mesh.png';
import techBlogImage from '../../assets/images/scrshot-techblog-home.png';

const works = [
  {
    title: 'MESH',
    id: 1,
    featuresA: 'MVC | Handlebars',
    featuresB: 'ExpressJS | Sequelize',
    image: meshImage,
    link: 'https://project2mesh.herokuapp.com/'
  },
  {
    title: 'Tech Blog',
    id: 2,
    featuresA: 'MVC | Handlebars',
    featuresB: 'ExpressJS | Sequelize',
    image: techBlogImage,
    link: 'https://tech-blog-aranata.herokuapp.com/'
  }
];

function Work() {
  return (
    <section id="Work">
      <Helmet>
        <title>Work | Ghibli</title>
      </Helmet>
      <h2>Work</h2>
      <figure>
        {works.map((work) => (
          <Card title={work.title} key={work.id} featuresA={work.featuresA} featuresB={work.featuresB} image={work.image} link={work.link} />
        ))}
      </figure>
    </section>
  );
}

export default Work
