import React from 'react';
import '../App.css';



function Card(props) {
  return (
    <div className="image-container-normal">
      <div className="text-container-normal color">
        <h4>{props.title}</h4>
        <p>
          {props.featuresA}<br/>
          {props.featuresB}
        </p>
      </div>
      <div className="bw">
        <a href={props.link} target="blank">
          <img src={props.image} alt={`Work ${props.id}`}
              className="img-normal"/>
        </a>
      </div>
    </div>
  )
};

      export default Card;

