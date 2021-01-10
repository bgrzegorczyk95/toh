import { createContext } from 'react';
import { HEROES } from './heroes-mock';

const HeroesContext = createContext(HEROES);

export default HeroesContext;