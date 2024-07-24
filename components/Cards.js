import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1 style={{ color: '#D9D6D5' }}>Creative Blog Hub</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
           
            />
            <CardItem
              src='images/Maham.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Maham.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              
            />
            <CardItem
              src='images/Travel.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              
            />
            <CardItem
              src='images/lake.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
