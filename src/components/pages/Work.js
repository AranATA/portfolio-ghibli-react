import React from 'react'
import {Helmet} from 'react-helmet';
import '../../App.css';
import Card from '../Card';

import reduxImage from '../../assets/images/scrshot-redux-home.png';
import bookSearchImage from '../../assets/images/scrshot-search-s.png';
import meshImage from '../../assets/images/scrshot-mesh.png';
import techBlogImage from '../../assets/images/scrshot-techblog-home.png';
import budgetAppImage from '../../assets/images/scrshot-budget-home.png';
import workoutImage from '../../assets/images/join-workout.png';
import teamProfileImage from '../../assets/images/scrshot-team-profile-generator.png';
import bfImage from '../../assets/images/bf-image.png';
import weatherImage from '../../assets/images/weather-screen-image.png';
import mipsoImage from '../../assets/images/mipso.png';

const works = [
  
  {
    title: 'Redux Store',
    id: 10,
    featuresA: 'MERN Stack | Stripe',
    featuresB: 'React | Redux',
    image: reduxImage,
    linkD: 'https://obscure-reaches-85100.herokuapp.com/',
    linkG: 'https://github.com/AranATA/redux-store'
  },
  {
    title: 'Book Search \nEngine',
    id: 9,
    featuresA: 'MERN Stack | React',
    featuresB: 'Apollo Server | GraphQL',
    image: bookSearchImage,
    linkD: 'https://guarded-earth-69443.herokuapp.com/',
    linkG: 'https://github.com/AranATA/book-search-engine'
  },
  {
    title: 'Online/Offline \nBudget App',
    id: 8,
    featuresA: 'IndexedDB | Mongoose',
    featuresB: 'ExpressJS | Service-workers',
    image: budgetAppImage,
    linkD: 'https://shrouded-coast-31692.herokuapp.com/',
    linkG: 'https://github.com/AranATA/online-offline-budget-app'
  },
  {
    title: 'Workout Tracker',
    id: 7,
    featuresA: 'Mongoose | MongoDB Atlas',
    featuresB: 'ExpressJS | ChartJS',
    image: workoutImage,
    linkD: 'https://damp-plains-35978.herokuapp.com/',
    linkG: 'https://github.com/AranATA/workout-tracker'
  },
  {
    title: 'Tech Blog',
    id: 6,
    featuresA: 'MVC | Handlebars',
    featuresB: 'ExpressJS | Sequelize',
    image: techBlogImage,
    linkD: 'https://tech-blog-aranata.herokuapp.com/',
    linkG: 'https://github.com/AranATA/tech-blog'
  },
  {
    title: 'Project - MESH',
    id: 5,
    featuresA: 'MVC | Handlebars',
    featuresB: 'ExpressJS | Sequelize',
    image: meshImage,
    linkD: 'https://project2mesh.herokuapp.com/',
    linkG: 'https://github.com/AranATA/mesh'
  },
  {
    title: 'Team Profile \nGenerator',
    id: 4,
    featuresA: 'OOD | CLI-Inquirer',
    featuresB: 'Unit Test & Jest',
    image: teamProfileImage,
    linkD: 'https://drive.google.com/file/d/1R_f3fNE6XvADJ-OV4wGsR3qmg_w4hl6t/view',
    linkG: 'https://github.com/AranATA/team-profile-generator'
  },
  {
    title: 'Project - Buddy Finder',
    id: 3,
    featuresA: '3rd Party APIs (Petfinder, Mapbox-LeafletJs)',
    featuresB: 'Dynamic HTML | Materialize CSS',
    image: bfImage,
    linkD: 'https://aranata.github.io/project-bf/',
    linkG: 'https://github.com/AranATA/project-bf'
  },
  {
    title: 'Weather Screen',
    id: 2,
    featuresA: '3rd Party API (OpenWeather)',
    featuresB: 'Dynamic HTML | Bootstrap CSS',
    image: weatherImage,
    linkD: 'https://aranata.github.io/weather-screen/',
    linkG: 'https://github.com/AranATA/weather-screen'
  },
  {
    title: 'MIPSO',
    id: 1,
    featuresA: 'A Fan Page',
    featuresB:  'HTML | CSS',
    image: mipsoImage,
    linkD: 'https://aranata.github.io/Fanpage-mipso/',
    linkG: 'https://github.com/AranATA/Fanpage-mipso'
  },
];

function Work() {
  return (
    <section id="Work">
      <Helmet>
        <title>Work | Aran</title>
      </Helmet>
      <h2>Work</h2>
      <figure>
        {works.map((work) => (
          <Card title={work.title} key={work.id} featuresA={work.featuresA} featuresB={work.featuresB} image={work.image} linkD={work.linkD} linkG={work.linkG} />
        ))}
      </figure>
    </section>
  );
};

export default Work
