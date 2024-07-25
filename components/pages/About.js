import React from 'react';
import './About.css'; // Import the CSS file for styling

export default function About() {
  return (
    <div className="about">
      <div className="aboutContent">
        <h1 className="aboutTitle">Hello! I’m Maham
        </h1>
        <h1 className="aboutTitle"></h1>
        <p className="aboutIntro">
        <span className="highlight">lorem</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, perferendis! Error assumenda ab laboriosam quas fugiat 
        tempora a perspiciatis, hic delectus saepe, 
        quae earum natus similique fuga corporis dolorem possimus.

        </p>
        <div className="aboutButtons">
          <button className="emailButton">Email me</button>
        </div>
      </div>
      <div className="aboutImage">
        <img src="images/AboutMe.jpg" alt="Maham Tariq" />
      </div>
    </div>
  );
}
