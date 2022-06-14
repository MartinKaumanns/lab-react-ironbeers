import { Link } from 'react-router-dom';
import '../styles/home.css';
import allBeers from './../assets/beers.png';
import randomBeer from './../assets/random-beer.png';
import newBeer from './../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <Link to={'/beers'}>
        <img src={allBeers} alt="beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          itaque provident voluptates hic ab pariatur tempore eaque recusandae
          repudiandae, non, quo unde minus, nulla quaerat saepe molestias quod
          facere eveniet!
        </p>
      </Link>
      <Link to={'/random-beer'}>
        <img src={randomBeer} alt="random beer" />
        <h1>Random Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          itaque provident voluptates hic ab pariatur tempore eaque recusandae
          repudiandae, non, quo unde minus, nulla quaerat saepe molestias quod
          facere eveniet!
        </p>
      </Link>
      <Link to={'/new'}>
        <img src={newBeer} alt="new beer" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          itaque provident voluptates hic ab pariatur tempore eaque recusandae
          repudiandae, non, quo unde minus, nulla quaerat saepe molestias quod
          facere eveniet!
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
