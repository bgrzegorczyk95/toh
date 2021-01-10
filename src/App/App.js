import { useState } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Hero from '../Hero/Hero';
import Heroes from '../Heroes/Heroes';
import { HEROES } from '../model/heroes-mock';
import HeroesContext from '../model/heroesContext';
import './App.css';

function App() {
  const title = 'Tour of Heroes';
  const [heroes, changeHeroes] = useState(HEROES)
  const [selectedHero, changeHero] = useState(undefined);
  const contextValue = {
    heroes,
    selectedHero,
    changeHero,
    changeHeroes
  }

  return (
      <HeroesContext.Provider value={contextValue}>
        <h1>{title}</h1>
        <HashRouter>
          <nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/heroes">Heroes</NavLink>
          </nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/details/:id" component={Hero} />
        </HashRouter>
      </HeroesContext.Provider>
  );
}

export default App;
