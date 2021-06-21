import React from 'react'
import '../../App.css';

const works = [
  {
    title: 'mesh'
  }
];

function Work(props) {
  return (
    <div>
            <a href="https://project2mesh.herokuapp.com/" target="blank">
              <img src={props.link} alt="a photo of Work 01, showing a screenshot..."
                class="img-large"/>LINK
            </a>
    </div>
  )
}

export default Work
