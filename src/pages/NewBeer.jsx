import Header from '../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../styles/beersForm.css';

const NewBeer = () => {
  /*   const [data, setData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }); */

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');

  const navigate = useNavigate();

  /*   export const createPet = (pet) =>
  api.post('/pet', pet).then((response) => response.data); */

  const handleInputName = (event) => setName(event.target.value);
  const handleInputTagline = (event) => setTagline(event.target.value);
  const handleInputDescription = (event) => setDescription(event.target.value);
  const handleInputFirst_brewed = (event) =>
    setFirst_brewed(event.target.value);
  const handleInputBrewers_tips = (event) =>
    setBrewers_tips(event.target.value);
  const handleInputAttenuation_level = (event) =>
    setAttenuation_level(event.target.value);
  const handleInputContributed_by = (event) =>
    setContributed_by(event.target.value);

  const handleBeerAddition = (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    };
    console.log(newBeer);

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Header />

      <form className="beersForm-wrapper" onSubmit={handleBeerAddition}>
        <label> Name </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleInputName}
        />

        <label> Tagline </label>
        <input
          id="tagline"
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleInputTagline}
        />

        <label> Description </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleInputDescription}
        />

        <label> First_brewed </label>
        <input
          id="first_brewed"
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleInputFirst_brewed}
        />

        <label> Brewers_tips </label>
        <input
          id="brewers_tips"
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleInputBrewers_tips}
        />

        <label> Attenuation_level </label>
        <input
          id="attenuation_level"
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleInputAttenuation_level}
        />

        <label> Contributed_by </label>
        <input
          id="contributed_by"
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleInputContributed_by}
        />
        <button type="submit">Add a Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
