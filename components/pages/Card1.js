import React from 'react';
import './Card1.css'; // Import the CSS file

function Card1() {
  return (
    <div className="card1">
      <img
        className="card1Img"
        src='/images/Lake.jpeg'
        alt='Hidden Waterfall'
      />
      <div className="card1Info">
        <h1 className="card1Title">Explore the Hidden Waterfall</h1>
        <span className="card1Date">2 hours ago</span>
      </div>
      <p className="card1Desc">
        Detailed information about the hidden waterfall in the Amazon Jungle.
        Additional tips and information for travelers.
        Lorem  
      </p>
    </div>
  );
}

export default Card1;



