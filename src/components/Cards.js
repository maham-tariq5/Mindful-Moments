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
              text='Patience is a Virtue'
              label='Luxury'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              id = '3'
              src='images/pics.jpg'
              text='Allow Yourself to Grow'
              label='Mystery'
              
            />
            <CardItem
              id = '4'
              src='images/IMG_5623.jpg'
              text='Keep The Pure Hearts Close to You'
              label='Adventure'
              
            />
            <CardItem
              id = '5'
              src='images/IMG_8487.jpg'
              text='A Sibling Bond is Forever'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
