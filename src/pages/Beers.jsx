/* import { Link } from 'react-router-dom'; */
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/beers.css';

import Header from '../components/Header';
import { Link } from 'react-router-dom';
import BeerFilter from '../components/BeerFilter';

const Beers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('response data', response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      {/*       <BeerFilter /> */}
      <div className="beercard-wrapper">
        {data.map((beer) => (
          <Link to={`/beers/${beer._id}`}>
            <div key={beer._id} className="beercard">
              <img src={beer.image_url} alt={beer.name} width="60px" />

              <div>
                <div className="beer-details">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>Created by: {beer.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Beers;
