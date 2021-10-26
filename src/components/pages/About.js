import React from 'react';
import SelfPic from '../../images/self.jpeg';
import '../../styles/style.css';
// import { Image } from 'react-bootstrap';

export default function About() {
  return (

    <><section id="About-Me" class="container">
      <div class="text-block">

        <h2>About Me</h2>
        <img class="image2" src={SelfPic} alt="candidate" width="300" height="300" />
        <p class="container">
          Web developer currently enrolled in the full stack coding bootcamp at the University of Richmond. I have a strong interest in backend web development and also a background in networking with my Electrical Engineering Degree. I have always had a strong interest in problem solving and puzzles and given the amount of web developing I have done thus far I can say firsthand that the challenges have given me just as much excitement as I was expecting. Collaborating and learning alongside others in order to create a working product has also yielded it's share of rewards as I have experienced recently.
        </p>
      </div>

      </section></>
  );
}
