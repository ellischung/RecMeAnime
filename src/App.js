import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Results from './pages/Results';
import {SearchContext} from './context/search';

function App() {
  /* Store all of the anime data we receive from the API here */
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  };

  const setSingle = (data) => {
    setSingleData(data)
  };

  /* Search from myanimelist's API */
  const search = (searchString) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchString}&limit=20`
    ).then((response) => response.json())
  };

  return (
    <SearchContext.Provider 
      value={{search, animeData, setData, singleData, setSingle}}
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
          <Route path="/search" exact>
            <Search />
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