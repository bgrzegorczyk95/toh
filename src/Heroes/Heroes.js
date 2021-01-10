import { useContext } from "react";

import HeroesContext from "../model/heroesContext";
import SelectedHero from "./SelectedHero";
import './Heroes.css';

const Heroes = () => {
  const { heroes, selectedHero, changeHero } = useContext(HeroesContext);

  return (
    <>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroes.map(hero => (
          <li
            key={hero.id}
            className={(hero.id === selectedHero?.id && 'selected') || ''}
            onClick={() => changeHero(hero)}
          >
            <div className="badge">{hero.id}</div>{hero.name}
          </li>
        ))}
      </ul>
      {selectedHero && <SelectedHero selectedHero={selectedHero} />}
    </>
  )
}

export default Heroes;