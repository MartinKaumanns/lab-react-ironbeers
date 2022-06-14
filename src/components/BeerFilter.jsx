import axios from 'axios';
import { useState, useEffect } from 'react';

const BeerFilter = () => {
  const [searchBeer, setSearchBeer] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
      .then((response) => {
        console.log(response.data);
      });
  });

  return (
    <div>
      <form action="">
        <label htmlFor="">Search</label>
        <textarea
          name="Search"
          id="search"
          placeholder="Type in a beer..."
          value={searchBeer}
          onChange={(event) => setSearchBeer(event.target.value)}
        />
      </form>
    </div>
  );
};

export default BeerFilter;
