import React from 'react';
import '../App.css';
import githublogoneg from '../assets/images/githublogo-neg32.png';
import githublogo from '../assets/images/githublogo32.png';


function Card(props) {
  return (
    <div className="image-container-normal">
      <div className="text-container-normal color">
        <h4>{props.title}</h4>
        <div>
          <div className="card-logo">
            <a href={props.linkG} target="blank">
              <img src={githublogoneg} alt="Github logo prev" />
              <img src={githublogo} alt="Github logo next" className="img-next" />
            </a>
          </div>
          <div className='features'>
            {props.featuresA}<br />
            {props.featuresB}
          </div>
        </div>
      </div>
      <div className="bw">
        <a href={props.linkD} target="blank">
          <img src={props.image} alt={`Work ${props.id}`}
            className="img-normal" />
        </a>
      </div>
    </div>
  );
};
export default Card;