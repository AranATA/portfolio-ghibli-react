import React from 'react';
import '../App.css';



function Card(props) {
  return (
    <div>
      <a href="https://project2mesh.herokuapp.com/" target="blank">
        <img src={props.link} alt="Work 01, showing a screenshot..."
          class="img-large"
        />
      </a>
    </div>
  )
};

export default Card;