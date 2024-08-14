import React from 'react';
import './CardLayout.css';

const CardLayout = () => {
  const cards = [
    {
      title: 'Game 1',
      description: 'An exciting adventure game.',
      image: '/game1.jpeg',
    },
    {
      title: 'Game 2',
      description: 'A challenging puzzle game.',
      image: '/game2.jpeg',
    },
    {
      title: 'Game 3',
      description: 'An immersive RPG experience.',
      image: '/game3.jpeg',
    },
    {
      title: 'Game 4',
      description: 'A fast-paced racing game.',
      image: '/game4.jpeg',
    },
  ];

  return (
    <div className="card-layout">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
