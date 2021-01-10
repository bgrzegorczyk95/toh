import { useContext } from "react";
import { useHistory } from "react-router-dom";
import HeroesContext from "../model/heroesContext";

export const useHero = () => {  
  const history = useHistory();
  const { heroes, changeHeroes, selectedHero } = useContext(HeroesContext);
  const hero = heroes.filter(hero => hero?.id === selectedHero?.id)[0];

  const changeHero = (e) => {
    changeHeroes(heroes.map(hero => hero.id === selectedHero.id ? {...hero, name: e.target.value} : hero));
  }

  const goBack = () => {
    history.goBack();
  }

  return {
    hero,
    goBack,
    changeHero
  }
}