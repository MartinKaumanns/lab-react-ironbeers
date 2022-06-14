import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/details.css';

const SingleBeer = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((element) => {
        console.log('response data', element.data);
        setDetails(element.data);
      });
  }, [params.id]);

  return (
    <div>
      <Header />
      <div className="details-wrapper">
        <div className="details">
          <img src={details.image_url} alt={details.name} />
          <div className="details-details">
            <div className="details-heading">
              <div>
                <h1>{details.name}</h1>
                <h3>{details.tagline}</h3>
              </div>
              <div>
                <h1>{details.attenuation_level}</h1>
                <h4>{details.first_brewed}</h4>
              </div>
            </div>
            <p>{details.description}</p>
            <small>{details.contributed_by}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBeer;
