import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Results from './pages/Results';

function App() {
  return <Router>
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
  </Router>;
}

export default App;