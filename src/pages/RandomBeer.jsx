import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    axios
      .get(' https://ih-beers-api2.herokuapp.com/beers/random')
      .then((element) => {
        console.log('response data', element);
        setRandomBeer(element.data);
      });
  }, []);
  /*     */

  return (
    <div>
      <Header />
      <div className="details-wrapper">
        <div className="details">
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div className="details-details">
            <div className="randomBeer-heading">
              <div>
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.tagline}</h3>
              </div>
              <div>
                <h1>{randomBeer.attenuation_level}</h1>
                <h4>{randomBeer.first_brewed}</h4>
              </div>
            </div>
            <p>{randomBeer.description}</p>
            <small>{randomBeer.contributed_by}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
