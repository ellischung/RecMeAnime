import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import { SearchContext } from './context/search';

function App() {
  // Store all of the anime data we receive from the API here
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [recData, setRecData] = useState([]);
  const [scoreData, setScoreData] = useState({});

  // Set data from search
  const setData = (data) => {
    setAnimeData(data);
  };

  // set data for single anime
  const setSingle = (data) => {
    setSingleData(data);
  };

  // set data for recommendations
  const setRec = (data) => {
    setRecData(data);
  };

  // set data for single anime score
  const setScore = (data) => {
    setScoreData(data);
  }

  // Search from myanimelist's API
  const search = (searchString) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchString}&limit=20`
    ).then((response) => response.json());
  };

  return (
    <SearchContext.Provider 
      value={{search, animeData, setData, singleData, setSingle, recData, setRec, scoreData, setScore}}
    >
    <Router>
      {/* Navigation bar with home redirect and search */} 
      <Navbar />
      {/* Main content of website with routes */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;