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
        <p className="description">
          Chapter 1 Green light
          <br /><br /> {/* Adds extra space between the title and the text */}
          We broke up a month ago and I’m feeling all of these emotions now. When you said that we were over for good this time I felt like I was in a fever dream and couldn’t comprehend the words that came out of your mouth. I tend to suppress my emotions, and ignore the signs and try and move on from experiences like these. I don’t know how to feel at all, I’m just a 19 year old girl trying to imagine my life without you. You were the first significant other I had ever had in my life, the first person who loved me for my good traits and bad. You held my hand through my mid adolescence and cared for me at my most low points.
          I left my apartment at 9:00pm and went on a night time walk to let out all of these emotions. Prior to leaving I put on my favourite short pink dress, straightened my hair, and threw on some makeup. I took out my iPhone and put in my earbuds and put on my favourite break up songs on full volume. 5 mins into the walk I started crying, my mascara dripped down my cheeks. I knew this was bound to happen so I brought tissues just in case in my purse. I started dancing on the sidewalk, and let out all of the energy in my heart. At one point I even started dancing on the road but quickly got off because there were cars. I just need some sign from the universe to move on from this experience. I’m waiting for it, that green light, I want it.
        </p>
      </div>
    </div>
  );
}

export default Card1;
