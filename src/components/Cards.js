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
              id ='1'
              src='images/Melo.jpg'
              text='Melodrama by Lorde Concept Short Story'
              label='Adventure'
           
            />
            <CardItem
              id = '2'
              src='images/Maham.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              id = '3'
              src='images/Maham.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              
            />
            <CardItem
              id = '4'
              src='images/Travel.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              
            />
            <CardItem
              id = '5'
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