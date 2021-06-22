import React from 'react';
import '../../App.css';
import ghibliPhoto from '../../assets/images/portfolio-photo.jpg';

function Home() {
  return (
    <article>
      <h3>“Everybody should learn to program a computer, because it teaches you how to think.” <span>- Steve Jobs</span>
      </h3>
      
      <img src= {ghibliPhoto} alt="a black and white Ghibli smiling." className="img-ghibli" />
      
    </article>
  )
}

export default Home;