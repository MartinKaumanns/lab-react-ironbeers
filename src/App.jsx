import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:id" element={<SingleBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new" element={<NewBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
