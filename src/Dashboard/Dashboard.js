import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HeroesContext from '../model/heroesContext';

import './Dashboard.css';

const Dashboard = () => {
  const { heroes, changeHero } = useContext(HeroesContext);
  const topHeroes = heroes.slice(1, 5);

  return (
    <>
      <h3>Top Heroes</h3>
      <div className="grid grid-pad">
        {topHeroes.map(hero => (
          <NavLink
            key={hero.id}
            className="col-1-4"
            to={`/details/${hero.id}`}
            onClick={() => changeHero(hero)}
          >
            <div className="module hero">
              <h4>{hero.name}</h4>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Dashboard;