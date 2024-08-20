import React from 'react';
import './About.css'; 

export default function About() {
  return (
    <div className="about">
      <div className="aboutContent">
        <h1 className="aboutTitle">
          Hello! I’m <span style={{ color: '#8a4af3' }}>Maham</span>
        </h1>
        <p className="aboutIntro">
          Welcome to my creative space! My journey began with just a journal where I poured out my thoughts and experiences. 
          What started as a personal reflection soon grew into a desire to reach a wider audience. 
          I created this blog to transform my handwritten pieces into a digital space where I can share my story and perspectives with the world. 
          My goal is to inspire others through my experiences and build a supportive environment where creativity and ideas can thrive.
        </p>
        <div className="aboutButtons">
          <a href="mailto:mahammt2014@gmail.com" className="emailButton">
            Email me
          </a>
        </div>
      </div>
      <div className="aboutImage">
        <img src="images/AboutMe.jpg" alt="Maham Tariq" />
      </div>
    </div>
  );
}
