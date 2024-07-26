import React from 'react';
import './Card1.css'; // Import the updated CSS file

function Card1() {
  return (
    <div className="pageContainer">
      <img
        className="headerImage"
        src='/images/Lake.jpeg'
        alt='Hidden Waterfall'
      />
      <div className="pageContent">
        <h1 className="title">Explore the Hidden Waterfall</h1>
        <span className="date">2 hours ago</span>
        <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, perferendis! Error assumenda ab laboriosam quas fugiat 
        tempora a perspiciatis, hic delectus saepe, 
        quae earum natus similique fuga corporis dolorem possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, perferendis! Error assumenda ab laboriosam quas fugiat 
        tempora a perspiciatis, hic delectus saepe, 
        quae earum natus similique fuga corporis dolorem possimus.
        </p>
      </div>
    </div>
  );
}

export default Card1;
