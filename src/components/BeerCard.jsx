import React from 'react';
import

const BeerCard = () => {
  return (
    <div className="beercard">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>Created by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerCard;
