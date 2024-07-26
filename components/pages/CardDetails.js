import React from 'react';
import { useParams } from 'react-router-dom';
import './Cards.css'; // Import CSS for consistent styling

const cardData = [
  {
    id: '1',
    src: 'images/Lake.jpeg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    detail: 'Detailed information about the hidden waterfall in the Amazon Jungle.'
  },
  {
    id: '2',
    src: 'images/Maham.jpg',
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxury',
    detail: 'Detailed information about traveling through the Islands of Bali in a Private Cruise.'
  },
  {
    id: '3',
    src: 'images/Maham.jpg',
    text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
    label: 'Mystery',
    detail: 'Detailed information about setting sail in the Atlantic Ocean.'
  },
  {
    id: '4',
    src: 'images/Travel.jpeg',
    text: 'Experience Football on Top of the Himalayan Mountains',
    label: 'Adventure',
    detail: 'Detailed information about experiencing football on top of the Himalayan Mountains.'
  },
  {
    id: '5',
    src: 'images/lake.jpeg',
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline',
    detail: 'Detailed information about riding through the Sahara Desert on a guided camel tour.'
  },
];

function CardDetail() {
  const { id } = useParams();
  const card = cardData.find(card => card.id === id);

  if (!card) {
    return <h2>Card not found</h2>;
  }

  return (
    <div>
      <h1>{card.label}</h1>
      <img src={card.src} alt={card.text} style={{ width: '100%', height: 'auto' }} />
      <h2>{card.text}</h2>
      <p>{card.detail}</p>
    </div>
  );
}

export default CardDetail;
