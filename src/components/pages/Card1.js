import React from 'react';
import './Card1.css'; // Import the updated CSS file

function Card1() {
  return (
    <div className="pageContainer">
      <img
        className="headerImage"
        src='/images/Melo.jpg'
        alt='Melodrama By Lorde Concept Short Story'
      />
      <div className="pageContent">
        <h1 className="title">Melodrama By Lorde Concept Short Story</h1>
        <span className="date">2 hours ago</span>
        <div className="description">
          <h2 className="chapterTitle">Chapter 1 Green Light</h2>
          <p>
            We broke up a month ago, and I'm feeling all these emotions now. 
            When you said we were over for good this time, 
            it felt like I was in a fever dream, 
            unable to comprehend the words that came out of your mouth. 
            I tend to suppress my emotions, ignore the signs, 
            and try to move on from experiences like these. 
            I don't know how to feel at all; I'm just a 19-year-old girl trying to imagine my life without you. 
            You were the first significant other I ever had, the first person who loved me for my good traits and bad. 
            You held my hand through my mid-adolescence and cared for me during my lowest points.
          </p>
          <p>
            I left my apartment at 9:00 pm and went on a nighttime walk to let out all these emotions. 
            Before leaving, I put on my favorite short pink dress, straightened my hair, and applied some makeup. 
            I took out my iPhone, put in my earbuds, and played my favorite breakup songs at full volume. 
            Five minutes into the walk, I started crying; my mascara ran down my cheeks. 
            I knew this might happen, so I brought tissues in my purse just in case. 
            I started dancing on the sidewalk, letting out all the energy in my heart. 
            At one point, I even danced on the road but quickly got off because of the cars. 
            I just need some sign from the universe to move on from this experience. 
            I'm waiting for it, that green light—I want it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
